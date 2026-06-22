import React, { useState, useEffect, useRef } from 'react';
import { Card, Button, Space, Typography, Row, Col, Progress, Modal, Statistic, Alert } from 'antd';
import { 
  PlayCircleOutlined, 
  ClockCircleOutlined, 
  CheckCircleOutlined,
  FileTextOutlined,
  TrophyOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import styled from 'styled-components';
import QuestionCard from '../components/QuestionCard';
import AnswerCard from '../components/AnswerCard';
import type { Question } from '../data/questions';
import { getCurrentQuestions } from '../data/subject';
import { saveAnswer, saveExamRecord } from '../utils/storage';

const { Title, Paragraph, Text } = Typography;

const StyledCard = styled(Card)`
  margin-bottom: var(--mei-spacing-stack-lg);
  border-radius: var(--mei-radius-xl);
  border: 1px solid var(--mei-theme-border-default);
  background: var(--mei-theme-bg-page);
  box-shadow: none;
`;

const ExamHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--mei-spacing-stack-lg);
  flex-wrap: wrap;
  gap: var(--mei-spacing-inline-md);
`;

const Timer = styled.div`
  font-size: var(--mei-font-size-2xl);
  font-weight: var(--mei-font-weight-bold);
  color: var(--mei-color-primary-600);
  text-align: center;
  padding: var(--mei-spacing-inset-sm) var(--mei-spacing-inline-lg);
  background: var(--mei-color-primary-50);
  border-radius: var(--mei-radius-md);
  border: 2px solid var(--mei-color-primary-500);
  display: flex;
  align-items: center;
  gap: 8px;
  font-variant-numeric: tabular-nums;
  font-family: var(--mei-font-mono);
`;

const ReviewPanel = styled.div`
  background: var(--mei-theme-bg-page);
  border: 1px solid var(--mei-theme-border-default);
  border-radius: var(--mei-radius-md);
  padding: 16px;
  margin-top: 16px;
`;

const RuleItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  background: var(--mei-theme-bg-page);
  border-radius: var(--mei-radius-md);
  border: 1px solid var(--mei-theme-border-default);
  transition: all var(--mei-motion-fast) var(--mei-ease-out);
  
  &:hover {
    border-color: var(--mei-color-primary-300);
    background: var(--mei-color-primary-50);
  }
`;

function getRandomQuestions(count: number): Question[] {
  const all = getCurrentQuestions();
  const shuffled = [...all].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, all.length));
}

const EXAM_DURATION = 90 * 60; // 90 minutes
const EXAM_QUESTION_COUNT = 100;

const ExamLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 24px;
  align-items: start;
  position: relative;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const QuestionSection = styled.div`
  min-width: 0; // Prevent flex/grid overflow
`;

const SidebarSection = styled.div`
  position: sticky;
  top: 140px; // HUD height (80px) + spacing
  height: calc(100vh - 160px - 72px); // Viewport - Header - HUD - Footer
  min-width: 300px;

  @media (max-width: 992px) {
    position: static;
    height: auto;
    margin-bottom: 24px;
  }
`;

const ExamHUD = styled.div`
  position: sticky;
  top: 64px; // Matches Header height
  z-index: 900;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  WebkitBackdropFilter: blur(12px);
  border-bottom: 1px solid var(--mei-theme-border-default);
  padding: 16px 24px;
  margin: -32px -24px 24px -24px;
  box-shadow: var(--mei-shadow-sm);
`;

const Exam: React.FC = () => {
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isStarted, setIsStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);
  const [isFinished, setIsFinished] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [reviewQuestionIndex, setReviewQuestionIndex] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const autoSubmitted = useRef(false);

  useEffect(() => {
    if (isStarted && !isFinished) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev: number) => {
          if (prev <= 1) return 0;
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isStarted, isFinished]);

  // auto-submit when timer hits 0
  useEffect(() => {
    if (isStarted && timeLeft === 0 && !isFinished && !autoSubmitted.current) {
      autoSubmitted.current = true;
      if (timerRef.current) clearInterval(timerRef.current);

      const correctCount = Object.values(userAnswers).filter((answer, index) =>
        answer === examQuestions[index]?.answer
      ).length;

      Object.entries(userAnswers).forEach(([qId, answer]) => {
        const q = examQuestions.find(eq => eq.id === Number(qId));
        if (q) saveAnswer(Number(qId), answer, answer === q.answer);
      });

      saveExamRecord({
        date: new Date().toISOString().slice(0, 10),
        score: Math.round((correctCount / examQuestions.length) * 100),
        total: examQuestions.length,
        correct: correctCount,
        answers: userAnswers,
      });

      setIsFinished(true);
      setShowResults(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  const handleStartExam = () => {
    const questions = getRandomQuestions(EXAM_QUESTION_COUNT);
    setExamQuestions(questions);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setIsStarted(true);
    setIsFinished(false);
    setShowResults(false);
    setTimeLeft(EXAM_DURATION);
    autoSubmitted.current = false;
  };

  const handleAnswer = (questionId: number, answer: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < examQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleFinishExam = () => {
    if (isFinished) return;

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    const correctCount = Object.values(userAnswers).filter((answer, index) =>
      answer === examQuestions[index]?.answer
    ).length;

    Object.entries(userAnswers).forEach(([qId, answer]) => {
      const q = examQuestions.find(eq => eq.id === Number(qId));
      if (q) saveAnswer(Number(qId), answer, answer === q.answer);
    });

    saveExamRecord({
      date: new Date().toISOString().slice(0, 10),
      score: Math.round((correctCount / examQuestions.length) * 100),
      total: examQuestions.length,
      correct: correctCount,
      answers: userAnswers,
    });

    setIsFinished(true);
    setShowResults(true);
  };

  const handleReset = () => {
    setIsStarted(false);
    setIsFinished(false);
    setShowResults(false);
    setExamQuestions([]);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setTimeLeft(EXAM_DURATION);
    autoSubmitted.current = false;
    setReviewQuestionIndex(null);
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const currentQuestion = examQuestions[currentQuestionIndex];
  const totalQuestions = examQuestions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const progress = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;
  const correctAnswers = Object.values(userAnswers).filter((answer, index) =>
    answer === examQuestions[index]?.answer
  ).length;
  const score = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
  const passed = score >= 80;

  return (
    <div>
      {!isStarted && (
        <>
          <Title level={2} style={{ color: 'var(--mei-theme-text-primary)' }}>模拟考试</Title>
          <Paragraph style={{ color: 'var(--mei-theme-text-secondary)', marginBottom: 24 }}>
            全真模拟考试环境，测试您的学习成果
          </Paragraph>
          <StyledCard>
            <div style={{ padding: 'var(--mei-spacing-inset-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                <div style={{ width: 4, height: 18, background: 'var(--mei-color-primary-500)', borderRadius: 2 }}></div>
                <Title level={4} style={{ margin: 0 }}>考试规则与说明</Title>
              </div>
              
              <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
                <Col xs={24} sm={12} md={8}>
                  <RuleItem>
                    <ClockCircleOutlined style={{ color: 'var(--mei-color-primary-500)', fontSize: 18, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--mei-theme-text-primary)' }}>答题时长</div>
                      <div style={{ fontSize: 13, color: 'var(--mei-theme-text-secondary)', marginTop: 2 }}>全程 90 分钟</div>
                    </div>
                  </RuleItem>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <RuleItem>
                    <FileTextOutlined style={{ color: 'var(--mei-color-primary-500)', fontSize: 18, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--mei-theme-text-primary)' }}>题目数量</div>
                      <div style={{ fontSize: 13, color: 'var(--mei-theme-text-secondary)', marginTop: 2 }}>共 {EXAM_QUESTION_COUNT} 道单选题</div>
                    </div>
                  </RuleItem>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <RuleItem>
                    <TrophyOutlined style={{ color: 'var(--mei-color-primary-500)', fontSize: 18, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--mei-theme-text-primary)' }}>合格标准</div>
                      <div style={{ fontSize: 13, color: 'var(--mei-theme-text-secondary)', marginTop: 2 }}>满分 100 分，80 分及格</div>
                    </div>
                  </RuleItem>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <RuleItem>
                    <CheckCircleOutlined style={{ color: 'var(--mei-color-success-base)', fontSize: 18, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--mei-theme-text-primary)' }}>自动交卷</div>
                      <div style={{ fontSize: 13, color: 'var(--mei-theme-text-secondary)', marginTop: 2 }}>倒计时结束系统将自动提交</div>
                    </div>
                  </RuleItem>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <RuleItem>
                    <InfoCircleOutlined style={{ color: 'var(--mei-color-warning-base)', fontSize: 18, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--mei-theme-text-primary)' }}>提前交卷</div>
                      <div style={{ fontSize: 13, color: 'var(--mei-theme-text-secondary)', marginTop: 2 }}>确认答题完成后可随时交卷</div>
                    </div>
                  </RuleItem>
                </Col>
              </Row>

              <div style={{ 
                background: 'var(--mei-color-primary-50)', 
                padding: '20px', 
                borderRadius: 'var(--mei-radius-lg)',
                border: '1px dashed var(--mei-color-primary-200)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 16
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <ExclamationCircleOutlined style={{ color: 'var(--mei-color-primary-600)', fontSize: 20 }} />
                  <span style={{ color: 'var(--mei-color-primary-700)', fontWeight: 500 }}>准备好了吗？点击下方按钮立即开始模拟考试。</span>
                </div>
                <Button
                  type="primary"
                  size="large"
                  icon={<PlayCircleOutlined />}
                  onClick={handleStartExam}
                  style={{ height: 48, padding: '0 40px', borderRadius: 'var(--mei-radius-md)', fontWeight: 600, boxShadow: 'var(--mei-shadow-md)' }}
                >
                  开始考试
                </Button>
              </div>
            </div>
          </StyledCard>
        </>
      )}

      {isStarted && (
        <div>
          <ExamHUD>
            <ExamHeader style={{ margin: 0 }}>
              <div>
                <Title level={5} style={{ margin: 0, color: 'var(--mei-theme-text-primary)' }}>模拟考试进行中</Title>
                <div style={{ color: 'var(--mei-theme-text-secondary)', fontSize: 13, marginTop: 4 }}>
                  已完成 <span style={{ color: 'var(--mei-color-primary-600)', fontWeight: 600 }}>{answeredCount}</span> / {totalQuestions} 题
                </div>
              </div>
              <Space size="large">
                <Timer>
                  <ClockCircleOutlined /> {formatTime(timeLeft)}
                </Timer>
                <Button 
                  type="primary" 
                  danger 
                  size="large"
                  onClick={() => setShowSubmitConfirm(true)}
                  disabled={isFinished}
                  style={{ height: 44, borderRadius: 'var(--mei-radius-md)', fontWeight: 600 }}
                >
                  提前交卷
                </Button>
              </Space>
            </ExamHeader>
            <Progress 
              percent={progress} 
              status="active" 
              strokeColor="var(--mei-color-primary-500)" 
              showInfo={false}
              size="small"
              style={{ marginTop: 12 }}
            />
          </ExamHUD>

          {!isFinished && (
            <ExamLayout>
              <QuestionSection>
                {currentQuestion && (
                  <QuestionCard
                    key={currentQuestion.id}
                    question={currentQuestion}
                    onAnswer={handleAnswer}
                    userAnswer={userAnswers[currentQuestion.id]}
                    questionNumber={currentQuestionIndex + 1}
                  />
                )}
                
                <div style={{ height: 100 }} /> {/* Spacer for fixed footer */}
              </QuestionSection>

              <SidebarSection>
                <AnswerCard
                  questions={examQuestions}
                  userAnswers={userAnswers}
                  showAnswer={false}
                  currentIndex={currentQuestionIndex}
                  onNavigate={(index) => setCurrentQuestionIndex(index)}
                />
              </SidebarSection>
            </ExamLayout>
          )}

          {!isFinished && (
            <div style={{
              position: 'fixed',
              bottom: 0,
              left: 200, // Matches Sidebar width
              right: 0,
              height: 80,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderTop: '1px solid var(--mei-theme-border-default)',
              padding: '0 40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 -4px 12px rgba(0,0,0,0.05)',
              zIndex: 1000,
              transition: 'left 0.2s'
            }}>
              <div style={{ maxWidth: 800, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button
                  size="large"
                  disabled={currentQuestionIndex === 0}
                  onClick={handlePrevQuestion}
                  style={{ minWidth: 120, height: 48, borderRadius: 'var(--mei-radius-md)', fontWeight: 600 }}
                >
                  上一题
                </Button>
                
                <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--mei-theme-text-secondary)' }}>
                  第 <span style={{ color: 'var(--mei-color-primary-600)' }}>{currentQuestionIndex + 1}</span> / {totalQuestions} 题
                </div>

                <Button
                  type="primary"
                  size="large"
                  onClick={handleNextQuestion}
                  disabled={currentQuestionIndex === totalQuestions - 1}
                  style={{ minWidth: 120, height: 48, borderRadius: 'var(--mei-radius-md)', fontWeight: 600 }}
                >
                  下一题
                </Button>
              </div>
            </div>
          )}

          {showSubmitConfirm && (
            <Modal
              title="确定要交卷吗？"
              open={showSubmitConfirm}
              onOk={() => {
                setShowSubmitConfirm(false);
                handleFinishExam();
              }}
              onCancel={() => setShowSubmitConfirm(false)}
              okText="确认交卷"
              cancelText="继续考试"
              okButtonProps={{ danger: true }}
            >
              <p>您已答 {answeredCount} 题，还有 {totalQuestions - answeredCount} 题未答。</p>
            </Modal>
          )}

          {showResults && (
            <Modal
              title={<span style={{ fontWeight: 700, fontSize: 20 }}>考试结果</span>}
              open={showResults}
              onCancel={handleReset}
              footer={[
                <Button key="reset" size="large" type="primary" onClick={handleReset} style={{ borderRadius: 'var(--mei-radius-md)' }}>
                  重新考试
                </Button>
              ]}
              width={720}
              style={{ top: 40 }}
            >
              <div style={{ padding: '8px 0' }}>
                <Row gutter={[24, 24]}>
                  <Col span={12}>
                    <Statistic
                      title="总分"
                      value={score}
                      suffix="分"
                      valueStyle={{ color: passed ? 'var(--mei-color-success-base)' : 'var(--mei-color-error-base)', fontWeight: 800, fontSize: 32 }}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="正确题数"
                      value={correctAnswers}
                      suffix={`/ ${totalQuestions}`}
                      valueStyle={{ fontWeight: 700 }}
                    />
                  </Col>
                </Row>

                <Alert
                  message={<span style={{ fontWeight: 700 }}>{passed ? '恭喜通过！' : '未达到及格线'}</span>}
                  description={passed ? '您已通过模拟考试，继续保持！' : '请继续努力，加强薄弱环节的学习。'}
                  type={passed ? 'success' : 'error'}
                  showIcon
                  style={{ marginTop: 24, borderRadius: 'var(--mei-radius-md)' }}
                />

                <div style={{ marginTop: 32 }}>
                  <Title level={5} style={{ marginBottom: 16 }}>答题卡</Title>
                  <AnswerCard
                    questions={examQuestions}
                    userAnswers={userAnswers}
                    showAnswer={true}
                    onNavigate={(index) => setReviewQuestionIndex(reviewQuestionIndex === index ? null : index)}
                  />

                  {reviewQuestionIndex !== null && examQuestions[reviewQuestionIndex] && (
                    <ReviewPanel>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                        <Title level={5} style={{ margin: 0 }}>第 {reviewQuestionIndex + 1} 题</Title>
                        <Button size="small" onClick={() => setReviewQuestionIndex(null)}>关闭</Button>
                      </div>
                      <div
                        style={{ marginBottom: 16, lineHeight: 1.8, color: 'var(--mei-theme-text-primary)' }}
                        dangerouslySetInnerHTML={{ __html: examQuestions[reviewQuestionIndex].title }}
                      />
                      <div style={{ marginBottom: 8 }}>
                        <Text strong>您的答案：</Text>
                        <Text style={{ color: userAnswers[examQuestions[reviewQuestionIndex].id] === examQuestions[reviewQuestionIndex].answer ? 'var(--mei-color-success-base)' : 'var(--mei-color-error-base)', fontWeight: 600 }}>
                          {userAnswers[examQuestions[reviewQuestionIndex].id] || '未作答'}
                        </Text>
                      </div>
                      <div>
                        <Text strong>正确答案：</Text>
                        <Text style={{ color: 'var(--mei-color-success-base)', fontWeight: 600 }}>{examQuestions[reviewQuestionIndex].answer}</Text>
                      </div>
                      <div style={{ marginTop: 12, padding: '12px 16px', background: 'var(--mei-theme-bg-elevated)', borderRadius: 'var(--mei-radius-md)', border: '1px solid var(--mei-theme-border-default)' }}>
                        <Text strong style={{ color: 'var(--mei-color-primary-600)' }}>解析：</Text>
                        <div
                          style={{ marginTop: 4, lineHeight: 1.8, color: 'var(--mei-theme-text-secondary)' }}
                          dangerouslySetInnerHTML={{ __html: examQuestions[reviewQuestionIndex].explanation }}
                        />
                      </div>
                    </ReviewPanel>
                  )}
                </div>
              </div>
            </Modal>
          )}
        </div>
      )}
    </div>
  );
};

export default Exam;

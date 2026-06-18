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

function getRandomQuestions(count: number): Question[] {
  const all = getCurrentQuestions();
  const shuffled = [...all].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, all.length));
}

const EXAM_DURATION = 90 * 60; // 90 minutes
const EXAM_QUESTION_COUNT = 100;

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

const Exam: React.FC = () => {
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isStarted, setIsStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);
  const [isFinished, setIsFinished] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const autoSubmitted = useRef(false);

  useEffect(() => {
    if (isStarted && !isFinished) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
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
          {/* 悬浮计分板 HUD */}
          <div style={{
            position: 'sticky',
            top: 64, // Matches Header height
            zIndex: 900,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--mei-theme-border-default)',
            padding: '16px 24px',
            margin: '-32px -24px 24px -24px', // Counteract the padding of Layout Content to make it full width
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            boxShadow: 'var(--mei-shadow-sm)'
          }}>
            <ExamHeader style={{ margin: 0 }}>
              <div>
                <Title level={5} style={{ margin: 0, color: 'var(--mei-theme-text-primary)' }}>模拟考试进行中</Title>
                <div style={{ color: 'var(--mei-theme-text-secondary)', fontSize: 13, marginTop: 4 }}>
                  当前第 <span style={{ color: 'var(--mei-color-primary-600)', fontWeight: 600 }}>{currentQuestionIndex + 1}</span> 题 / 共 {totalQuestions} 题
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
                  onClick={() => {
                    Modal.confirm({
                      title: '确定要交卷吗？',
                      content: `您已答 ${answeredCount} 题，还有 ${totalQuestions - answeredCount} 题未答。`,
                      okText: '确认交卷',
                      cancelText: '继续考试',
                      onOk: handleFinishExam,
                      okButtonProps: { danger: true }
                    });
                  }}
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
            />
          </div>

          {/* 题目卡片 */}
            {currentQuestion && !isFinished && (
            <QuestionCard
              key={currentQuestion.id}
              question={currentQuestion}
              onAnswer={handleAnswer}
              userAnswer={userAnswers[currentQuestion.id]}
              questionNumber={currentQuestionIndex + 1}
            />
          )}

          {!isFinished && (
            <div style={{
              position: 'fixed',
              bottom: 0,
              left: 200, // Roughly account for sidebar
              right: 0,
              height: 72,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderTop: '1px solid var(--mei-theme-border-default)',
              padding: '0 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 -4px 12px rgba(0,0,0,0.05)',
              zIndex: 1000
            }}>
              <Row gutter={24} justify="center" style={{ width: '100%' }}>
                <Col>
                  <Button
                    size="large"
                    disabled={currentQuestionIndex === 0}
                    onClick={handlePrevQuestion}
                    style={{ minWidth: 140, borderRadius: 'var(--mei-radius-full)', fontWeight: 600 }}
                  >
                    上一题
                  </Button>
                </Col>
                <Col>
                  <Button
                    type="primary"
                    size="large"
                    onClick={handleNextQuestion}
                    disabled={currentQuestionIndex === totalQuestions - 1}
                    style={{ minWidth: 140, borderRadius: 'var(--mei-radius-full)', fontWeight: 600 }}
                  >
                    下一题
                  </Button>
                </Col>
              </Row>
            </div>
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
              width={640}
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
                  <Title level={5} style={{ marginBottom: 16 }}>答题详情</Title>
                  <div style={{ maxHeight: 300, overflowY: 'auto', paddingRight: 8 }}>
                    {examQuestions.map((question, index) => (
                      <div key={question.id} style={{
                        marginBottom: 12,
                        padding: 12,
                        background: 'var(--mei-theme-bg-surface)',
                        borderRadius: 'var(--mei-radius-sm)',
                        border: '1px solid var(--mei-theme-border-default)'
                      }}>
                        <Text strong>第{index + 1}题: </Text>
                        {userAnswers[question.id] === question.answer ? (
                          <Text style={{ color: 'var(--mei-color-success-base)', fontWeight: 600 }}> 正确</Text>
                        ) : (
                          <Text style={{ color: 'var(--mei-color-error-base)', fontWeight: 600 }}>
                            错误 <span style={{ color: 'var(--mei-theme-text-secondary)', fontWeight: 400 }}>(正确答案: {question.answer})</span>
                          </Text>
                        )}
                      </div>
                    ))}
                  </div>
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

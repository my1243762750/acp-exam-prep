import React, { useState, useEffect, useRef } from 'react';
import { Card, Button, Space, Typography, Row, Col, Progress, Modal, Statistic, Alert } from 'antd';
import { PlayCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import QuestionCard from '../components/QuestionCard';
import { getRandomQuestions, Question } from '../data/questions';
import { saveAnswer, saveExamRecord } from '../utils/storage';

const { Title, Paragraph, Text } = Typography;

const StyledCard = styled(Card)`
  margin-bottom: var(--mei-spacing-stack-md);
  border-radius: var(--mei-radius-lg);
  box-shadow: var(--mei-shadow-sm);
  border: 1px solid var(--mei-theme-border-default);
  background: var(--mei-theme-bg-elevated);
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
`;

const Exam: React.FC = () => {
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isStarted, setIsStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90 * 60);
  const [isFinished, setIsFinished] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isStarted && !isFinished) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            return 0;
          }
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

  const autoSubmitted = useRef(false);

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

      const record = {
        date: new Date().toISOString().slice(0, 10),
        score: Math.round((correctCount / examQuestions.length) * 100),
        total: examQuestions.length,
        correct: correctCount,
        answers: userAnswers,
      };
      saveExamRecord(record);

      setIsFinished(true);
      setShowResults(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  const handleStartExam = () => {
    const questions = getRandomQuestions(100);
    setExamQuestions(questions);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setIsStarted(true);
    setIsFinished(false);
    setShowResults(false);
    setTimeLeft(90 * 60);
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
      if (q) {
        saveAnswer(Number(qId), answer, answer === q.answer);
      }
    });

    const record = {
      date: new Date().toISOString().slice(0, 10),
      score: Math.round((correctCount / examQuestions.length) * 100),
      total: examQuestions.length,
      correct: correctCount,
      answers: userAnswers,
    };
    saveExamRecord(record);

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
    setTimeLeft(90 * 60);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = examQuestions[currentQuestionIndex];
  const totalQuestions = examQuestions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const progress = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  const correctAnswers = Object.values(userAnswers).filter((answer, index) =>
    answer === examQuestions[index]?.answer
  ).length;
  const score = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  return (
    <div>
      <Title level={2} style={{ color: 'var(--mei-theme-text-primary)' }}>模拟考试</Title>
      <Paragraph style={{ color: 'var(--mei-theme-text-secondary)', marginBottom: 24 }}>
        全真模拟ACP认证考试环境，测试您的学习成果
      </Paragraph>

      {!isStarted ? (
        <StyledCard>
          <div style={{ padding: 'var(--mei-spacing-inset-lg)' }}>
            <Title level={4} style={{ marginBottom: 24 }}>考试说明</Title>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Alert
                message={<span style={{ fontWeight: 700 }}>考试规则</span>}
                description={
                  <ul style={{ paddingLeft: 20, marginTop: 8 }}>
                    <li>考试时间：90分钟</li>
                    <li>题目数量：100道单选题</li>
                    <li>及格分数：80分</li>
                    <li>涵盖知识点：阿里云产品和服务</li>
                    <li>时间到自动提交</li>
                    <li>可提前交卷</li>
                  </ul>
                }
                type="info"
                showIcon
                style={{ borderRadius: 'var(--mei-radius-md)' }}
              />
              <Button
                type="primary"
                size="large"
                icon={<PlayCircleOutlined />}
                onClick={handleStartExam}
                style={{ height: 48, padding: '0 40px', borderRadius: 'var(--mei-radius-md)' }}
              >
                开始考试
              </Button>
            </Space>
          </div>
        </StyledCard>
      ) : (
        <div>
          <StyledCard>
            <div style={{ padding: 'var(--mei-spacing-inset-lg)' }}>
              <ExamHeader>
                <div>
                  <Title level={4} style={{ margin: 0 }}>模拟考试进行中</Title>
                  <Paragraph style={{ color: 'var(--mei-theme-text-secondary)', margin: '4px 0 0 0' }}>
                    第 {currentQuestionIndex + 1} 题 / 共 {totalQuestions} 题
                  </Paragraph>
                </div>
                <Space size="large">
                  <Timer>
                    <ClockCircleOutlined /> {formatTime(timeLeft)}
                  </Timer>
                  <Button
                    type="primary"
                    danger
                    size="large"
                    onClick={handleFinishExam}
                    disabled={isFinished}
                    style={{ height: 48, borderRadius: 'var(--mei-radius-md)' }}
                  >
                    交卷
                  </Button>
                </Space>
              </ExamHeader>
              <Progress percent={progress} status="active" strokeColor="var(--mei-color-primary-500)" />
            </div>
          </StyledCard>

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
            <StyledCard>
              <div style={{ padding: 'var(--mei-spacing-inset-lg)' }}>
                <Row gutter={24} justify="center">
                  <Col>
                    <Button
                      size="large"
                      disabled={currentQuestionIndex === 0}
                      onClick={handlePrevQuestion}
                      style={{ minWidth: 120, borderRadius: 'var(--mei-radius-md)' }}
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
                      style={{ minWidth: 120, borderRadius: 'var(--mei-radius-md)' }}
                    >
                      下一题
                    </Button>
                  </Col>
                </Row>
              </div>
            </StyledCard>
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
                      valueStyle={{ color: score >= 80 ? 'var(--mei-color-success-base)' : 'var(--mei-color-error-base)', fontWeight: 800, fontSize: 32 }}
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
                  message={<span style={{ fontWeight: 700 }}>{score >= 80 ? "恭喜通过！" : "未达到及格线"}</span>}
                  description={score >= 80 ? "您已通过模拟考试，继续保持！" : "请继续努力，加强薄弱环节的学习。"}
                  type={score >= 80 ? "success" : "error"}
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
                          <Text style={{ color: 'var(--mei-color-error-base)', fontWeight: 600 }}> 错误 <span style={{ color: 'var(--mei-theme-text-secondary)', fontWeight: 400 }}>(正确答案: {question.answer})</span></Text>
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

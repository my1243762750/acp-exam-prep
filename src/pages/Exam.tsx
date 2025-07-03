import React, { useState, useEffect } from 'react';
import { Card, Button, Space, Typography, Row, Col, Progress, Modal, Statistic, Alert } from 'antd';
import { PlayCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import QuestionCard from '../components/QuestionCard';
import { getRandomQuestions, Question } from '../data/questions';

const { Title, Paragraph, Text } = Typography;

const StyledCard = styled(Card)`
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ExamHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
`;

const Timer = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #1890ff;
  text-align: center;
  padding: 16px;
  background: #f0f8ff;
  border-radius: 8px;
  border: 2px solid #1890ff;
`;

const Exam: React.FC = () => {
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isStarted, setIsStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90 * 60); // 90分钟
  const [isFinished, setIsFinished] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isStarted && !isFinished && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleFinishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isStarted, isFinished, timeLeft]);

  const handleStartExam = () => {
    const questions = getRandomQuestions(100); // 100题模拟考试
    setExamQuestions(questions);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setIsStarted(true);
    setIsFinished(false);
    setShowResults(false);
    setTimeLeft(90 * 60); // 重置时间
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
      <Title level={2}>模拟考试</Title>
      <Paragraph type="secondary">
        全真模拟ACP认证考试环境，测试您的学习成果
      </Paragraph>

      {!isStarted ? (
        <StyledCard>
          <Title level={4}>考试说明</Title>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Alert
              message="考试规则"
              description={
                <ul>
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
            />
            <Button
              type="primary"
              size="large"
              icon={<PlayCircleOutlined />}
              onClick={handleStartExam}
            >
              开始考试
            </Button>
          </Space>
        </StyledCard>
      ) : (
        <div>
          {/* 考试进度 */}
          <StyledCard>
            <ExamHeader>
              <div>
                <Title level={4}>模拟考试进行中</Title>
                <Paragraph>
                  第 {currentQuestionIndex + 1} 题 / 共 {totalQuestions} 题
                </Paragraph>
              </div>
              <Space>
                <Timer>
                  <ClockCircleOutlined /> {formatTime(timeLeft)}
                </Timer>
                <Button 
                  type="primary" 
                  danger 
                  onClick={handleFinishExam}
                  disabled={isFinished}
                >
                  交卷
                </Button>
              </Space>
            </ExamHeader>
            <Progress percent={progress} status="active" />
          </StyledCard>

          {/* 题目卡片 */}
          {currentQuestion && !isFinished && (
            <QuestionCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              userAnswer={userAnswers[currentQuestion.id]}
              questionNumber={currentQuestionIndex + 1}
            />
          )}

          {/* 操作按钮 */}
          {!isFinished && (
            <StyledCard>
              <Row gutter={16} justify="center">
                <Col>
                  <Button
                    disabled={currentQuestionIndex === 0}
                    onClick={handlePrevQuestion}
                  >
                    上一题
                  </Button>
                </Col>
                <Col>
                  <Button
                    type="primary"
                    onClick={handleNextQuestion}
                    disabled={currentQuestionIndex === totalQuestions - 1}
                  >
                    下一题
                  </Button>
                </Col>
              </Row>
            </StyledCard>
          )}

          {/* 考试结果 */}
          {showResults && (
            <Modal
              title="考试结果"
              open={showResults}
              onCancel={handleReset}
              footer={[
                <Button key="reset" onClick={handleReset}>
                  重新考试
                </Button>
              ]}
              width={600}
            >
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Statistic
                    title="总分"
                    value={score}
                    suffix="分"
                    valueStyle={{ color: score >= 80 ? '#3f8600' : '#cf1322' }}
                  />
                </Col>
                <Col span={12}>
                  <Statistic
                    title="正确题数"
                    value={correctAnswers}
                    suffix={`/ ${totalQuestions}`}
                  />
                </Col>
              </Row>
              
              <Alert
                message={score >= 80 ? "恭喜通过！" : "未达到及格线"}
                description={score >= 80 ? "您已通过模拟考试，继续保持！" : "请继续努力，加强薄弱环节的学习。"}
                type={score >= 80 ? "success" : "error"}
                showIcon
                style={{ marginTop: 16 }}
              />

              <div style={{ marginTop: 16 }}>
                <Title level={5}>答题详情</Title>
                {examQuestions.map((question, index) => (
                  <div key={question.id} style={{ marginBottom: 8 }}>
                    <Text>
                      第{index + 1}题: 
                      {userAnswers[question.id] === question.answer ? (
                        <Text type="success"> 正确</Text>
                      ) : (
                        <Text type="danger"> 错误 (正确答案: {question.answer})</Text>
                      )}
                    </Text>
                  </div>
                ))}
              </div>
            </Modal>
          )}
        </div>
      )}
    </div>
  );
};

export default Exam; 
import React, { useState } from 'react';
import { Card, Select, Button, Space, Typography, Row, Col, Tag, Progress } from 'antd';
import { PlayCircleOutlined, ReloadOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import QuestionCard from '../components/QuestionCard';
import { categories, getQuestionsByCategory, getRandomQuestions, Question } from '../data/questions';
import { saveAnswer } from '../utils/storage';

const { Title, Paragraph } = Typography;
const { Option } = Select;

const StyledCard = styled(Card)`
  margin-bottom: var(--mei-spacing-stack-md);
  border-radius: var(--mei-radius-lg);
  box-shadow: var(--mei-shadow-sm);
  border: 1px solid var(--mei-theme-border-default);
  background: var(--mei-theme-bg-elevated);
`;

const PracticeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--mei-spacing-stack-lg);
  flex-wrap: wrap;
  gap: var(--mei-spacing-inline-md);
`;

const Practice: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [practiceQuestions, setPracticeQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const handleStartPractice = () => {
    let questionsToPractice: Question[];
    if (selectedCategory) {
      questionsToPractice = getQuestionsByCategory(selectedCategory);
    } else {
      questionsToPractice = getRandomQuestions(10);
    }
    setPracticeQuestions(questionsToPractice);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowAnswer(false);
    setIsStarted(true);
  };

  const handleAnswer = (questionId: number, answer: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleShowAnswer = () => {
    const q = practiceQuestions[currentQuestionIndex];
    const userAns = userAnswers[q.id];
    if (userAns) {
      saveAnswer(q.id, userAns, userAns === q.answer);
    }
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < practiceQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowAnswer(false);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setShowAnswer(false);
    }
  };

  const handleReset = () => {
    setIsStarted(false);
    setPracticeQuestions([]);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowAnswer(false);
  };

  const currentQuestion = practiceQuestions[currentQuestionIndex];
  const totalQuestions = practiceQuestions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const progress = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  return (
    <div>
      <Title level={2} style={{ color: 'var(--mei-theme-text-primary)' }}>练习模式</Title>
      <Paragraph style={{ color: 'var(--mei-theme-text-secondary)', marginBottom: 24 }}>
        选择分类进行针对性练习，或随机练习题目
      </Paragraph>

      {!isStarted ? (
        <StyledCard>
          <div style={{ padding: 'var(--mei-spacing-inset-lg)' }}>
            <Title level={4} style={{ marginBottom: 24 }}>选择练习方式</Title>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <Paragraph style={{ fontWeight: 500, marginBottom: 8 }}>选择分类（可选）：</Paragraph>
                <Select
                  style={{ width: '100%', maxWidth: 320 }}
                  placeholder="选择分类"
                  allowClear
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  size="large"
                >
                  {categories.map(category => (
                    <Option key={category} value={category}>{category}</Option>
                  ))}
                </Select>
              </div>
              <Button
                type="primary"
                size="large"
                icon={<PlayCircleOutlined />}
                onClick={handleStartPractice}
                style={{ padding: '0 40px', height: 48, borderRadius: 'var(--mei-radius-md)' }}
              >
                开始练习
              </Button>
            </Space>
          </div>
        </StyledCard>
      ) : (
        <div>
          <StyledCard>
            <div style={{ padding: 'var(--mei-spacing-inset-lg)' }}>
              <PracticeHeader>
                <div>
                  <Title level={4} style={{ margin: 0 }}>
                    练习进度
                    {selectedCategory && <Tag color="blue" style={{ marginLeft: 12 }}>{selectedCategory}</Tag>}
                  </Title>
                  <Paragraph style={{ color: 'var(--mei-theme-text-secondary)', margin: '4px 0 0 0' }}>
                    第 {currentQuestionIndex + 1} 题 / 共 {totalQuestions} 题
                  </Paragraph>
                </div>
                <Space>
                  <Button icon={<ReloadOutlined />} onClick={handleReset} ghost type="primary">
                    重新开始
                  </Button>
                </Space>
              </PracticeHeader>
              <Progress percent={progress} status="active" strokeColor="var(--mei-color-primary-500)" />
            </div>
          </StyledCard>

          {currentQuestion && (
            <QuestionCard
              key={currentQuestion.id}
              question={currentQuestion}
              onAnswer={handleAnswer}
              showAnswer={showAnswer}
              userAnswer={userAnswers[currentQuestion.id]}
              questionNumber={currentQuestionIndex + 1}
            />
          )}

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
                  {!showAnswer ? (
                    <Button
                      type="primary"
                      size="large"
                      onClick={handleShowAnswer}
                      disabled={!userAnswers[currentQuestion?.id]}
                      style={{ minWidth: 120, borderRadius: 'var(--mei-radius-md)' }}
                    >
                      查看答案
                    </Button>
                  ) : (
                    <Button
                      type="primary"
                      size="large"
                      onClick={handleNextQuestion}
                      disabled={currentQuestionIndex === totalQuestions - 1}
                      style={{ minWidth: 120, borderRadius: 'var(--mei-radius-md)' }}
                    >
                      下一题
                    </Button>
                  )}
                </Col>
              </Row>
            </div>
          </StyledCard>

          {showAnswer && (
            <StyledCard title={<span style={{ fontWeight: 700 }}>答题统计</span>}>
              <div style={{ padding: 'var(--mei-spacing-inset-lg)' }}>
                <Row gutter={[24, 24]}>
                  <Col span={8}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--mei-color-primary-500)' }}>
                        {answeredCount}
                      </div>
                      <div style={{ color: 'var(--mei-theme-text-secondary)' }}>已答题数</div>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--mei-color-success-base)' }}>
                        {Object.values(userAnswers).filter((answer, index) =>
                          answer === practiceQuestions[index]?.answer
                        ).length}
                      </div>
                      <div style={{ color: 'var(--mei-theme-text-secondary)' }}>正确题数</div>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--mei-color-warning-base)' }}>
                        {totalQuestions - answeredCount}
                      </div>
                      <div style={{ color: 'var(--mei-theme-text-secondary)' }}>未答题数</div>
                    </div>
                  </Col>
                </Row>
              </div>
            </StyledCard>
          )}
        </div>
      )}
    </div>
  );
};

export default Practice;

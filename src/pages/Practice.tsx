import React, { useState } from 'react';
import { Card, Select, Button, Space, Typography, Row, Col, Tag, Progress } from 'antd';
import { PlayCircleOutlined, ReloadOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import QuestionCard from '../components/QuestionCard';
import { categories, getQuestionsByCategory, getRandomQuestions, Question } from '../data/questions';

const { Title, Paragraph } = Typography;
const { Option } = Select;

const StyledCard = styled(Card)`
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const PracticeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
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
      <Title level={2}>练习模式</Title>
      <Paragraph type="secondary">
        选择分类进行针对性练习，或随机练习题目
      </Paragraph>

      {!isStarted ? (
        <StyledCard>
          <Title level={4}>选择练习方式</Title>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
              <Paragraph>选择分类（可选）：</Paragraph>
              <Select
                style={{ width: 200 }}
                placeholder="选择分类"
                allowClear
                value={selectedCategory}
                onChange={setSelectedCategory}
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
            >
              开始练习
            </Button>
          </Space>
        </StyledCard>
      ) : (
        <div>
          {/* 练习进度 */}
          <StyledCard>
            <PracticeHeader>
              <div>
                <Title level={4}>
                  练习进度
                  {selectedCategory && <Tag color="blue" style={{ marginLeft: 8 }}>{selectedCategory}</Tag>}
                </Title>
                <Paragraph>
                  第 {currentQuestionIndex + 1} 题 / 共 {totalQuestions} 题
                </Paragraph>
              </div>
              <Space>
                <Button icon={<ReloadOutlined />} onClick={handleReset}>
                  重新开始
                </Button>
              </Space>
            </PracticeHeader>
            <Progress percent={progress} status="active" />
          </StyledCard>

          {/* 题目卡片 */}
          {currentQuestion && (
            <QuestionCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              showAnswer={showAnswer}
              userAnswer={userAnswers[currentQuestion.id]}
              questionNumber={currentQuestionIndex + 1}
            />
          )}

          {/* 操作按钮 */}
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
                {!showAnswer ? (
                  <Button
                    type="primary"
                    onClick={handleShowAnswer}
                    disabled={!userAnswers[currentQuestion?.id]}
                  >
                    查看答案
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    onClick={handleNextQuestion}
                    disabled={currentQuestionIndex === totalQuestions - 1}
                  >
                    下一题
                  </Button>
                )}
              </Col>
            </Row>
          </StyledCard>

          {/* 答题统计 */}
          {showAnswer && (
            <StyledCard title="答题统计">
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1890ff' }}>
                      {answeredCount}
                    </div>
                    <div>已答题数</div>
                  </div>
                </Col>
                <Col span={8}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#52c41a' }}>
                      {Object.values(userAnswers).filter((answer, index) => 
                        answer === practiceQuestions[index]?.answer
                      ).length}
                    </div>
                    <div>正确题数</div>
                  </div>
                </Col>
                <Col span={8}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#faad14' }}>
                      {totalQuestions - answeredCount}
                    </div>
                    <div>未答题数</div>
                  </div>
                </Col>
              </Row>
            </StyledCard>
          )}
        </div>
      )}
    </div>
  );
};

export default Practice; 
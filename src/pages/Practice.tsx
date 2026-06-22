import React, { useState } from 'react';
import { Card, Select, Button, Space, Typography, Tag, Progress } from 'antd';
import { PlayCircleOutlined, ReloadOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import QuestionCard from '../components/QuestionCard';
import AnswerCard from '../components/AnswerCard';
import type { Question } from '../data/questions';
import { getCurrentQuestions, getCurrentCategories } from '../data/subject';
import { saveAnswer } from '../utils/storage';

const { Title, Paragraph } = Typography;
const { Option } = Select;

const StyledCard = styled(Card)`
  margin-bottom: var(--mei-spacing-stack-lg);
  border-radius: var(--mei-radius-xl);
  border: 1px solid var(--mei-theme-border-default);
  background: var(--mei-theme-bg-page);
  box-shadow: none;
`;

function getQuestionsByCategory(category: string): Question[] {
  return getCurrentQuestions().filter(q => q.category === category);
}

function getRandomQuestions(count: number): Question[] {
  const all = getCurrentQuestions();
  const shuffled = [...all].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const PracticeLayout = styled.div`
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
  min-width: 0;
`;

const SidebarSection = styled.div`
  position: sticky;
  top: 88px; // Below header + spacing
  height: calc(100vh - 112px - 72px); // Viewport - Header - Footer
  min-width: 300px;

  @media (max-width: 992px) {
    position: static;
    height: auto;
    margin-bottom: 24px;
  }
`;

const Practice: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [practiceQuestions, setPracticeQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const categories = getCurrentCategories();

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

  const handleToggleAnswer = () => {
    if (!showAnswer) {
      const q = practiceQuestions[currentQuestionIndex];
      const userAns = userAnswers[q.id];
      if (userAns) {
        saveAnswer(q.id, userAns, userAns === q.answer);
      }
    }
    setShowAnswer(prev => !prev);
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
    <div style={{ paddingBottom: 80 }}>
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
          <PracticeLayout>
            <QuestionSection>
              <StyledCard>
                <div style={{ padding: 'var(--mei-spacing-inset-lg)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
                    <div>
                      <Title level={4} style={{ margin: 0 }}>
                        练习进度
                        {selectedCategory && <Tag color="blue" style={{ marginLeft: 12 }}>{selectedCategory}</Tag>}
                      </Title>
                      <Paragraph style={{ color: 'var(--mei-theme-text-secondary)', margin: '4px 0 0 0' }}>
                        第 {currentQuestionIndex + 1} 题 / 共 {totalQuestions} 题
                      </Paragraph>
                    </div>
                    <Button icon={<ReloadOutlined />} onClick={handleReset} type="default">
                      重新开始
                    </Button>
                  </div>
                  <Progress percent={progress} status="active" strokeColor="var(--mei-color-primary-500)" />
                </div>
              </StyledCard>

              {currentQuestion && (
                <div style={{ position: 'relative' }}>
                  <QuestionCard
                    key={currentQuestion.id}
                    question={currentQuestion}
                    onAnswer={handleAnswer}
                    showAnswer={showAnswer}
                    userAnswer={userAnswers[currentQuestion.id]}
                    questionNumber={currentQuestionIndex + 1}
                  />
                  <div style={{ position: 'absolute', top: 24, right: 24, zIndex: 10 }}>
                    <Button
                      size="middle"
                      type={showAnswer ? 'default' : 'primary'}
                      icon={showAnswer ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                      onClick={handleToggleAnswer}
                      style={{ borderRadius: 'var(--mei-radius-md)' }}
                    >
                      {showAnswer ? '隐藏答案' : '显示答案'}
                    </Button>
                  </div>
                </div>
              )}
            </QuestionSection>

            <SidebarSection>
              <AnswerCard
                questions={practiceQuestions}
                userAnswers={userAnswers}
                showAnswer={showAnswer}
                currentIndex={currentQuestionIndex}
                onNavigate={(index) => { setCurrentQuestionIndex(index); setShowAnswer(false); }}
              />
            </SidebarSection>
          </PracticeLayout>

          <div style={{
            position: 'fixed',
            bottom: 0,
            left: 200,
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
            zIndex: 1000
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
        </div>
      )}
    </div>
  );
};

export default Practice;

import React, { useState } from 'react';
import { Card, Select, Button, Space, Typography, Tag, Progress } from 'antd';
import { PlayCircleOutlined, ReloadOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import QuestionCard from '../components/QuestionCard';
import AnswerCard from '../components/AnswerCard';
import type { SalesforceQuestion } from '../data/salesforce';
import { isCorrectAnswer } from '../data/salesforce';
import { getCurrentPracticeBanks } from '../data/subject';
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

function getRandomQuestions(questions: SalesforceQuestion[], count: number): SalesforceQuestion[] {
  const all = questions;
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
    min-width: 0;
    margin-bottom: 24px;
  }
`;

const AnswerToggle = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 10;

  @media (max-width: 768px) {
    top: 12px;
    right: 12px;

    .ant-btn-icon + span {
      display: none;
    }
  }
`;

const PageFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 200px;
  right: 0;
  height: 80px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid var(--mei-theme-border-default);
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
  z-index: 1000;

  @media (max-width: 768px) {
    left: 0;
    height: 72px;
    padding: 0 12px;
  }
`;

const FooterContent = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  .ant-btn {
    min-width: 120px;
    height: 48px;
  }

  @media (max-width: 768px) {
    gap: 8px;

    .ant-btn {
      min-width: 0;
      flex: 1;
      padding-inline: 12px;
    }

    .question-counter {
      white-space: nowrap;
      font-size: 13px !important;
    }
  }
`;

const Practice: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [practiceQuestions, setPracticeQuestions] = useState<SalesforceQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string[]>>({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const banks = getCurrentPracticeBanks();

  const handleStartPractice = () => {
    let questionsToPractice: SalesforceQuestion[];
    if (selectedCategory) {
      questionsToPractice = banks.find(bank => bank.id === selectedCategory)?.questions || [];
    } else {
      questionsToPractice = getRandomQuestions(banks.flatMap(bank => bank.questions), 10);
    }
    setPracticeQuestions(questionsToPractice);
    setCurrentQuestionIndex(0);
    setUserAnswers(Object.fromEntries(
      questionsToPractice
        .filter(question => question.userAnswers.length > 0)
        .map(question => [question.id, question.userAnswers])
    ));
    setShowAnswer(false);
    setIsStarted(true);
  };

  const handleAnswer = (questionId: number, answer: string[]) => {
    setUserAnswers(prev => {
      const next = { ...prev };
      if (answer.length) next[questionId] = answer;
      else delete next[questionId];
      return next;
    });
  };

  const handleToggleAnswer = () => {
    if (!showAnswer) {
      const q = practiceQuestions[currentQuestionIndex];
      const userAns = userAnswers[q.id];
      if (userAns?.length) {
        saveAnswer(q.id, userAns, isCorrectAnswer(q, userAns));
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
  const answeredCount = Object.values(userAnswers).filter(answer => answer.length > 0).length;
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
                  {banks.map(bank => (
                    <Option key={bank.id} value={bank.id}>
                      {bank.title}（{bank.questions.length}题）
                    </Option>
                  ))}
                </Select>
              </div>
              <Button
                type="primary"
                size="large"
                icon={<PlayCircleOutlined />}
                onClick={handleStartPractice}
                style={{ padding: '0 40px', height: 48, borderRadius: 'var(--mei-radius-md)', maxWidth: '100%' }}
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
                        {selectedCategory && (
                          <Tag color="blue" style={{ marginLeft: 12 }}>
                            {banks.find(bank => bank.id === selectedCategory)?.title}
                          </Tag>
                        )}
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
                    autoExpandExplanation
                    userAnswer={userAnswers[currentQuestion.id]}
                    questionNumber={currentQuestionIndex + 1}
                  />
                  <AnswerToggle>
                    <Button
                      size="middle"
                      type={showAnswer ? 'default' : 'primary'}
                      icon={showAnswer ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                      onClick={handleToggleAnswer}
                      style={{ borderRadius: 'var(--mei-radius-md)' }}
                    >
                      {showAnswer ? '隐藏答案' : '显示答案'}
                    </Button>
                  </AnswerToggle>
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

          <PageFooter>
            <FooterContent>
              <Button
                size="large"
                disabled={currentQuestionIndex === 0}
                onClick={handlePrevQuestion}
                style={{ borderRadius: 'var(--mei-radius-md)', fontWeight: 600 }}
              >
                上一题
              </Button>
              
              <div className="question-counter" style={{ fontSize: 16, fontWeight: 600, color: 'var(--mei-theme-text-secondary)' }}>
                第 <span style={{ color: 'var(--mei-color-primary-600)' }}>{currentQuestionIndex + 1}</span> / {totalQuestions} 题
              </div>

              <Button
                type="primary"
                size="large"
                onClick={handleNextQuestion}
                disabled={currentQuestionIndex === totalQuestions - 1}
                style={{ borderRadius: 'var(--mei-radius-md)', fontWeight: 600 }}
              >
                下一题
              </Button>
            </FooterContent>
          </PageFooter>
        </div>
      )}
    </div>
  );
};

export default Practice;

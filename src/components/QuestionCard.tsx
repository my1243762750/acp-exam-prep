import React, { useState } from 'react';
import { Card, Radio, Space, Tag, Collapse, Alert } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Question } from '../data/questions';

const { Panel } = Collapse;

const StyledCard = styled(Card)`
  margin-bottom: var(--mei-spacing-stack-lg);
  border-radius: var(--mei-radius-lg);
  border: 1px solid var(--mei-theme-border-default);
  box-shadow: var(--mei-shadow-sm);
  transition: box-shadow var(--mei-motion-fast) var(--mei-ease-out);
  overflow: hidden;
  
  &:hover {
    box-shadow: var(--mei-shadow-md);
  }
  
  .ant-card-body {
    padding: var(--mei-spacing-inset-xl);
  }
`;

const QuestionTitle = styled.div`
  font-size: var(--mei-font-size-lg);
  font-weight: var(--mei-font-weight-semibold);
  margin-bottom: var(--mei-spacing-stack-lg);
  line-height: var(--mei-font-lineHeight-relaxed);
  color: var(--mei-theme-text-primary);
`;

const OptionItem = styled.div<{ isSelected?: boolean; isCorrect?: boolean; showAnswer?: boolean }>`
  padding: var(--mei-spacing-inset-md) var(--mei-spacing-inline-lg);
  border: 1px solid var(--mei-theme-border-default);
  border-radius: var(--mei-radius-md);
  margin-bottom: var(--mei-spacing-stack-sm);
  cursor: pointer;
  background: var(--mei-theme-bg-elevated);
  display: flex;
  align-items: center;
  transition: background-color var(--mei-motion-fast) var(--mei-ease-out),
              border-color var(--mei-motion-fast) var(--mei-ease-out),
              box-shadow var(--mei-motion-fast) var(--mei-ease-out);
  
  &:hover {
    border-color: var(--mei-color-primary-300);
    background-color: var(--mei-color-primary-50);
  }
  
  ${props => props.isSelected && !props.showAnswer && `
    border-color: var(--mei-color-primary-500);
    background: var(--mei-color-primary-50);
    box-shadow: var(--mei-shadow-sm);
    font-weight: 500;
  `}
  
  ${props => props.showAnswer && props.isCorrect && `
    border-color: var(--mei-color-success-base);
    background: var(--mei-color-success-light);
    color: var(--mei-color-success-dark);
  `}
  
  ${props => props.showAnswer && props.isSelected && !props.isCorrect && `
    border-color: var(--mei-color-error-base);
    background: var(--mei-color-error-light);
    color: var(--mei-color-error-dark);
  `}
`;

const QuestionMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--mei-spacing-stack-md);
`;

interface QuestionCardProps {
  question: Question;
  onAnswer?: (questionId: number, answer: string) => void;
  showAnswer?: boolean;
  userAnswer?: string;
  questionNumber?: number;
}

const typeLabel = (t: string) => ({ single: '单选题', multiple: '多选题', judge: '判断题' }[t] || t);

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  showAnswer = false,
  userAnswer,
  questionNumber
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>(userAnswer);

  const handleOptionSelect = (value: string) => {
    if (!showAnswer) {
      setSelectedAnswer(value);
      onAnswer?.(question.id, value);
    }
  };

  const isCorrect = userAnswer === question.answer;
  const hasAnswered = userAnswer !== undefined;

  return (
    <StyledCard>
      <QuestionMeta>
        <Space>
          {questionNumber && <Tag color="blue">第{questionNumber}题</Tag>}
          <Tag color={question.type === 'single' ? 'green' : question.type === 'multiple' ? 'orange' : 'blue'}>{typeLabel(question.type)}</Tag>
          {question.category && <Tag color="purple">{question.category}</Tag>}
        </Space>
        {showAnswer && hasAnswered && (
          <Space>
            {isCorrect ? (
              <CheckCircleOutlined style={{ color: 'var(--mei-color-success-base)', fontSize: '18px' }} />
            ) : (
              <CloseCircleOutlined style={{ color: 'var(--mei-color-error-base)', fontSize: '18px' }} />
            )}
            <span style={{ color: isCorrect ? 'var(--mei-color-success-base)' : 'var(--mei-color-error-base)', fontWeight: 600 }}>
              {isCorrect ? '回答正确' : '回答错误'}
            </span>
          </Space>
        )}
      </QuestionMeta>

      <QuestionTitle dangerouslySetInnerHTML={{ __html: question.title }} />

      <Radio.Group
        value={selectedAnswer}
        onChange={(e) => handleOptionSelect(e.target.value)}
        disabled={showAnswer}
        style={{ width: '100%' }}
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          {question.options.map((option, index) => {
            const optionValue = String.fromCharCode(65 + index); // A, B, C, D
            const isSelected = selectedAnswer === optionValue;
            const isCorrectOption = optionValue === question.answer;
            
            return (
              <OptionItem
                key={index}
                isSelected={isSelected}
                isCorrect={isCorrectOption}
                showAnswer={showAnswer}
                onClick={() => handleOptionSelect(optionValue)}
              >
                <Radio value={optionValue} style={{ marginRight: 8 }}>
                  <span style={{ color: 'inherit' }} dangerouslySetInnerHTML={{ __html: option }} />
                </Radio>
              </OptionItem>
            );
          })}
        </Space>
      </Radio.Group>

      {showAnswer && (
        <div style={{ marginTop: 24 }}>
          <Alert
            message={
              <span style={{ fontWeight: 600 }}>
                正确答案：<span style={{ color: 'var(--mei-color-success-base)', fontSize: 18 }}>{question.answer}</span>
              </span>
            }
            type={hasAnswered ? (isCorrect ? 'success' : 'error') : 'info'}
            showIcon
            style={{ marginBottom: 16, borderRadius: 'var(--mei-radius-md)' }}
          />
          <Collapse ghost expandIconPosition="end">
            <Panel header={<span style={{ fontWeight: 600, color: 'var(--mei-color-primary-600)' }}>查看详细解析</span>} key="1">
              <div style={{ padding: '8px 0', lineHeight: 1.8, color: 'var(--mei-theme-text-secondary)' }} dangerouslySetInnerHTML={{ __html: question.explanation }} />
            </Panel>
          </Collapse>
        </div>
      )}
    </StyledCard>
  );
};

export default QuestionCard; 
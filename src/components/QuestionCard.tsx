import React, { useState } from 'react';
import { Card, Radio, Space, Tag, Collapse, Alert } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Question } from '../data/questions';

const { Panel } = Collapse;

const StyledCard = styled(Card)`
  margin-bottom: 20px;
  border-radius: 16px;
  border: none;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  }
  
  .ant-card-body {
    padding: 32px;
  }
`;

const QuestionTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
  line-height: 1.7;
  color: #2c3e50;
`;

const OptionItem = styled.div<{ isSelected?: boolean; isCorrect?: boolean; showAnswer?: boolean }>`
  padding: 16px 20px;
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
  
  &:hover {
    border-color: #1890ff;
    background-color: #f8fbff;
    transform: translateX(4px);
  }
  
  ${props => props.isSelected && !props.showAnswer && `
    border-color: #1890ff;
    background: linear-gradient(135deg, #e6f7ff 0%, #f0f8ff 100%);
    box-shadow: 0 4px 12px rgba(24, 144, 255, 0.15);
  `}
  
  ${props => props.showAnswer && props.isCorrect && `
    border-color: #52c41a;
    background: linear-gradient(135deg, #f6ffed 0%, #f0fff0 100%);
    box-shadow: 0 4px 12px rgba(82, 196, 26, 0.15);
  `}
  
  ${props => props.showAnswer && props.isSelected && !props.isCorrect && `
    border-color: #ff4d4f;
    background: linear-gradient(135deg, #fff2f0 0%, #fff0f0 100%);
    box-shadow: 0 4px 12px rgba(255, 77, 79, 0.15);
  `}
`;

const QuestionMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

interface QuestionCardProps {
  question: Question;
  onAnswer?: (questionId: number, answer: string) => void;
  showAnswer?: boolean;
  userAnswer?: string;
  questionNumber?: number;
}

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
          <Tag color={question.type === '单选题' ? 'green' : 'orange'}>{question.type}</Tag>
          {question.category && <Tag color="purple">{question.category}</Tag>}
        </Space>
        {showAnswer && hasAnswered && (
          <Space>
            {isCorrect ? (
              <CheckCircleOutlined style={{ color: '#52c41a', fontSize: '18px' }} />
            ) : (
              <CloseCircleOutlined style={{ color: '#ff4d4f', fontSize: '18px' }} />
            )}
            <span style={{ color: isCorrect ? '#52c41a' : '#ff4d4f' }}>
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
                  <span dangerouslySetInnerHTML={{ __html: option }} />
                </Radio>
              </OptionItem>
            );
          })}
        </Space>
      </Radio.Group>

      {showAnswer && (
        <div style={{ marginTop: 16 }}>
          <Alert
            message={`正确答案：${question.answer}`}
            type={hasAnswered ? (isCorrect ? 'success' : 'error') : 'info'}
            showIcon
            style={{ marginBottom: 12 }}
          />
          <Collapse>
            <Panel header="查看解析" key="1">
              <div style={{ padding: '8px 0' }} dangerouslySetInnerHTML={{ __html: question.explanation }} />
            </Panel>
          </Collapse>
        </div>
      )}
    </StyledCard>
  );
};

export default QuestionCard; 
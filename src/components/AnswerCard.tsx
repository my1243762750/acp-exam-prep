import React from 'react';
import styled from 'styled-components';
import type { Question } from '../data/questions';

const Wrapper = styled.div`
  background: var(--mei-theme-bg-surface);
  border: 1px solid var(--mei-theme-border-default);
  border-radius: var(--mei-radius-lg);
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 15px;
  color: var(--mei-theme-text-primary);
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    width: 3px;
    height: 14px;
    background: var(--mei-color-primary-500);
    border-radius: 4px;
  }
`;

const Legend = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-bottom: 20px;
  padding: 12px;
  background: var(--mei-theme-bg-page);
  border-radius: var(--mei-radius-md);
  border: 1px solid var(--mei-theme-border-default);
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--mei-theme-text-secondary);
`;

const Swatch = styled.span<{ $status: 'answered' | 'unanswered' | 'correct' | 'wrong' }>`
  width: 12px;
  height: 12px;
  border-radius: 3px;
  
  ${props => props.$status === 'answered' && `
    background: var(--mei-color-primary-100);
    border: 1px solid var(--mei-color-primary-400);
  `}

  ${props => props.$status === 'unanswered' && `
    background: var(--mei-theme-bg-surface);
    border: 1px solid var(--mei-theme-border-default);
  `}

  ${props => props.$status === 'correct' && `
    background: var(--mei-color-success-light);
    border: 1px solid var(--mei-color-success-base);
  `}

  ${props => props.$status === 'wrong' && `
    background: var(--mei-color-error-light);
    border: 1px solid var(--mei-color-error-base);
  `}
`;

const GridContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--mei-theme-border-default);
    border-radius: 4px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
`;

const Cell = styled.div<{ $status: 'correct' | 'wrong' | 'answered' | 'unanswered'; $active: boolean }>`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--mei-radius-sm);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--mei-motion-fast) var(--mei-ease-out);
  border: 1.5px solid transparent;

  ${props => props.$status === 'correct' && `
    background: var(--mei-color-success-light);
    color: var(--mei-color-success-dark);
    border-color: var(--mei-color-success-base);
  `}

  ${props => props.$status === 'wrong' && `
    background: var(--mei-color-error-light);
    color: var(--mei-color-error-dark);
    border-color: var(--mei-color-error-base);
  `}

  ${props => props.$status === 'answered' && `
    background: var(--mei-color-primary-100);
    color: var(--mei-color-primary-700);
    border-color: var(--mei-color-primary-400);
  `}

  ${props => props.$status === 'unanswered' && `
    background: var(--mei-theme-bg-surface);
    color: var(--mei-theme-text-secondary);
    border-color: var(--mei-theme-border-default);
    &:hover { border-color: var(--mei-color-primary-400); background: var(--mei-color-primary-50); }
  `}

  ${props => props.$active && `
    border-color: var(--mei-color-primary-500);
    color: var(--mei-color-primary-600);
    background: var(--mei-color-primary-50);
    border-width: 2px;
  `}
`;

interface AnswerCardProps {
  questions: Question[]
  userAnswers: Record<number, string>
  showAnswer: boolean
  currentIndex?: number
  onNavigate?: (index: number) => void
}

const AnswerCard: React.FC<AnswerCardProps> = ({ questions, userAnswers, showAnswer, currentIndex, onNavigate }) => {
  const total = questions.length;
  const answered = Object.keys(userAnswers).length;
  const correct = Object.values(userAnswers).filter((ans, i) => ans === questions[i]?.answer).length;

  return (
    <Wrapper>
      <Header>
        <Title>答题进度</Title>
      </Header>
      
      <Legend>
        <LegendItem>
          <Swatch $status="answered" />
          <span>已答 {answered}</span>
        </LegendItem>
        <LegendItem>
          <Swatch $status="unanswered" />
          <span>未答 {total - answered}</span>
        </LegendItem>
        {showAnswer && (
          <>
            <LegendItem>
              <Swatch $status="correct" />
              <span>正确 {correct}</span>
            </LegendItem>
            <LegendItem>
              <Swatch $status="wrong" />
              <span>错误 {answered - correct}</span>
            </LegendItem>
          </>
        )}
      </Legend>

      <GridContainer>
        <Grid>
          {questions.map((q, index) => {
            const userAns = userAnswers[q.id];
            let status: 'correct' | 'wrong' | 'answered' | 'unanswered' = 'unanswered';
            if (showAnswer && userAns !== undefined) {
              status = userAns === q.answer ? 'correct' : 'wrong';
            } else if (userAns !== undefined) {
              status = 'answered';
            }
            return (
              <Cell
                key={q.id}
                $status={status}
                $active={currentIndex === index}
                onClick={() => onNavigate?.(index)}
              >
                {index + 1}
              </Cell>
            );
          })}
        </Grid>
      </GridContainer>
    </Wrapper>
  );
};

export default AnswerCard;

import React from 'react';
import styled from 'styled-components';
import type { SalesforceQuestion } from '../data/salesforce';
import { isCorrectAnswer } from '../data/salesforce';

const Wrapper = styled.div<{ $compact: boolean }>`
  background: var(--mei-theme-bg-surface);
  border: 1px solid var(--mei-theme-border-default);
  border-radius: var(--mei-radius-lg);
  padding: ${props => props.$compact ? '12px' : '16px'};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div<{ $compact: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.$compact ? '8px' : '16px'};
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

const Legend = styled.div<{ $compact: boolean }>`
  display: grid;
  grid-template-columns: ${props => props.$compact ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)'};
  gap: 8px;
  margin-bottom: ${props => props.$compact ? '12px' : '20px'};
  padding: ${props => props.$compact ? '8px 12px' : '12px'};
  background: var(--mei-theme-bg-page);
  border-radius: var(--mei-radius-md);
  border: 1px solid var(--mei-theme-border-default);

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
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

const Grid = styled.div<{ $compact: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.$compact ? '38px' : '44px'}, 1fr));
  gap: ${props => props.$compact ? '6px' : '8px'};
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
  border: 1px solid transparent;

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
    border-width: 1px;
  `}
`;

interface AnswerCardProps {
  questions: SalesforceQuestion[]
  userAnswers: Record<number, string[]>
  showAnswer: boolean
  revealedQuestionIds?: ReadonlySet<number>
  compact?: boolean
  currentIndex?: number
  onNavigate?: (index: number) => void
}

const AnswerCard: React.FC<AnswerCardProps> = ({ questions, userAnswers, showAnswer, revealedQuestionIds, compact = false, currentIndex, onNavigate }) => {
  const total = questions.length;
  const answered = Object.values(userAnswers).filter(answer => answer.length > 0).length;
  const hasVisibleResults = showAnswer || Boolean(revealedQuestionIds?.size);
  const resultIsVisible = (questionId: number) => revealedQuestionIds
    ? revealedQuestionIds.has(questionId)
    : showAnswer;
  const judged = questions.filter(question =>
    resultIsVisible(question.id) && userAnswers[question.id]?.length
  ).length;
  const correct = questions.filter(question => {
    const answer = userAnswers[question.id];
    return resultIsVisible(question.id) && answer && isCorrectAnswer(question, answer);
  }).length;

  return (
    <Wrapper $compact={compact}>
      <Header $compact={compact}>
        <Title>答题进度</Title>
      </Header>
      
      <Legend $compact={compact}>
        <LegendItem>
          <Swatch $status="answered" />
          <span>已答 {answered}</span>
        </LegendItem>
        <LegendItem>
          <Swatch $status="unanswered" />
          <span>未答 {total - answered}</span>
        </LegendItem>
        {hasVisibleResults && (
          <>
            <LegendItem>
              <Swatch $status="correct" />
              <span>正确 {correct}</span>
            </LegendItem>
            <LegendItem>
              <Swatch $status="wrong" />
              <span>错误 {judged - correct}</span>
            </LegendItem>
          </>
        )}
      </Legend>

      <GridContainer>
        <Grid $compact={compact}>
          {questions.map((q, index) => {
            const userAns = userAnswers[q.id];
            let status: 'correct' | 'wrong' | 'answered' | 'unanswered' = 'unanswered';
            if (resultIsVisible(q.id) && userAns?.length) {
              status = isCorrectAnswer(q, userAns) ? 'correct' : 'wrong';
            } else if (userAns?.length) {
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

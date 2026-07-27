import developmentBasics from './salesforce-banks/development-basics';
import flowAutomationLogicSingle from './salesforce-banks/flow-automation-logic-single';
import flowAutomationLogicMultiple from './salesforce-banks/flow-automation-logic-multiple';
import flowAutomationLogic2 from './salesforce-banks/flow-automation-logic-2';
import userInterface from './salesforce-banks/user-interface';
import testingDebuggingDeployment from './salesforce-banks/testing-debugging-deployment';
import mockExamA from './salesforce-banks/mock-exam-a';
import mockExamB from './salesforce-banks/mock-exam-b';

export interface SalesforceOption {
  key: string;
  text: string;
}

export interface SalesforceQuestionInput {
  type: 'single_choice' | 'multiple_choice';
  question: string;
  score: number;
  chooseCount: number;
  options: SalesforceOption[];
  userAnswers: string[];
  correctAnswers: string[];
  explanation: Record<string, string>;
  difficulty: string;
  accuracy: number | null;
}

export interface SalesforceQuestion extends SalesforceQuestionInput {
  id: number;
  bankId: string;
  category: string;
}

export interface QuestionBank {
  id: string;
  title: string;
  kind: 'practice' | 'exam';
  updatedAt: string;
  questions: SalesforceQuestion[];
}

interface BankDefinition {
  id: string;
  title: string;
  kind: 'practice' | 'exam';
  questions: SalesforceQuestionInput[];
}

const UPDATED_AT = '2025.10.9';
const asQuestionInput = (value: unknown): SalesforceQuestionInput[] =>
  value as SalesforceQuestionInput[];

const bankDefinitions: BankDefinition[] = [
  { id: 'development-basics', title: '开发基础', kind: 'practice', questions: asQuestionInput(developmentBasics) },
  { id: 'flow-automation-logic-single', title: '流程自动化与逻辑1-单选', kind: 'practice', questions: asQuestionInput(flowAutomationLogicSingle) },
  { id: 'flow-automation-logic-multiple', title: '流程自动化与逻辑1-多选', kind: 'practice', questions: asQuestionInput(flowAutomationLogicMultiple) },
  { id: 'flow-automation-logic-2', title: '流程自动化与逻辑2', kind: 'practice', questions: asQuestionInput(flowAutomationLogic2) },
  { id: 'user-interface', title: '用户界面', kind: 'practice', questions: asQuestionInput(userInterface) },
  { id: 'testing-debugging-deployment', title: '测试/调试/部署', kind: 'practice', questions: asQuestionInput(testingDebuggingDeployment) },
  { id: 'mock-exam-a', title: '模拟卷A', kind: 'exam', questions: asQuestionInput(mockExamA) },
  { id: 'mock-exam-b', title: '模拟卷B', kind: 'exam', questions: asQuestionInput(mockExamB) },
];

export function normalizeSalesforceQuestions(
  questions: SalesforceQuestionInput[],
  bankId: string,
  category: string,
  idBase = 0,
): SalesforceQuestion[] {
  return questions.map((question, index) => ({
    ...question,
    id: idBase + index + 1,
    bankId,
    category,
    userAnswers: Array.isArray(question.userAnswers) ? question.userAnswers : [],
    correctAnswers: [...question.correctAnswers].sort(),
  }));
}

export function isSalesforceQuestionInput(value: unknown): value is SalesforceQuestionInput {
  if (!value || typeof value !== 'object') return false;
  const question = value as Partial<SalesforceQuestionInput>;
  const optionKeys = Array.isArray(question.options)
    ? question.options.map(option => option?.key)
    : [];
  const correctAnswers = Array.isArray(question.correctAnswers) ? question.correctAnswers : [];
  const userAnswers = Array.isArray(question.userAnswers) ? question.userAnswers : [];
  const explanation = question.explanation as Record<string, unknown> | undefined;
  return (
    (question.type === 'single_choice' || question.type === 'multiple_choice') &&
    typeof question.question === 'string' &&
    question.question.trim().length > 0 &&
    typeof question.score === 'number' &&
    Number.isFinite(question.score) &&
    question.score > 0 &&
    Number.isInteger(question.chooseCount) &&
    (question.chooseCount || 0) > 0 &&
    (
      (question.type === 'single_choice' && question.chooseCount === 1) ||
      (question.type === 'multiple_choice' && (question.chooseCount || 0) > 1)
    ) &&
    Array.isArray(question.options) &&
    question.options.every(option =>
      option &&
      typeof option.key === 'string' &&
      option.key.trim().length > 0 &&
      typeof option.text === 'string'
    ) &&
    new Set(optionKeys).size === optionKeys.length &&
    userAnswers.every(answer => typeof answer === 'string' && optionKeys.includes(answer)) &&
    new Set(userAnswers).size === userAnswers.length &&
    userAnswers.length <= (question.chooseCount || 0) &&
    correctAnswers.length === question.chooseCount &&
    correctAnswers.every(answer => typeof answer === 'string' && optionKeys.includes(answer)) &&
    new Set(correctAnswers).size === correctAnswers.length &&
    !!explanation &&
    Object.values(explanation).every(text => typeof text === 'string') &&
    typeof question.difficulty === 'string' &&
    (
      question.accuracy === null ||
      (
        typeof question.accuracy === 'number' &&
        Number.isFinite(question.accuracy) &&
        question.accuracy >= 0 &&
        question.accuracy <= 100
      )
    )
  );
}

export const questionBanks: QuestionBank[] = bankDefinitions.map((bank, index) => ({
  id: bank.id,
  title: bank.title,
  kind: bank.kind,
  updatedAt: UPDATED_AT,
  questions: normalizeSalesforceQuestions(bank.questions, bank.id, bank.title, index * 1000),
}));

export const practiceBanks = questionBanks.filter(bank => bank.kind === 'practice');
export const examBanks = questionBanks.filter(bank => bank.kind === 'exam');
export const questions = questionBanks.flatMap(bank => bank.questions);
export const categories = practiceBanks.map(bank => bank.title);

export function answerKey(answers: string[]): string {
  return [...answers].sort().join('');
}

export function isCorrectAnswer(question: SalesforceQuestion, answers: string[]): boolean {
  return answerKey(answers) === answerKey(question.correctAnswers);
}

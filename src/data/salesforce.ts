import developmentBasics from './salesforce-banks/development-basics';
import flowAutomationLogicSingle from './salesforce-banks/flow-automation-logic-single';
import flowAutomationLogicMultiple from './salesforce-banks/flow-automation-logic-multiple';
import flowAutomationLogic2 from './salesforce-banks/flow-automation-logic-2';
import userInterface from './salesforce-banks/user-interface';
import testingDebuggingDeployment from './salesforce-banks/testing-debugging-deployment';
import supplementalQuestions from './salesforce-banks/supplemental-questions';
import mockExamA from './salesforce-banks/mock-exam-a';
import mockExamB from './salesforce-banks/mock-exam-b';
import answerReviews from './salesforce-banks/answer-reviews';

export interface SalesforceOption {
  key: string;
  text: string;
}

export type QuestionLanguage = 'en' | 'zh' | 'both';

export interface SalesforceQuestionInput {
  type: 'single_choice' | 'multiple_choice';
  question: string;
  'question-zh'?: string;
  score: number;
  chooseCount: number;
  options: SalesforceOption[];
  'options-zh'?: SalesforceOption[];
  userAnswers: string[];
  correctAnswers: string[];
  verifiedAnswers?: string[];
  explanation: Record<string, string>;
  'explanation-zh'?: Record<string, string>;
  verifiedExplanation?: Record<string, string>;
  verifiedExplanationZh?: Record<string, string>;
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
  idBase?: number;
  updatedAt?: string;
  questions: SalesforceQuestionInput[];
}

const UPDATED_AT = '2025.10.9';
const asQuestionInput = (value: unknown): SalesforceQuestionInput[] =>
  value as SalesforceQuestionInput[];
const answerReviewMap = new Map(
  answerReviews.map(review => [`${review.bankId}:${review.questionNumber}`, review]),
);
const resolveAnswerReview = (bankId: string, questionNumber: number) => {
  const review = answerReviewMap.get(`${bankId}:${questionNumber}`);
  if (!review?.sourceReview) return review;
  return answerReviewMap.get(
    `${review.sourceReview.bankId}:${review.sourceReview.questionNumber}`,
  );
};

const bankDefinitions: BankDefinition[] = [
  { id: 'development-basics', title: '开发基础', kind: 'practice', questions: asQuestionInput(developmentBasics) },
  { id: 'flow-automation-logic-single', title: '流程自动化与逻辑1-单选', kind: 'practice', questions: asQuestionInput(flowAutomationLogicSingle) },
  { id: 'flow-automation-logic-multiple', title: '流程自动化与逻辑1-多选', kind: 'practice', questions: asQuestionInput(flowAutomationLogicMultiple) },
  { id: 'flow-automation-logic-2', title: '流程自动化与逻辑2', kind: 'practice', questions: asQuestionInput(flowAutomationLogic2) },
  { id: 'user-interface', title: '用户界面', kind: 'practice', questions: asQuestionInput(userInterface) },
  { id: 'testing-debugging-deployment', title: '测试/调试/部署', kind: 'practice', questions: asQuestionInput(testingDebuggingDeployment) },
  { id: 'supplemental-questions', title: '新增题（2026更新）', kind: 'practice', idBase: 8000, updatedAt: '2026.7.28', questions: asQuestionInput(supplementalQuestions) },
  { id: 'mock-exam-a', title: '模拟卷A', kind: 'exam', idBase: 6000, questions: asQuestionInput(mockExamA) },
  { id: 'mock-exam-b', title: '模拟卷B', kind: 'exam', idBase: 7000, questions: asQuestionInput(mockExamB) },
];

export function normalizeSalesforceQuestions(
  questions: SalesforceQuestionInput[],
  bankId: string,
  category: string,
  idBase = 0,
): SalesforceQuestion[] {
  return questions.map((question, index) => {
    const questionNumber = index + 1;
    const review = answerReviewMap.get(`${bankId}:${questionNumber}`);
    const resolvedReview = resolveAnswerReview(bankId, questionNumber);
    const correctAnswers = review
      ? [...review.correctAnswers].sort()
      : [...question.correctAnswers].sort();

    return {
      ...question,
      id: idBase + questionNumber,
      bankId,
      category,
      userAnswers: Array.isArray(question.userAnswers) ? question.userAnswers : [],
      correctAnswers,
      verifiedAnswers: review ? [...review.verifiedAnswers].sort() : undefined,
      explanation: review ? { ...review.originalExplanation } : question.explanation,
      verifiedExplanation: resolvedReview?.verifiedExplanation
        ? { ...resolvedReview.verifiedExplanation }
        : undefined,
      verifiedExplanationZh: resolvedReview?.verifiedExplanationZh
        ? { ...resolvedReview.verifiedExplanationZh }
        : undefined,
    };
  });
}

export function isSalesforceQuestionInput(value: unknown): value is SalesforceQuestionInput {
  if (!value || typeof value !== 'object') return false;
  const question = value as Partial<SalesforceQuestionInput>;
  const optionKeys = Array.isArray(question.options)
    ? question.options.map(option => option?.key)
    : [];
  const correctAnswers = Array.isArray(question.correctAnswers) ? question.correctAnswers : [];
  const verifiedAnswers = question.verifiedAnswers;
  const userAnswers = Array.isArray(question.userAnswers) ? question.userAnswers : [];
  const explanation = question.explanation as Record<string, unknown> | undefined;
  const verifiedExplanation = question.verifiedExplanation as Record<string, unknown> | undefined;
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
    (
      verifiedAnswers === undefined ||
      (
        Array.isArray(verifiedAnswers) &&
        verifiedAnswers.length === question.chooseCount &&
        verifiedAnswers.every(answer => typeof answer === 'string' && optionKeys.includes(answer)) &&
        new Set(verifiedAnswers).size === verifiedAnswers.length
      )
    ) &&
    !!explanation &&
    Object.values(explanation).every(text => typeof text === 'string') &&
    (
      verifiedExplanation === undefined ||
      (
        Object.values(verifiedExplanation).every(text => typeof text === 'string') &&
        (verifiedAnswers || []).every(answer => typeof verifiedExplanation[answer] === 'string')
      )
    ) &&
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
  updatedAt: bank.updatedAt ?? UPDATED_AT,
  questions: normalizeSalesforceQuestions(bank.questions, bank.id, bank.title, bank.idBase ?? index * 1000),
}));

export const practiceBanks = questionBanks.filter(bank => bank.kind === 'practice');
export const examBanks = questionBanks.filter(bank => bank.kind === 'exam');
export const questions = questionBanks.flatMap(bank => bank.questions);
export const categories = practiceBanks.map(bank => bank.title);

export function answerKey(answers: string[]): string {
  return [...answers].sort().join('');
}

export function getEffectiveCorrectAnswers(
  question: Pick<SalesforceQuestionInput, 'correctAnswers' | 'verifiedAnswers'>,
): string[] {
  return question.verifiedAnswers ?? question.correctAnswers;
}

export function getEffectiveExplanation(
  question: Pick<SalesforceQuestionInput, 'explanation' | 'verifiedExplanation'>,
  answer: string,
): string {
  return question.verifiedExplanation?.[answer] ?? question.explanation[answer] ?? '暂无解析';
}

const combineLocalizedText = (
  english: string,
  chinese: string | undefined,
  language: QuestionLanguage,
): string => {
  if (language === 'en' || !chinese) return english;
  if (language === 'zh') return chinese;
  return `${english}<div style="margin-top: 12px;">${chinese}</div>`;
};

export function getLocalizedQuestion(
  question: Pick<SalesforceQuestionInput, 'question' | 'question-zh'>,
  language: QuestionLanguage,
): string {
  return combineLocalizedText(question.question, question['question-zh'], language);
}

export function getLocalizedOptions(
  question: Pick<SalesforceQuestionInput, 'options' | 'options-zh'>,
  language: QuestionLanguage,
): SalesforceOption[] {
  const chineseOptions = new Map(
    (question['options-zh'] || []).map(option => [option.key, option.text]),
  );
  return question.options.map(option => ({
    ...option,
    text: combineLocalizedText(option.text, chineseOptions.get(option.key), language),
  }));
}

export function getLocalizedExplanation(
  question: Pick<
    SalesforceQuestionInput,
    'explanation' | 'explanation-zh' | 'verifiedExplanation' | 'verifiedExplanationZh'
  >,
  answer: string,
  language: QuestionLanguage,
): string {
  const english = getEffectiveExplanation(question, answer);
  const chinese = question.verifiedExplanationZh?.[answer]
    ?? question['explanation-zh']?.[answer];
  return combineLocalizedText(english, chinese, language);
}

export function isCorrectAnswer(question: SalesforceQuestion, answers: string[]): boolean {
  return answerKey(answers) === answerKey(getEffectiveCorrectAnswers(question));
}

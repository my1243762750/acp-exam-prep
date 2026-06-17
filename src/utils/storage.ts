export interface UserAnswer {
  answer: string;
  correct: boolean;
  timestamp: number;
}

export interface ExamRecord {
  date: string;
  score: number;
  total: number;
  correct: number;
  answers: Record<number, string>;
}

const KEYS = {
  ANSWERS: 'acp_answers',
  EXAM_HISTORY: 'acp_exam_history',
} as const;

function getItem<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function setItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn('localStorage write failed:', e);
  }
}

// ---- User Answers ----

export function getAnswers(): Record<number, UserAnswer> {
  return getItem<Record<number, UserAnswer>>(KEYS.ANSWERS, {});
}

export function saveAnswer(questionId: number, answer: string, correct: boolean): void {
  const all = getAnswers();
  all[questionId] = { answer, correct, timestamp: Date.now() };
  setItem(KEYS.ANSWERS, all);
}

// ---- Computed Stats ----

export function getStats() {
  const answers = getAnswers();
  const entries = Object.entries(answers);
  const answeredQuestions = entries.length;
  const correctAnswers = entries.filter(([, v]) => v.correct).length;

  const daysSet = new Set<string>();
  entries.forEach(([, v]) => {
    const d = new Date(v.timestamp);
    daysSet.add(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`);
  });

  return {
    totalQuestions: 506, // known constant from question bank
    answeredQuestions,
    correctAnswers,
    wrongAnswers: answeredQuestions - correctAnswers,
    studyDays: daysSet.size,
    averageScore: answeredQuestions > 0 ? Math.round((correctAnswers / answeredQuestions) * 100) : 0,
  };
}

export function getWrongQuestionIds(): number[] {
  const answers = getAnswers();
  return Object.entries(answers)
    .filter(([, v]) => !v.correct)
    .map(([id]) => Number(id));
}

export function removeWrongQuestion(questionId: number): void {
  const all = getAnswers();
  delete all[questionId];
  setItem(KEYS.ANSWERS, all);
}

export function clearWrongQuestions(): void {
  setItem(KEYS.ANSWERS, {});
}

// ---- Exam History ----

export function getExamHistory(): ExamRecord[] {
  return getItem<ExamRecord[]>(KEYS.EXAM_HISTORY, []);
}

export function saveExamRecord(record: ExamRecord): void {
  const history = getExamHistory();
  history.unshift(record);
  setItem(KEYS.EXAM_HISTORY, history);
}

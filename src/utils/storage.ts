import { getCurrentSubjectId, getCurrentTotalQuestions } from '../data/subject';

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

function subjectKey(base: string): string {
  const subj = getCurrentSubjectId();
  return `${base}_${subj}`;
}

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
  return getItem<Record<number, UserAnswer>>(subjectKey('acp_answers'), {});
}

export function saveAnswer(questionId: number, answer: string, correct: boolean): void {
  const all = getAnswers();
  all[questionId] = { answer, correct, timestamp: Date.now() };
  setItem(subjectKey('acp_answers'), all);
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
    totalQuestions: getCurrentTotalQuestions(),
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
  setItem(subjectKey('acp_answers'), all);
}

export function clearWrongQuestions(): void {
  setItem(subjectKey('acp_answers'), {});
}

// ---- Exam History ----

export function getExamHistory(): ExamRecord[] {
  return getItem<ExamRecord[]>(subjectKey('acp_exam_history'), []);
}

export function saveExamRecord(record: ExamRecord): void {
  const history = getExamHistory();
  history.unshift(record);
  setItem(subjectKey('acp_exam_history'), history);
}

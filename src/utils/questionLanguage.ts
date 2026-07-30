import type { QuestionLanguage } from '../data/salesforce';

const STORAGE_KEY = 'salesforce-question-language';

export function getStoredQuestionLanguage(): QuestionLanguage {
  if (typeof window === 'undefined') return 'en';
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === 'zh' || value === 'both' ? value : 'en';
  } catch {
    return 'en';
  }
}

export function saveQuestionLanguage(language: QuestionLanguage): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch {
    return;
  }
}

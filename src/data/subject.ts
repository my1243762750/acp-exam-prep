import { questions as acpQuestions, categories as acpCategories } from './questions';
import type { Question } from './questions';

export interface SubjectInfo {
  id: string;
  name: string;
  shortName: string;
  description: string;
}

export interface ImportedSubject {
  info: SubjectInfo;
  questions: Question[];
  categories: string[];
}

// ---- built-in subjects ----
const subjectInfoMap: Record<string, SubjectInfo> = {
  acp: { id: 'acp', name: '阿里云ACP认证', shortName: 'ACP', description: '阿里云ACP认证考试备考平台' },
};

const subjectQuestionsMap: Record<string, Question[]> = {
  acp: acpQuestions,
};

const subjectCategoriesMap: Record<string, string[]> = {
  acp: acpCategories,
};

// ---- custom (imported) subjects stored in localStorage ----
const CUSTOM_KEY = 'acp_custom_subjects';

function loadCustomSubjects(): ImportedSubject[] {
  try {
    return JSON.parse(localStorage.getItem(CUSTOM_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveCustomSubjects(list: ImportedSubject[]): void {
  try {
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(list));
  } catch (e) {
    console.warn('Failed to save custom subjects:', e);
  }
}

function ensureCustomLoaded(): void {
  // only load once per session (skip if already in map keys)
  const customList = loadCustomSubjects();
  for (const item of customList) {
    if (!subjectInfoMap[item.info.id]) {
      subjectInfoMap[item.info.id] = item.info;
      subjectQuestionsMap[item.info.id] = item.questions;
      subjectCategoriesMap[item.info.id] = item.categories;
    }
  }
}

// ---- public API ----

export function getSubjectInfo(id: string): SubjectInfo {
  ensureCustomLoaded();
  return subjectInfoMap[id] || subjectInfoMap['acp'];
}

export function getSubjectQuestions(id: string): Question[] {
  ensureCustomLoaded();
  return subjectQuestionsMap[id] || subjectQuestionsMap['acp'];
}

export function getSubjectCategories(id: string): string[] {
  ensureCustomLoaded();
  return subjectCategoriesMap[id] || subjectCategoriesMap['acp'];
}

const SUBJECT_KEY = 'acp_current_subject';

export function getCurrentSubjectId(): string {
  try {
    const id = localStorage.getItem(SUBJECT_KEY) || 'acp';
    ensureCustomLoaded();
    return subjectInfoMap[id] ? id : 'acp';
  } catch {
    return 'acp';
  }
}

export function setCurrentSubjectId(id: string): void {
  try {
    localStorage.setItem(SUBJECT_KEY, id);
  } catch {
    // ignore
  }
}

export function getCurrentSubjectInfo(): SubjectInfo {
  return getSubjectInfo(getCurrentSubjectId());
}

export function getCurrentQuestions(): Question[] {
  return getSubjectQuestions(getCurrentSubjectId());
}

export function getCurrentCategories(): string[] {
  return getSubjectCategories(getCurrentSubjectId());
}

export function getCurrentTotalQuestions(): number {
  return getCurrentQuestions().length;
}

export function getAllSubjects(): SubjectInfo[] {
  ensureCustomLoaded();
  return Object.values(subjectInfoMap);
}

// ---- import ----

export function importSubject(data: ImportedSubject): boolean {
  const list = loadCustomSubjects();
  // remove old version of same id
  const filtered = list.filter(s => s.info.id !== data.info.id);
  filtered.push(data);
  saveCustomSubjects(filtered);

  // register in current session maps
  subjectInfoMap[data.info.id] = data.info;
  subjectQuestionsMap[data.info.id] = data.questions;
  subjectCategoriesMap[data.info.id] = data.categories;
  return true;
}

export function removeImportedSubject(id: string): void {
  const list = loadCustomSubjects().filter(s => s.info.id !== id);
  saveCustomSubjects(list);

  delete subjectInfoMap[id];
  delete subjectQuestionsMap[id];
  delete subjectCategoriesMap[id];
}

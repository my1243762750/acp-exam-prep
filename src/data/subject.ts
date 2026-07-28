import {
  examBanks,
  practiceBanks,
  questionBanks,
  questions as salesforceQuestions,
} from './salesforce';
import type { QuestionBank, SalesforceQuestion } from './salesforce';

export interface SubjectInfo {
  id: string;
  name: string;
  shortName: string;
  description: string;
}

export interface ImportedSubject {
  info: SubjectInfo;
  questions: SalesforceQuestion[];
  categories: string[];
}

const salesforceInfo: SubjectInfo = {
  id: 'salesforce-pd1',
  name: 'Salesforce Platform Developer I',
  shortName: 'Platform Developer I',
  description: 'Salesforce Platform Developer I 认证考试备考平台',
};

const subjectInfoMap: Record<string, SubjectInfo> = {
  [salesforceInfo.id]: salesforceInfo,
};

const subjectQuestionsMap: Record<string, SalesforceQuestion[]> = {
  [salesforceInfo.id]: salesforceQuestions,
};

const subjectCategoriesMap: Record<string, string[]> = {
  [salesforceInfo.id]: questionBanks.map(bank => bank.title),
};

const subjectBanksMap: Record<string, QuestionBank[]> = {
  [salesforceInfo.id]: questionBanks,
};

const CUSTOM_KEY = 'exam_prep_custom_subjects';
const SUBJECT_KEY = 'exam_prep_current_subject';

function loadCustomSubjects(): ImportedSubject[] {
  try {
    return JSON.parse(localStorage.getItem(CUSTOM_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveCustomSubjects(list: ImportedSubject[]): boolean {
  try {
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(list));
    return true;
  } catch (error) {
    console.warn('Failed to save custom subjects:', error);
    return false;
  }
}

function registerSubject(item: ImportedSubject): void {
  subjectInfoMap[item.info.id] = item.info;
  subjectQuestionsMap[item.info.id] = item.questions;
  subjectCategoriesMap[item.info.id] = item.categories;
  subjectBanksMap[item.info.id] = [{
    id: item.info.id,
    title: item.info.name,
    kind: 'practice',
    updatedAt: '',
    questions: item.questions,
  }];
}

function ensureCustomLoaded(): void {
  loadCustomSubjects().forEach(item => {
    if (!subjectInfoMap[item.info.id]) registerSubject(item);
  });
}

export function getSubjectInfo(id: string): SubjectInfo {
  ensureCustomLoaded();
  return subjectInfoMap[id] || salesforceInfo;
}

export function getSubjectQuestions(id: string): SalesforceQuestion[] {
  ensureCustomLoaded();
  return subjectQuestionsMap[id] || salesforceQuestions;
}

export function getSubjectCategories(id: string): string[] {
  ensureCustomLoaded();
  return subjectCategoriesMap[id] || subjectCategoriesMap[salesforceInfo.id];
}

export function getCurrentSubjectId(): string {
  try {
    const id = localStorage.getItem(SUBJECT_KEY) || salesforceInfo.id;
    ensureCustomLoaded();
    return subjectInfoMap[id] ? id : salesforceInfo.id;
  } catch {
    return salesforceInfo.id;
  }
}

export function setCurrentSubjectId(id: string): void {
  try {
    localStorage.setItem(SUBJECT_KEY, id);
  } catch {
    // ignore unavailable storage
  }
}

export function getCurrentSubjectInfo(): SubjectInfo {
  return getSubjectInfo(getCurrentSubjectId());
}

export function getCurrentQuestions(): SalesforceQuestion[] {
  return getSubjectQuestions(getCurrentSubjectId());
}

export function getCurrentCategories(): string[] {
  return getSubjectCategories(getCurrentSubjectId());
}

export function getCurrentQuestionBanks(): QuestionBank[] {
  ensureCustomLoaded();
  return subjectBanksMap[getCurrentSubjectId()] || questionBanks;
}

export function getCurrentPracticeBanks(): QuestionBank[] {
  if (getCurrentSubjectId() === salesforceInfo.id) return practiceBanks;
  return getCurrentQuestionBanks();
}

export function getCurrentExamBanks(): QuestionBank[] {
  if (getCurrentSubjectId() === salesforceInfo.id) return examBanks;
  return getCurrentQuestionBanks().map(bank => ({ ...bank, kind: 'exam' }));
}

export function getCurrentTotalQuestions(): number {
  if (getCurrentSubjectId() === salesforceInfo.id) {
    return practiceBanks.reduce((total, bank) => total + bank.questions.length, 0);
  }
  return getCurrentQuestions().length;
}

export function getAllSubjects(): SubjectInfo[] {
  ensureCustomLoaded();
  return Object.values(subjectInfoMap);
}

export function importSubject(data: ImportedSubject): boolean {
  const filtered = loadCustomSubjects().filter(subject => subject.info.id !== data.info.id);
  filtered.push(data);
  if (!saveCustomSubjects(filtered)) return false;
  registerSubject(data);
  return true;
}

export function removeImportedSubject(id: string): void {
  saveCustomSubjects(loadCustomSubjects().filter(subject => subject.info.id !== id));
  delete subjectInfoMap[id];
  delete subjectQuestionsMap[id];
  delete subjectCategoriesMap[id];
  delete subjectBanksMap[id];
}

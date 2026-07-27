export interface EssayQuestion {
  id: number;
  title: string;
  answer: string;
  category?: string;
  createdAt: number;
}

const STORAGE_KEY = 'essay_questions';

export function getEssayQuestions(): EssayQuestion[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

export function addEssayQuestion(q: { title: string; answer: string; category?: string }): EssayQuestion {
  const list = getEssayQuestions();
  const newQ: EssayQuestion = { ...q, id: Date.now(), createdAt: Date.now() };
  list.unshift(newQ);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  return newQ;
}

export function deleteEssayQuestion(id: number): void {
  const list = getEssayQuestions().filter(item => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

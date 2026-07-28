export interface AnswerReview {
  bankId: string;
  questionNumber: number;
  correctAnswers: string[];
  verifiedAnswers: string[];
  reason: string;
  reviewedAt: string;
}

const answerReviews: AnswerReview[] = [
  { bankId: 'development-basics', questionNumber: 12, correctAnswers: ['B'], verifiedAnswers: ['D'], reason: '人工复核', reviewedAt: '2026-07-28' },
  { bankId: 'development-basics', questionNumber: 44, correctAnswers: ['B', 'C'], verifiedAnswers: ['B', 'D'], reason: '人工复核', reviewedAt: '2026-07-28' },
  { bankId: 'flow-automation-logic-single', questionNumber: 5, correctAnswers: ['C'], verifiedAnswers: ['D'], reason: '人工复核', reviewedAt: '2026-07-28' },
  { bankId: 'flow-automation-logic-single', questionNumber: 42, correctAnswers: ['B'], verifiedAnswers: ['C'], reason: '人工复核', reviewedAt: '2026-07-28' },
  { bankId: 'flow-automation-logic-multiple', questionNumber: 2, correctAnswers: ['B', 'D'], verifiedAnswers: ['A', 'D'], reason: '人工复核', reviewedAt: '2026-07-28' },
  { bankId: 'flow-automation-logic-multiple', questionNumber: 14, correctAnswers: ['A', 'B'], verifiedAnswers: ['A', 'C'], reason: '人工复核', reviewedAt: '2026-07-28' },
  { bankId: 'flow-automation-logic-multiple', questionNumber: 16, correctAnswers: ['A', 'C'], verifiedAnswers: ['B', 'C'], reason: '人工复核', reviewedAt: '2026-07-28' },
  { bankId: 'flow-automation-logic-2', questionNumber: 8, correctAnswers: ['D'], verifiedAnswers: ['C'], reason: '人工复核', reviewedAt: '2026-07-28' },
  { bankId: 'flow-automation-logic-2', questionNumber: 18, correctAnswers: ['A', 'B'], verifiedAnswers: ['A', 'C'], reason: '人工复核', reviewedAt: '2026-07-28' },
  { bankId: 'flow-automation-logic-2', questionNumber: 23, correctAnswers: ['C', 'D'], verifiedAnswers: ['A', 'C'], reason: '人工复核', reviewedAt: '2026-07-28' },
  { bankId: 'user-interface', questionNumber: 13, correctAnswers: ['C'], verifiedAnswers: ['B'], reason: '人工复核', reviewedAt: '2026-07-28' },
  { bankId: 'user-interface', questionNumber: 16, correctAnswers: ['A', 'B'], verifiedAnswers: ['B', 'D'], reason: '人工复核', reviewedAt: '2026-07-28' },
  { bankId: 'user-interface', questionNumber: 23, correctAnswers: ['C', 'D'], verifiedAnswers: ['B', 'C'], reason: '人工复核', reviewedAt: '2026-07-28' },
  { bankId: 'user-interface', questionNumber: 35, correctAnswers: ['B', 'D', 'E'], verifiedAnswers: ['A', 'B', 'D'], reason: '人工复核', reviewedAt: '2026-07-28' },
  { bankId: 'testing-debugging-deployment', questionNumber: 3, correctAnswers: ['A', 'C'], verifiedAnswers: ['A', 'B'], reason: '人工复核', reviewedAt: '2026-07-28' },
  { bankId: 'testing-debugging-deployment', questionNumber: 7, correctAnswers: ['D'], verifiedAnswers: ['C'], reason: '人工复核', reviewedAt: '2026-07-28' },
  { bankId: 'mock-exam-a', questionNumber: 15, correctAnswers: ['B', 'C'], verifiedAnswers: ['B', 'D'], reason: '与已复核练习题同步', reviewedAt: '2026-07-28' },
  { bankId: 'mock-exam-a', questionNumber: 39, correctAnswers: ['B', 'D', 'E'], verifiedAnswers: ['A', 'B', 'D'], reason: '与已复核练习题同步', reviewedAt: '2026-07-28' },
  { bankId: 'mock-exam-a', questionNumber: 53, correctAnswers: ['A', 'C'], verifiedAnswers: ['A', 'B'], reason: '与已复核练习题同步', reviewedAt: '2026-07-28' },
  { bankId: 'mock-exam-b', questionNumber: 21, correctAnswers: ['C'], verifiedAnswers: ['D'], reason: '与已复核练习题同步', reviewedAt: '2026-07-28' },
  { bankId: 'mock-exam-b', questionNumber: 24, correctAnswers: ['B'], verifiedAnswers: ['C'], reason: '与已复核练习题同步', reviewedAt: '2026-07-28' },
  { bankId: 'mock-exam-b', questionNumber: 25, correctAnswers: ['A', 'C'], verifiedAnswers: ['B', 'C'], reason: '与已复核练习题同步', reviewedAt: '2026-07-28' },
  { bankId: 'mock-exam-b', questionNumber: 31, correctAnswers: ['C'], verifiedAnswers: ['B'], reason: '与已复核练习题同步', reviewedAt: '2026-07-28' },
  { bankId: 'mock-exam-b', questionNumber: 50, correctAnswers: ['A', 'C'], verifiedAnswers: ['A', 'B'], reason: '与已复核练习题同步', reviewedAt: '2026-07-28' },
  { bankId: 'mock-exam-b', questionNumber: 56, correctAnswers: ['D'], verifiedAnswers: ['C'], reason: '与已复核练习题同步', reviewedAt: '2026-07-28' },
  { bankId: 'mock-exam-b', questionNumber: 61, correctAnswers: ['C', 'D'], verifiedAnswers: ['A', 'C'], reason: '与已复核练习题同步', reviewedAt: '2026-07-28' },
];

export default answerReviews;

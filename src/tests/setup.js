const vm = Array.from(document.querySelectorAll("*"))
  .map(el => el.__vue__)
  .find(v => v && v.$store);

const store = vm && vm.$store;

console.log(store);
console.log(store && store.state);

function convertQuestion(item) {
  const detail = item.detail || {};
  const content = detail.content || {};
  const sourceOptions = detail.options || content.options || [];

  const options = sourceOptions
    .slice()
    .sort((a, b) => (a.ordering ?? 0) - (b.ordering ?? 0))
    .map((option, index) => ({
      id: String(option.id),
      key: option.selectTip || String.fromCharCode(65 + index),
      text: option.text || "",
      isCorrect: Boolean(option.is_correct)
    }));

  const optionMap = Object.fromEntries(
    options.map(option => [option.id, option.key])
  );

  const correctAnswers = (detail.correct_answer || [])
    .map(id => optionMap[String(id)])
    .filter(Boolean);

  const rawUserAnswers = Array.isArray(item.answer)
    ? item.answer
    : Array.isArray(detail.answer)
      ? detail.answer
      : detail.answer
        ? [detail.answer]
        : [];

  const userAnswers = rawUserAnswers
    .map(value => optionMap[String(value)] || String(value))
    .filter(value => /^[A-Z]$/.test(value));

  const difficultyMap = {
    easy: "简单",
    medium: "中等",
    hard: "困难"
  };

  const isMultiple =
    item.type === "checkbox" ||
    detail.type === "checkbox" ||
    content.type === "checkbox" ||
    correctAnswers.length > 1;

  const explanation = {};

  correctAnswers.forEach(key => {
    explanation[key] = content.analysis || "";
  });

  return {
    type: isMultiple ? "multiple_choice" : "single_choice",
    question: content.topic || "",
    score: Number(detail.score ?? 1),
    chooseCount: isMultiple ? correctAnswers.length : 1,
    options: options.map(({ key, text }) => ({ key, text })),
    userAnswers,
    correctAnswers,
    explanation,
    difficulty:
      difficultyMap[content.difficulty] ||
      content.difficulty ||
      "未知",
    accuracy:
      typeof detail.accuracy === "number"
        ? Math.round(detail.accuracy * 100)
        : null
  };
}

const questions = store.state.exam.examList.map(convertQuestion);

copy(JSON.stringify(questions, null, 2));

console.log(`已复制 ${questions.length} 道题`, questions);
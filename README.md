# ACP 考试助手

阿里云 ACP 认证刷题工具。项目是一个纯前端 React 应用，内置题库，也支持导入 JSON 题库；练习记录、错题和考试历史保存在浏览器 localStorage。

## 功能

- 首页：展示当前题库、答题进度、正确率和快速入口
- 练习模式：按分类练习或随机练习，答题后显示答案和解析
- 模拟考试：限时答题，交卷后保存考试记录
- 错题复习：自动收集错题，支持移除已掌握题目
- 学习统计：展示答题趋势、分类分布和考试历史
- 题库预览：查看当前题库题目和分类
- 题库导入：上传 JSON 文件并切换到导入题库

## 技术栈

- React 19
- TypeScript
- React Router 7
- Ant Design 5
- Styled Components 6
- Recharts 3
- Create React App

## 运行

```bash
npm install
npm start
```

构建生产包：

```bash
npm run build
```

运行测试：

```bash
npm test
```

## 项目结构

```text
src/
├── components/
│   ├── ImportModal.tsx
│   ├── Layout.tsx
│   └── QuestionCard.tsx
├── data/
│   ├── questions.ts
│   └── subject.ts
├── pages/
│   ├── Exam.tsx
│   ├── Home.tsx
│   ├── Practice.tsx
│   ├── Preview.tsx
│   ├── Review.tsx
│   └── Statistics.tsx
├── utils/
│   └── storage.ts
├── App.tsx
├── index.tsx
└── tokens.css
```

## 题库格式

导入文件可以是题目数组，也可以是包含 `questions` 字段的对象：

```json
{
  "name": "示例题库",
  "shortName": "示例",
  "description": "导入题库说明",
  "categories": ["OSS"],
  "questions": [
    {
      "id": 1,
      "type": "单选题",
      "title": "OSS 的基本数据单元是什么？",
      "options": ["A.Object", "B.Bucket", "C.Service", "D.安全组"],
      "answer": "A",
      "explanation": "OSS 的基本数据单元是对象 Object。",
      "category": "OSS"
    }
  ]
}
```

题目类型支持 `单选题`、`多选题`、`判断题`。

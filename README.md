# ACP考试助手

一个基于React的阿里云ACP认证考试备考平台，帮助用户高效备考，轻松通过考试。

## 🚀 项目特色

- **模块化设计**: 采用组件化开发，代码结构清晰，易于维护
- **现代化UI**: 使用Ant Design组件库，界面美观现代
- **响应式布局**: 支持多设备访问，移动端友好
- **数据可视化**: 集成Recharts图表库，直观展示学习数据
- **TypeScript**: 使用TypeScript开发，提供更好的类型安全
- **Styled Components**: 使用CSS-in-JS方案，样式管理更灵活

## 📋 功能模块

### 1. 首页 (Home)
- 学习统计概览
- 学习进度展示
- 快速入口导航
- 学习建议指导

### 2. 练习模式 (Practice)
- 分类练习：按知识点分类练习
- 随机练习：随机抽取题目练习
- 实时答题反馈
- 答题统计展示

### 3. 模拟考试 (Exam)
- 全真模拟考试环境
- 60分钟倒计时
- 自动交卷功能
- 考试成绩分析

### 4. 错题复习 (Review)
- 错题自动收集
- 分类筛选复习
- 错题详情查看
- 错题移除管理

### 5. 学习统计 (Statistics)
- 学习趋势图表
- 知识点分布饼图
- 考试记录列表
- 个性化学习建议

## 🛠️ 技术栈

- **前端框架**: React 18
- **开发语言**: TypeScript
- **UI组件库**: Ant Design
- **路由管理**: React Router v6
- **样式方案**: Styled Components
- **图表库**: Recharts
- **构建工具**: Create React App

## 📦 安装和运行

### 环境要求
- Node.js >= 14.0.0
- npm >= 6.0.0

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm start
```

### 构建生产版本
```bash
npm run build
```

### 运行测试
```bash
npm test
```

## 📁 项目结构

```
src/
├── components/          # 通用组件
│   ├── Layout.tsx      # 布局组件
│   └── QuestionCard.tsx # 题目卡片组件
├── pages/              # 页面组件
│   ├── Home.tsx        # 首页
│   ├── Practice.tsx    # 练习模式
│   ├── Exam.tsx        # 模拟考试
│   ├── Review.tsx      # 错题复习
│   └── Statistics.tsx  # 学习统计
├── data/               # 数据文件
│   └── questions.ts    # 题库数据
├── App.tsx             # 主应用组件
├── App.css             # 全局样式
└── index.tsx           # 应用入口
```

## 🎯 核心功能实现

### 题库数据结构
```typescript
interface Question {
  id: number;
  type: '单选题' | '多选题' | '判断题';
  title: string;
  options: string[];
  answer: string;
  explanation: string;
  category?: string;
}
```

### 路由配置
```typescript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/practice" element={<Practice />} />
  <Route path="/exam" element={<Exam />} />
  <Route path="/review" element={<Review />} />
  <Route path="/statistics" element={<Statistics />} />
</Routes>
```

### 状态管理
- 使用React Hooks进行状态管理
- 本地存储用户答题记录
- 错题自动收集和管理

## 🎨 设计亮点

### 1. 用户体验优化
- 流畅的页面切换动画
- 直观的进度展示
- 友好的错误提示
- 响应式设计适配

### 2. 交互设计
- 题目卡片悬停效果
- 选项选择状态反馈
- 答题结果即时展示
- 操作按钮状态管理

### 3. 数据可视化
- 学习趋势折线图
- 知识点分布饼图
- 进度条动态展示
- 统计数据卡片

## 🔧 自定义配置

### 主题定制
项目支持Ant Design主题定制，可在`App.tsx`中配置：
```typescript
<ConfigProvider
  theme={{
    token: {
      colorPrimary: '#1890ff',
      borderRadius: 6,
    },
  }}
>
```

### 题库扩展
在`src/data/questions.ts`中添加新的题目：
```typescript
export const questions: Question[] = [
  // 添加新题目...
];
```

## 📱 浏览器支持

- Chrome >= 60
- Firefox >= 60
- Safari >= 12
- Edge >= 79

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式

如有问题或建议，请通过以下方式联系：
- 提交 Issue
- 发送邮件

## 🙏 致谢

感谢以下开源项目的支持：
- [React](https://reactjs.org/)
- [Ant Design](https://ant.design/)
- [Recharts](https://recharts.org/)
- [Styled Components](https://styled-components.com/)

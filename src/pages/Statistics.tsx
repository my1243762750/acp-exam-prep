import React from 'react';
import { Card, Row, Col, Statistic, Typography, Progress, Tag } from 'antd';
import { 
  BookOutlined, 
  CheckCircleOutlined, 
  ClockCircleOutlined,
  TrophyOutlined
} from '@ant-design/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

const StyledCard = styled(Card)`
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Statistics: React.FC = () => {
  // 模拟学习数据
  const stats = {
    totalQuestions: 506,
    answeredQuestions: 320,
    correctAnswers: 256,
    wrongAnswers: 64,
    studyDays: 15,
    averageScore: 80,
    studyTime: 45, // 小时
    consecutiveDays: 7
  };

  // 模拟每日学习数据
  const dailyData = [
    { date: '01-01', questions: 20, correct: 16, score: 80 },
    { date: '01-02', questions: 25, correct: 20, score: 80 },
    { date: '01-03', questions: 30, correct: 24, score: 80 },
    { date: '01-04', questions: 15, correct: 12, score: 80 },
    { date: '01-05', questions: 35, correct: 28, score: 80 },
    { date: '01-06', questions: 40, correct: 32, score: 80 },
    { date: '01-07', questions: 45, correct: 36, score: 80 },
  ];

  // 模拟分类统计数据
  const categoryData = [
    { name: '安全', value: 106, color: '#ff4d4f' },
    { name: '数据库', value: 23, color: '#1890ff' },
    { name: 'CDN', value: 19, color: '#52c41a' },
    { name: 'OSS', value: 55, color: '#faad14' },
    { name: '负载均衡', value: 81, color: '#722ed1' },
    { name: '网络', value: 52, color: '#13c2c2' },
    { name: '监控', value: 47, color: '#eb2f96' },
    { name: '其他', value: 123, color: '#fa8c16' },
  ];

  // 模拟考试记录
  const examRecords = [
    { date: '2024-01-01', score: 85, total: 20, correct: 17 },
    { date: '2024-01-03', score: 90, total: 20, correct: 18 },
    { date: '2024-01-05', score: 75, total: 20, correct: 15 },
    { date: '2024-01-07', score: 95, total: 20, correct: 19 },
  ];

  const accuracy = Math.round((stats.correctAnswers / stats.answeredQuestions) * 100);
  const progress = Math.round((stats.answeredQuestions / stats.totalQuestions) * 100);

  return (
    <div>
      <Title level={2}>学习统计</Title>
      <Paragraph type="secondary">
        查看您的学习进度和成绩分析
      </Paragraph>

      {/* 总体统计 */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} md={6}>
          <StyledCard>
            <Statistic
              title="总题数"
              value={stats.totalQuestions}
              prefix={<BookOutlined />}
            />
          </StyledCard>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StyledCard>
            <Statistic
              title="已答题数"
              value={stats.answeredQuestions}
              prefix={<CheckCircleOutlined />}
            />
          </StyledCard>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StyledCard>
            <Statistic
              title="正确率"
              value={accuracy}
              suffix="%"
              prefix={<TrophyOutlined />}
              valueStyle={{ color: accuracy >= 80 ? '#3f8600' : '#cf1322' }}
            />
          </StyledCard>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StyledCard>
            <Statistic
              title="学习天数"
              value={stats.studyDays}
              prefix={<ClockCircleOutlined />}
            />
          </StyledCard>
        </Col>
      </Row>

      {/* 学习进度 */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} md={12}>
          <StyledCard title="学习进度">
            <Progress
              percent={progress}
              status="active"
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
            />
            <div style={{ marginTop: 8, color: '#666' }}>
              已完成 {stats.answeredQuestions} / {stats.totalQuestions} 题
            </div>
          </StyledCard>
        </Col>
        <Col xs={24} md={12}>
          <StyledCard title="学习时长">
            <Statistic
              title="累计学习时间"
              value={stats.studyTime}
              suffix="小时"
              prefix={<ClockCircleOutlined />}
            />
            <div style={{ marginTop: 8 }}>
              <Tag color="blue">连续学习 {stats.consecutiveDays} 天</Tag>
            </div>
          </StyledCard>
        </Col>
      </Row>

      {/* 学习趋势图 */}
      <StyledCard title="学习趋势" style={{ marginBottom: 24 }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dailyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="score" 
              stroke="#1890ff" 
              strokeWidth={2}
              name="得分"
            />
          </LineChart>
        </ResponsiveContainer>
      </StyledCard>

      {/* 分类统计 */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} md={12}>
          <StyledCard title="知识点分布">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </StyledCard>
        </Col>
        <Col xs={24} md={12}>
          <StyledCard title="考试记录">
            <div style={{ maxHeight: 300, overflowY: 'auto' }}>
              {examRecords.map((record, index) => (
                <div key={index} style={{ 
                  padding: '12px 0', 
                  borderBottom: index < examRecords.length - 1 ? '1px solid #f0f0f0' : 'none' 
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 'bold' }}>{record.date}</div>
                      <div style={{ color: '#666', fontSize: '12px' }}>
                        正确: {record.correct}/{record.total}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ 
                        fontSize: '18px', 
                        fontWeight: 'bold',
                        color: record.score >= 70 ? '#52c41a' : '#ff4d4f'
                      }}>
                        {record.score}分
                      </div>
                      <Tag color={record.score >= 70 ? 'green' : 'red'}>
                        {record.score >= 70 ? '通过' : '未通过'}
                      </Tag>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </StyledCard>
        </Col>
      </Row>

      {/* 学习建议 */}
      <StyledCard title="学习建议">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <div style={{ padding: '16px 0' }}>
              <Title level={5}>📈 学习趋势</Title>
              <Paragraph>
                您的学习趋势良好，建议继续保持每日学习习惯，稳步提升成绩。
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div style={{ padding: '16px 0' }}>
              <Title level={5}>🎯 重点突破</Title>
              <Paragraph>
                重点关注"安全"和"数据库"知识点，这些是您的薄弱环节。
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div style={{ padding: '16px 0' }}>
              <Title level={5}>⏰ 时间管理</Title>
              <Paragraph>
                建议每天保持2-3小时的学习时间，保持学习的连续性。
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div style={{ padding: '16px 0' }}>
              <Title level={5}>📊 目标设定</Title>
              <Paragraph>
                设定每周学习目标，如完成100道题目，正确率达到85%以上。
              </Paragraph>
            </div>
          </Col>
        </Row>
      </StyledCard>
    </div>
  );
};

export default Statistics; 
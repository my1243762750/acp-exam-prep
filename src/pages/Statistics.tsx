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
import { getStats, getAnswers, getExamHistory } from '../utils/storage';
import { questions, categories } from '../data/questions';

const { Title, Paragraph } = Typography;

const StyledCard = styled(Card)`
  margin-bottom: var(--mei-spacing-stack-md);
  border-radius: var(--mei-radius-lg);
  box-shadow: var(--mei-shadow-sm);
  border: 1px solid var(--mei-theme-border-default);
  background: var(--mei-theme-bg-elevated);
`;

const chartColors = [
  'var(--mei-color-error-base)',
  'var(--mei-color-blue-500)',
  'var(--mei-color-success-base)',
  'var(--mei-color-warning-base)',
  'var(--mei-color-purple-500)',
  'var(--mei-color-primary-500)',
  'var(--mei-color-blue-700)',
  'var(--mei-color-neutral-500)',
];

const Statistics: React.FC = () => {
  const stats = getStats();
  const answers = getAnswers();
  const examHistory = getExamHistory();

  const accuracy = stats.answeredQuestions > 0
    ? Math.round((stats.correctAnswers / stats.answeredQuestions) * 100)
    : 0;
  const progress = stats.totalQuestions > 0
    ? Math.round((stats.answeredQuestions / stats.totalQuestions) * 100)
    : 0;

  const hasData = stats.answeredQuestions > 0;

  const dailyMap = new Map<string, { questions: number; correct: number }>();
  Object.entries(answers).forEach(([, v]) => {
    const d = new Date(v.timestamp);
    const key = `${d.getMonth() + 1}-${String(d.getDate()).padStart(2, '0')}`;
    const entry = dailyMap.get(key) || { questions: 0, correct: 0 };
    entry.questions += 1;
    if (v.correct) entry.correct += 1;
    dailyMap.set(key, entry);
  });
  const dailyData = Array.from(dailyMap.entries())
    .map(([date, data]) => ({
      date,
      questions: data.questions,
      correct: data.correct,
      score: Math.round((data.correct / data.questions) * 100),
    }))
    .sort((a, b) => a.date.localeCompare(b.date));

  const categoryCounts = new Map<string, number>();
  Object.entries(answers).forEach(([qId]) => {
    const q = questions.find(item => item.id === Number(qId));
    if (q && q.category) {
      categoryCounts.set(q.category, (categoryCounts.get(q.category) || 0) + 1);
    }
  });
  const categoryData = categories
    .filter(cat => (categoryCounts.get(cat) || 0) > 0)
    .map((name, i) => ({
      name,
      value: categoryCounts.get(name) || 0,
      color: chartColors[i % chartColors.length],
    }));

  return (
    <div>
      <Title level={2} style={{ color: 'var(--mei-theme-text-primary)' }}>学习统计</Title>
      <Paragraph style={{ color: 'var(--mei-theme-text-secondary)', marginBottom: 24 }}>
        查看您的学习进度和成绩分析
      </Paragraph>

      <Row gutter={[24, 24]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} md={6}>
          <StyledCard>
            <Statistic
              title={<span style={{ fontWeight: 600 }}>总题数</span>}
              value={stats.totalQuestions}
              prefix={<BookOutlined style={{ color: 'var(--mei-color-primary-500)' }} />}
              valueStyle={{ fontWeight: 700 }}
            />
          </StyledCard>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StyledCard>
            <Statistic
              title={<span style={{ fontWeight: 600 }}>已答题数</span>}
              value={stats.answeredQuestions}
              prefix={<CheckCircleOutlined style={{ color: 'var(--mei-color-blue-500)' }} />}
              valueStyle={{ fontWeight: 700 }}
            />
          </StyledCard>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StyledCard>
            <Statistic
              title={<span style={{ fontWeight: 600 }}>正确率</span>}
              value={hasData ? accuracy : 0}
              suffix="%"
              prefix={<TrophyOutlined style={{ color: 'var(--mei-color-warning-base)' }} />}
              valueStyle={{ color: hasData && accuracy >= 80 ? 'var(--mei-color-success-base)' : 'var(--mei-color-error-base)', fontWeight: 800 }}
            />
          </StyledCard>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StyledCard>
            <Statistic
              title={<span style={{ fontWeight: 600 }}>学习天数</span>}
              value={stats.studyDays}
              prefix={<ClockCircleOutlined style={{ color: 'var(--mei-color-purple-500)' }} />}
              valueStyle={{ fontWeight: 700 }}
            />
          </StyledCard>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginBottom: 24 }}>
        <Col xs={24} md={12}>
          <StyledCard title={<span style={{ fontWeight: 700 }}>学习进度</span>}>
            <div style={{ padding: '8px 0' }}>
              {hasData ? (
                <>
                  <Progress
                    percent={progress}
                    status="active"
                    strokeColor="var(--mei-color-primary-500)"
                    strokeWidth={12}
                  />
                  <div style={{ marginTop: 12, color: 'var(--mei-theme-text-secondary)', fontWeight: 500 }}>
                    已完成 {stats.answeredQuestions} / {stats.totalQuestions} 题
                  </div>
                </>
              ) : (
                <Paragraph style={{ color: 'var(--mei-theme-text-secondary)', margin: 0 }}>
                  还没有答题记录
                </Paragraph>
              )}
            </div>
          </StyledCard>
        </Col>
        <Col xs={24} md={12}>
          <StyledCard title={<span style={{ fontWeight: 700 }}>错题统计</span>}>
            <div style={{ padding: '8px 0' }}>
              {hasData ? (
                <>
                  <Progress
                    percent={stats.answeredQuestions > 0 ? Math.round((stats.wrongAnswers / stats.answeredQuestions) * 100) : 0}
                    status="exception"
                    strokeColor="var(--mei-color-error-base)"
                    strokeWidth={12}
                    format={() => `${stats.wrongAnswers} 题`}
                  />
                  <div style={{ marginTop: 12, color: 'var(--mei-theme-text-secondary)', fontWeight: 500 }}>
                    错题 {stats.wrongAnswers} 题，正确 {stats.correctAnswers} 题
                  </div>
                </>
              ) : (
                <Paragraph style={{ color: 'var(--mei-theme-text-secondary)', margin: 0 }}>
                  还没有答题记录
                </Paragraph>
              )}
            </div>
          </StyledCard>
        </Col>
      </Row>

      {dailyData.length > 0 && (
        <StyledCard title={<span style={{ fontWeight: 700 }}>学习趋势</span>} style={{ marginBottom: 24 }}>
          <div style={{ padding: '16px 0' }}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--mei-theme-border-default)" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: 'var(--mei-theme-text-tertiary)' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--mei-theme-text-tertiary)' }} domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: 'var(--mei-radius-md)', 
                    border: 'none', 
                    boxShadow: 'var(--mei-shadow-md)',
                    background: 'var(--mei-theme-bg-elevated)'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="var(--mei-color-primary-500)" 
                  strokeWidth={3}
                  dot={{ r: 4, fill: 'var(--mei-color-primary-500)', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                  name="得分"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </StyledCard>
      )}

      <Row gutter={[24, 24]} style={{ marginBottom: 24 }}>
        <Col xs={24} md={12}>
          <StyledCard title={<span style={{ fontWeight: 700 }}>知识点分布</span>}>
            {categoryData.length > 0 ? (
              <div style={{ padding: '16px 0' }}>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        borderRadius: 'var(--mei-radius-md)', 
                        border: 'none', 
                        boxShadow: 'var(--mei-shadow-md)' 
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginTop: 16 }}>
                  {categoryData.map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: item.color }}></div>
                      <span style={{ fontSize: 12, color: 'var(--mei-theme-text-secondary)' }}>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--mei-theme-text-tertiary)' }}>
                答题后这里会展示知识点分布
              </div>
            )}
          </StyledCard>
        </Col>
        <Col xs={24} md={12}>
          <StyledCard title={<span style={{ fontWeight: 700 }}>考试记录</span>}>
            {examHistory.length > 0 ? (
              <div style={{ maxHeight: 340, overflowY: 'auto', paddingRight: 8 }}>
                {examHistory.map((record, index) => (
                  <div key={index} style={{ 
                    padding: '16px 0', 
                    borderBottom: index < examHistory.length - 1 ? '1px solid var(--mei-theme-border-default)' : 'none' 
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 16 }}>{record.date}</div>
                        <div style={{ color: 'var(--mei-theme-text-secondary)', fontSize: 13, marginTop: 4 }}>
                          正确: {record.correct}/{record.total}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ 
                          fontSize: 22, 
                          fontWeight: 800,
                          color: record.score >= 80 ? 'var(--mei-color-success-base)' : 'var(--mei-color-error-base)'
                        }}>
                          {record.score}分
                        </div>
                        <Tag 
                          color={record.score >= 80 ? 'green' : 'red'}
                          style={{ borderRadius: 'var(--mei-radius-full)', marginTop: 4 }}
                        >
                          {record.score >= 80 ? '通过' : '未通过'}
                        </Tag>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--mei-theme-text-tertiary)' }}>
                完成模拟考试后会在这里展示记录
              </div>
            )}
          </StyledCard>
        </Col>
      </Row>

      {hasData && (
        <StyledCard title={<span style={{ fontWeight: 700 }}>学习建议</span>}>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <div style={{ padding: '8px 0' }}>
                <Title level={5} style={{ color: 'var(--mei-color-primary-600)' }}>学习趋势</Title>
                <Paragraph style={{ color: 'var(--mei-theme-text-secondary)' }}>
                  您的学习趋势良好，建议继续保持每日学习习惯，稳步提升成绩。
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ padding: '8px 0' }}>
                <Title level={5} style={{ color: 'var(--mei-color-primary-600)' }}>重点突破</Title>
                <Paragraph style={{ color: 'var(--mei-theme-text-secondary)' }}>
                  重点关注错题知识点，加强薄弱环节的学习。
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ padding: '8px 0' }}>
                <Title level={5} style={{ color: 'var(--mei-color-primary-600)' }}>时间管理</Title>
                <Paragraph style={{ color: 'var(--mei-theme-text-secondary)' }}>
                  建议每天保持一定学习时间，保持学习的连续性。
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ padding: '8px 0' }}>
                <Title level={5} style={{ color: 'var(--mei-color-primary-600)' }}>目标设定</Title>
                <Paragraph style={{ color: 'var(--mei-theme-text-secondary)' }}>
                  设定每周学习目标，逐步完成所有知识点。
                </Paragraph>
              </div>
            </Col>
          </Row>
        </StyledCard>
      )}
    </div>
  );
};

export default Statistics;

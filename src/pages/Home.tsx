import React from 'react';
import { Row, Col, Card, Statistic, Progress, Typography } from 'antd';
import { 
  BookOutlined, 
  FileTextOutlined, 
  ExclamationCircleOutlined,
  TrophyOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getStats } from '../utils/storage';

const { Title, Paragraph } = Typography;

const statColors = [
  { color: 'var(--mei-color-blue-600)', bg: 'var(--mei-color-blue-50)' },
  { color: 'var(--mei-color-primary-600)', bg: 'var(--mei-color-primary-50)' },
  { color: 'var(--mei-color-primary-500)', bg: 'var(--mei-color-primary-50)' },
  { color: 'var(--mei-color-blue-500)', bg: 'var(--mei-color-blue-50)' }
];

const StatCard = styled(Card)<{ bgcolor: string }>`
  margin-bottom: var(--mei-spacing-stack-md);
  border-radius: var(--mei-radius-lg);
  border: 1px solid var(--mei-theme-border-default);
  box-shadow: var(--mei-shadow-sm);
  background: ${(props) => props.bgcolor};
  transition: box-shadow var(--mei-motion-fast) var(--mei-ease-out);
  
  &:hover {
    box-shadow: var(--mei-shadow-md);
  }
  .ant-card-body {
    padding: var(--mei-spacing-inset-lg);
  }
`;

const StatIcon = styled.span<{ color: string }>`
  font-size: 32px;
  color: ${(props) => props.color};
  margin-right: var(--mei-spacing-inline-sm);
`;

const StatValue = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-weight: var(--mei-font-weight-bold);
  font-size: var(--mei-font-size-2xl);
`;

const QuickActionCard = styled(Card)<{ basecolor: string; lightcolor: string }>`
  text-align: center;
  cursor: pointer;
  border-radius: var(--mei-radius-xl);
  border: 1px solid var(--mei-theme-border-default);
  background: var(--mei-theme-bg-elevated);
  overflow: hidden;
  position: relative;
  box-shadow: var(--mei-shadow-sm);
  transition: box-shadow var(--mei-motion-fast) var(--mei-ease-out),
              background-color var(--mei-motion-fast) var(--mei-ease-out),
              border-color var(--mei-motion-fast) var(--mei-ease-out);

  &:hover {
    border-color: ${(props) => props.basecolor};
    box-shadow: var(--mei-shadow-md);
    background: ${(props) => props.lightcolor};

    .icon-wrapper {
      color: ${(props) => props.basecolor} !important;
    }
    .quick-title {
      color: ${(props) => props.basecolor} !important;
    }
    .quick-desc {
      color: var(--mei-theme-text-primary) !important;
    }
  }
  .ant-card-body {
    padding: var(--mei-spacing-inset-xl);
    position: relative;
    z-index: 1;
  }
`;

const IconWrapper = styled.div<{ color: string }>`
  font-size: 56px;
  margin-bottom: var(--mei-spacing-stack-md);
  color: ${(props) => props.color};
  transition: color var(--mei-motion-fast) var(--mei-ease-out);
`;

const Home: React.FC = () => {
  const navigate = useNavigate();
  const stats = getStats();

  const accuracy = stats.answeredQuestions > 0
    ? Math.round((stats.correctAnswers / stats.answeredQuestions) * 100)
    : 0;
  const progress = stats.totalQuestions > 0
    ? Math.round((stats.answeredQuestions / stats.totalQuestions) * 100)
    : 0;

  const hasData = stats.answeredQuestions > 0;

  const quickActions = [
    {
      title: '开始练习',
      description: '按分类练习题目',
      icon: <BookOutlined />,
      path: '/practice',
      basecolor: 'var(--mei-color-blue-500)',
      lightcolor: 'var(--mei-color-blue-50)'
    },
    {
      title: '模拟考试',
      description: '全真模拟考试环境',
      icon: <FileTextOutlined />,
      path: '/exam',
      basecolor: 'var(--mei-color-primary-500)',
      lightcolor: 'var(--mei-color-primary-50)'
    },
    {
      title: '错题复习',
      description: '重点复习错题',
      icon: <ExclamationCircleOutlined />,
      path: '/review',
      basecolor: 'var(--mei-color-error-base)',
      lightcolor: 'var(--mei-color-error-light)'
    },
    {
      title: '学习统计',
      description: '查看学习进度',
      icon: <TrophyOutlined />,
      path: '/statistics',
      basecolor: 'var(--mei-color-primary-400)',
      lightcolor: 'var(--mei-color-primary-50)'
    }
  ];

  return (
    <div>
      <Title level={2} style={{ color: 'var(--mei-theme-text-primary)' }}>欢迎使用ACP考试助手</Title>
      <Paragraph style={{ color: 'var(--mei-theme-text-secondary)', marginBottom: 32 }}>
        阿里云ACP认证考试备考平台，助您高效备考，轻松通过考试
      </Paragraph>

      <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
        <Col xs={24} sm={12} md={6}>
          <StatCard bgcolor={statColors[0].bg}>
            <Statistic
              title={<span style={{ color: statColors[0].color, fontWeight: 600 }}>总题数</span>}
              valueRender={() => <><StatIcon color={statColors[0].color}><BookOutlined /></StatIcon><StatValue color={statColors[0].color}>{stats.totalQuestions}</StatValue></>}
            />
          </StatCard>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard bgcolor={statColors[1].bg}>
            <Statistic
              title={<span style={{ color: statColors[1].color, fontWeight: 600 }}>已答题数</span>}
              valueRender={() => <><StatIcon color={statColors[1].color}><CheckCircleOutlined /></StatIcon><StatValue color={statColors[1].color}>{stats.answeredQuestions}</StatValue></>}
            />
          </StatCard>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard bgcolor={statColors[2].bg}>
            <Statistic
              title={<span style={{ color: statColors[2].color, fontWeight: 600 }}>正确率</span>}
              valueRender={() => <><StatIcon color={statColors[2].color}><TrophyOutlined /></StatIcon><StatValue color={statColors[2].color}>{hasData ? `${accuracy}%` : '--'}</StatValue></>}
            />
          </StatCard>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard bgcolor={statColors[3].bg}>
            <Statistic
              title={<span style={{ color: statColors[3].color, fontWeight: 600 }}>学习天数</span>}
              valueRender={() => <><StatIcon color={statColors[3].color}><ClockCircleOutlined /></StatIcon><StatValue color={statColors[3].color}>{stats.studyDays}</StatValue></>}
            />
          </StatCard>
        </Col>
      </Row>

      <Card title={<span style={{ fontWeight: 700 }}>学习进度</span>} style={{ marginBottom: 32 }}>
        {hasData ? (
          <>
            <Progress
              percent={progress}
              status="active"
              strokeColor={{
                '0%': 'var(--mei-color-blue-400)',
                '100%': 'var(--mei-color-primary-600)',
              }}
              strokeWidth={12}
            />
            <div style={{ marginTop: 12, color: 'var(--mei-theme-text-secondary)', fontWeight: 500 }}>
              已完成 {stats.answeredQuestions} / {stats.totalQuestions} 题
            </div>
          </>
        ) : (
          <Paragraph style={{ color: 'var(--mei-theme-text-secondary)', margin: 0 }}>
            还没有答题记录，去练习模式开始学习吧！
          </Paragraph>
        )}
      </Card>

      <Title level={3} style={{ marginBottom: 24, color: 'var(--mei-theme-text-primary)' }}>快速开始</Title>
      <Row gutter={[24, 24]}>
        {quickActions.map((action, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <QuickActionCard 
              onClick={() => navigate(action.path)}
              basecolor={action.basecolor}
              lightcolor={action.lightcolor}
            >
              <IconWrapper className="icon-wrapper" color={action.basecolor}>
                {action.icon}
              </IconWrapper>
              <Title level={4} className="quick-title" style={{ color: action.basecolor, marginBottom: 12, transition: 'all 0.3s' }}>{action.title}</Title>
              <Paragraph className="quick-desc" style={{ color: 'var(--mei-theme-text-secondary)', margin: 0 }}>{action.description}</Paragraph>
            </QuickActionCard>
          </Col>
        ))}
      </Row>

      <Card title={<span style={{ fontWeight: 700 }}>学习建议</span>} style={{ marginTop: 32 }}>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <div style={{ padding: '8px 0' }}>
              <Title level={5} style={{ color: 'var(--mei-color-primary-600)' }}>系统学习</Title>
              <Paragraph style={{ color: 'var(--mei-theme-text-secondary)' }}>
                建议按照知识点分类进行系统学习，先掌握基础概念，再深入实践应用。
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div style={{ padding: '8px 0' }}>
              <Title level={5} style={{ color: 'var(--mei-color-primary-600)' }}>重点突破</Title>
              <Paragraph style={{ color: 'var(--mei-theme-text-secondary)' }}>
                重点关注错题和薄弱环节，通过反复练习巩固知识点。
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div style={{ padding: '8px 0' }}>
              <Title level={5} style={{ color: 'var(--mei-color-primary-600)' }}>模拟训练</Title>
              <Paragraph style={{ color: 'var(--mei-theme-text-secondary)' }}>
                定期进行模拟考试，熟悉考试节奏和题型分布。
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div style={{ padding: '8px 0' }}>
              <Title level={5} style={{ color: 'var(--mei-color-primary-600)' }}>数据分析</Title>
              <Paragraph style={{ color: 'var(--mei-theme-text-secondary)' }}>
                关注学习统计数据，及时调整学习策略和重点。
              </Paragraph>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Home;

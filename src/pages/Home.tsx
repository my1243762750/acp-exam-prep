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

const { Title, Paragraph } = Typography;

const StyledCard = styled(Card)`
  margin-bottom: 16px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
  
  .ant-card-body {
    padding: 24px;
  }
`;

const QuickActionCard = styled(Card)`
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    
    &::before {
      opacity: 1;
    }
  }
  
  .ant-card-body {
    padding: 32px 24px;
    position: relative;
    z-index: 1;
  }
`;

const IconWrapper = styled.div`
  font-size: 56px;
  margin-bottom: 20px;
  color: white;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
`;

const Home: React.FC = () => {
  const navigate = useNavigate();

  // 模拟数据
  const stats = {
    totalQuestions: 506,
    answeredQuestions: 320,
    correctAnswers: 256,
    wrongAnswers: 64,
    studyDays: 15,
    averageScore: 80
  };

  const accuracy = Math.round((stats.correctAnswers / stats.answeredQuestions) * 100);
  const progress = Math.round((stats.answeredQuestions / stats.totalQuestions) * 100);

  const quickActions = [
    {
      title: '开始练习',
      description: '按分类练习题目',
      icon: <BookOutlined />,
      path: '/practice',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: '模拟考试',
      description: '全真模拟考试环境',
      icon: <FileTextOutlined />,
      path: '/exam',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: '错题复习',
      description: '重点复习错题',
      icon: <ExclamationCircleOutlined />,
      path: '/review',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: '学习统计',
      description: '查看学习进度',
      icon: <TrophyOutlined />,
      path: '/statistics',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  return (
    <div>
      <Title level={2}>欢迎使用ACP考试助手</Title>
      <Paragraph type="secondary">
        阿里云ACP认证考试备考平台，助您高效备考，轻松通过考试
      </Paragraph>

      {/* 学习统计 */}
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
      <StyledCard title="学习进度" style={{ marginBottom: 24 }}>
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

      {/* 快速入口 */}
      <Title level={3}>快速开始</Title>
      <Row gutter={[16, 16]}>
        {quickActions.map((action, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <QuickActionCard
              onClick={() => navigate(action.path)}
              style={{ background: action.gradient }}
            >
              <IconWrapper>
                {action.icon}
              </IconWrapper>
              <Title level={4} style={{ color: 'white', marginBottom: 8 }}>{action.title}</Title>
              <Paragraph style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>{action.description}</Paragraph>
            </QuickActionCard>
          </Col>
        ))}
      </Row>

      {/* 学习建议 */}
      <StyledCard title="学习建议" style={{ marginTop: 24 }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <div style={{ padding: '16px 0' }}>
              <Title level={5}>📚 系统学习</Title>
              <Paragraph>
                建议按照知识点分类进行系统学习，先掌握基础概念，再深入实践应用。
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div style={{ padding: '16px 0' }}>
              <Title level={5}>🎯 重点突破</Title>
              <Paragraph>
                重点关注错题和薄弱环节，通过反复练习巩固知识点。
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div style={{ padding: '16px 0' }}>
              <Title level={5}>⏰ 模拟训练</Title>
              <Paragraph>
                定期进行模拟考试，熟悉考试节奏和题型分布。
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div style={{ padding: '16px 0' }}>
              <Title level={5}>📊 数据分析</Title>
              <Paragraph>
                关注学习统计数据，及时调整学习策略和重点。
              </Paragraph>
            </div>
          </Col>
        </Row>
      </StyledCard>
    </div>
  );
};

export default Home; 
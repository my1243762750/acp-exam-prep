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

const QuickActionCard = styled(Card)<{ gradient: string; bordercolor: string; hovercolor: string }>`
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 16px;
  border: 2px solid ${(props) => props.bordercolor};
  background: #fff;
  color: #222;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 16px rgba(24, 144, 255, 0.08);
  &:hover {
    border-color: ${(props) => props.bordercolor};
    box-shadow: 0 8px 32px rgba(24, 144, 255, 0.15);
    background: ${(props) => props.gradient};
    .icon-wrapper {
      color: ${(props) => props.hovercolor} !important;
      filter: drop-shadow(0 2px 8px ${(props) => props.hovercolor}33);
    }
    .quick-title, .quick-desc {
      color: ${(props) => props.hovercolor} !important;
    }
  }
  .ant-card-body {
    padding: 32px 24px;
    position: relative;
    z-index: 1;
  }
`;

const IconWrapper = styled.div<{ color: string }>`
  font-size: 56px;
  margin-bottom: 20px;
  color: ${(props) => props.color};
  filter: drop-shadow(0 2px 4px ${(props) => props.color}33);
  transition: color 0.3s;
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

  // 每个卡片主色
  const quickActions = [
    {
      title: '开始练习',
      description: '按分类练习题目',
      icon: <BookOutlined />,
      path: '/practice',
      gradient: 'linear-gradient(135deg, #e3f0ff 0%, #cbe6ff 100%)',
      color: '#1890ff',
      bordercolor: '#1890ff',
      hovercolor: '#1765ad'
    },
    {
      title: '模拟考试',
      description: '全真模拟考试环境',
      icon: <FileTextOutlined />,
      path: '/exam',
      gradient: 'linear-gradient(135deg, #fff2e3 0%, #ffe6cb 100%)',
      color: '#ff7e5f',
      bordercolor: '#ff7e5f',
      hovercolor: '#d46b08'
    },
    {
      title: '错题复习',
      description: '重点复习错题',
      icon: <ExclamationCircleOutlined />,
      path: '/review',
      gradient: 'linear-gradient(135deg, #e3fff6 0%, #cbffe6 100%)',
      color: '#43e97b',
      bordercolor: '#43e97b',
      hovercolor: '#389e0d'
    },
    {
      title: '学习统计',
      description: '查看学习进度',
      icon: <TrophyOutlined />,
      path: '/statistics',
      gradient: 'linear-gradient(135deg, #fffbe3 0%, #fff6cb 100%)',
      color: '#f7971e',
      bordercolor: '#f7971e',
      hovercolor: '#ad6800'
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
              gradient={action.gradient}
              bordercolor={action.bordercolor}
              hovercolor={action.hovercolor}
            >
              <IconWrapper className="icon-wrapper" color={action.color}>
                {action.icon}
              </IconWrapper>
              <Title level={4} className="quick-title" style={{ color: action.color, marginBottom: 8 }}>{action.title}</Title>
              <Paragraph className="quick-desc" style={{ color: '#666', margin: 0 }}>{action.description}</Paragraph>
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
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

const statColors = [
  { color: '#1890ff', bg: 'linear-gradient(135deg, #e3f0ff 0%, #cbe6ff 100%)' }, // 蓝
  { color: '#36cfc9', bg: 'linear-gradient(135deg, #e6fffb 0%, #b5f5ec 100%)' }, // 青
  { color: '#faad14', bg: 'linear-gradient(135deg, #fffbe6 0%, #ffe7ba 100%)' }, // 橙
  { color: '#9254de', bg: 'linear-gradient(135deg, #f9f0ff 0%, #d3adf7 100%)' }  // 紫
];

const StatCard = styled(Card)<{ bgcolor: string }>`
  margin-bottom: 16px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  background: ${(props) => props.bgcolor};
  .ant-card-body {
    padding: 24px;
  }
`;

const StatIcon = styled.span<{ color: string }>`
  font-size: 32px;
  color: ${(props) => props.color};
  margin-right: 8px;
`;

const StatValue = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-weight: bold;
`;

const QuickActionCard = styled(Card)<{ hovercolor: string }>`
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 16px;
  border: 2px solid #1890ff;
  background: #fff;
  color: #222;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 16px rgba(24, 144, 255, 0.08);
  &:hover {
    border-color: ${(props) => props.hovercolor};
    box-shadow: 0 8px 32px rgba(24, 144, 255, 0.15);
    background: linear-gradient(135deg, #e3f0ff 0%, #cbe6ff 100%);
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

  const quickActions = [
    {
      title: '开始练习',
      description: '按分类练习题目',
      icon: <BookOutlined />,
      path: '/practice',
      hovercolor: '#1765ad'
    },
    {
      title: '模拟考试',
      description: '全真模拟考试环境',
      icon: <FileTextOutlined />,
      path: '/exam',
      hovercolor: '#1765ad'
    },
    {
      title: '错题复习',
      description: '重点复习错题',
      icon: <ExclamationCircleOutlined />,
      path: '/review',
      hovercolor: '#1765ad'
    },
    {
      title: '学习统计',
      description: '查看学习进度',
      icon: <TrophyOutlined />,
      path: '/statistics',
      hovercolor: '#1765ad'
    }
  ];

  return (
    <div>
      <Title level={2}>欢迎使用ACP考试助手</Title>
      <Paragraph type="secondary">
        阿里云ACP认证考试备考平台，助您高效备考，轻松通过考试
      </Paragraph>

      {/* 统计卡片 */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} md={6}>
          <StatCard bgcolor={statColors[0].bg}>
            <Statistic
              title="总题数"
              valueRender={() => <><StatIcon color={statColors[0].color}><BookOutlined /></StatIcon><StatValue color={statColors[0].color}>{stats.totalQuestions}</StatValue></>}
            />
          </StatCard>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard bgcolor={statColors[1].bg}>
            <Statistic
              title="已答题数"
              valueRender={() => <><StatIcon color={statColors[1].color}><CheckCircleOutlined /></StatIcon><StatValue color={statColors[1].color}>{stats.answeredQuestions}</StatValue></>}
            />
          </StatCard>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard bgcolor={statColors[2].bg}>
            <Statistic
              title="正确率"
              valueRender={() => <><StatIcon color={statColors[2].color}><TrophyOutlined /></StatIcon><StatValue color={statColors[2].color}>{accuracy}%</StatValue></>}
            />
          </StatCard>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard bgcolor={statColors[3].bg}>
            <Statistic
              title="学习天数"
              valueRender={() => <><StatIcon color={statColors[3].color}><ClockCircleOutlined /></StatIcon><StatValue color={statColors[3].color}>{stats.studyDays}</StatValue></>}
            />
          </StatCard>
        </Col>
      </Row>

      {/* 学习进度 */}
      <Card title="学习进度" style={{ marginBottom: 24, borderRadius: 12 }}>
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
      </Card>

      {/* 快速入口 */}
      <Title level={3}>快速开始</Title>
      <Row gutter={[16, 16]}>
        {quickActions.map((action, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <QuickActionCard
              onClick={() => navigate(action.path)}
              hovercolor={action.hovercolor}
            >
              <IconWrapper className="icon-wrapper" color="#1890ff">
                {action.icon}
              </IconWrapper>
              <Title level={4} className="quick-title" style={{ color: '#1890ff', marginBottom: 8 }}>{action.title}</Title>
              <Paragraph className="quick-desc" style={{ color: '#666', margin: 0 }}>{action.description}</Paragraph>
            </QuickActionCard>
          </Col>
        ))}
      </Row>

      {/* 学习建议 */}
      <Card title="学习建议" style={{ marginTop: 24, borderRadius: 12 }}>
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
      </Card>
    </div>
  );
};

export default Home; 
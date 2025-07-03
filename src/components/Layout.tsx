import React from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  BookOutlined,
  FileTextOutlined,
  ExclamationCircleOutlined,
  BarChartOutlined
} from '@ant-design/icons';
import styled from 'styled-components';

const { Header, Sider, Content } = AntLayout;

const StyledLayout = styled(AntLayout)`
  min-height: 100vh;
`;

const StyledHeader = styled(Header)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  padding: 0 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const StyledSider = styled(Sider)`
  background: linear-gradient(180deg, #2c3e50 0%, #34495e 100%);
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);
`;

const StyledContent = styled(Content)`
  margin: 24px;
  padding: 32px;
  background: #f8fafc;
  border-radius: 16px;
  min-height: calc(100vh - 48px);
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const Logo = styled.div`
  color: white;
  font-size: 22px;
  font-weight: 700;
  margin-right: 48px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
`;

const menuItems = [
  {
    key: '/',
    icon: <HomeOutlined />,
    label: '首页',
  },
  {
    key: '/practice',
    icon: <BookOutlined />,
    label: '练习模式',
  },
  {
    key: '/exam',
    icon: <FileTextOutlined />,
    label: '模拟考试',
  },
  {
    key: '/review',
    icon: <ExclamationCircleOutlined />,
    label: '错题复习',
  },
  {
    key: '/statistics',
    icon: <BarChartOutlined />,
    label: '学习统计',
  },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <StyledLayout>
      <StyledHeader>
        <Logo>ACP考试助手</Logo>
      </StyledHeader>
      <AntLayout>
        <StyledSider width={200}>
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            style={{ height: '100%', borderRight: 0 }}
            items={menuItems}
            onClick={handleMenuClick}
            theme="dark"
          />
        </StyledSider>
        <StyledContent>
          {children}
        </StyledContent>
      </AntLayout>
    </StyledLayout>
  );
};

export default Layout; 
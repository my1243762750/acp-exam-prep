import React from 'react';
import { Layout, Menu, Avatar, Breadcrumb, Button } from 'antd';
import { BookOutlined, FileTextOutlined, TrophyOutlined, BarChartOutlined, ExclamationCircleOutlined, HomeTwoTone, MenuUnfoldOutlined, MenuFoldOutlined, SmileTwoTone, UnorderedListOutlined } from '@ant-design/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const { Header, Sider, Content } = Layout;

// SVG考试图标
const ExamLogo = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="28" height="24" rx="4" fill="#1890ff"/>
    <rect x="8" y="10" width="20" height="16" rx="2" fill="#fff"/>
    <rect x="12" y="14" width="12" height="2" rx="1" fill="#1890ff"/>
    <rect x="12" y="18" width="8" height="2" rx="1" fill="#1890ff"/>
  </svg>
);

const LogoBar = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  justify-content: center;
`;

const StyledSider = styled(Sider)`
  background: #f7f9fa !important;
  border-right: 1px solid #e6e6e6;
  min-width: 180px !important;
  max-width: 180px !important;
  &.ant-layout-sider-collapsed {
    min-width: 48px !important;
    max-width: 48px !important;
  }
`;

const StyledHeader = styled(Header)`
  background: linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%) !important;
  color: #fff;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.08);
  display: flex;
  align-items: center;
  height: 64px !important;
  justify-content: space-between;
  padding: 0 32px;
`;

const StyledContent = styled(Content)`
  background: #f7f9fa;
  min-height: 100vh;
  padding: 32px 40px 40px 40px;
`;

const menuItems = [
  { key: '/', icon: <BookOutlined />, label: <Link to="/">首页</Link> },
  { key: '/practice', icon: <FileTextOutlined />, label: <Link to="/practice">练习模式</Link> },
  { key: '/exam', icon: <TrophyOutlined />, label: <Link to="/exam">模拟考试</Link> },
  { key: '/review', icon: <ExclamationCircleOutlined />, label: <Link to="/review">错题复习</Link> },
  { key: '/statistics', icon: <BarChartOutlined />, label: <Link to="/statistics">学习统计</Link> },
  { key: '/preview', icon: <UnorderedListOutlined />, label: <Link to="/preview">题库预览</Link> },
];

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  // 面包屑
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">首页</Link>
    </Breadcrumb.Item>,
    ...pathSnippets.map((snippet, idx) => {
      const url = `/${pathSnippets.slice(0, idx + 1).join('/')}`;
      let name = '';
      switch (snippet) {
        case 'practice': name = '练习模式'; break;
        case 'exam': name = '模拟考试'; break;
        case 'review': name = '错题复习'; break;
        case 'statistics': name = '学习统计'; break;
        default: name = snippet;
      }
      return <Breadcrumb.Item key={url}><Link to={url}>{name}</Link></Breadcrumb.Item>;
    })
  ];
  // 折叠按钮
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <StyledSider
        width={180}
        collapsedWidth={48}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        trigger={null}
      >
        <LogoBar>
          <ExamLogo />
        </LogoBar>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          style={{ border: 'none', background: 'transparent', marginTop: 16 }}
          items={menuItems}
        />
      </StyledSider>
      <Layout>
        <StyledHeader>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Button type="text" style={{ color: '#fff', fontSize: 20 }} onClick={() => setCollapsed(c => !c)}>
              {collapsed ? <MenuUnfoldOutlined style={{ fontSize: 22 }} /> : <MenuFoldOutlined style={{ fontSize: 22 }} />}
            </Button>
            <Breadcrumb separator="/" style={{ color: '#fff', fontSize: 16 }}>
              {breadcrumbItems}
            </Breadcrumb>
          </div>
          <div>
            <Avatar size={40} icon={<SmileTwoTone twoToneColor="#1890ff,#36cfc9" style={{ fontSize: 32 }} />} style={{ background: 'transparent' }} />
          </div>
        </StyledHeader>
        <StyledContent>{children}</StyledContent>
      </Layout>
    </Layout>
  );
};

export default MainLayout; 
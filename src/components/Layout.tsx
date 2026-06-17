import React from 'react';
import { Layout, Menu, Avatar, Breadcrumb, Button } from 'antd';
import { 
  BookOutlined, 
  FileTextOutlined, 
  TrophyOutlined, 
  BarChartOutlined, 
  ExclamationCircleOutlined, 
  UserOutlined,
  UnorderedListOutlined 
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const { Header, Sider, Content } = Layout;

// Mei Brand Mark (Logo)
const MeiLogo = () => (
  <svg width="32" height="32" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mei-mark-gradient" x1="104" y1="88" x2="408" y2="424" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#3B82F6"/>
        <stop offset="0.56" stop-color="#6C5CE7"/>
        <stop offset="1" stop-color="#8B5CF6"/>
      </linearGradient>
    </defs>
    <rect x="72" y="72" width="368" height="368" rx="84" fill="url(#mei-mark-gradient)"/>
    <path d="M144 326C170 266 199 218 230 218C261 218 270 258 282 294C294 258 307 218 342 218C381 218 407 266 410 326" stroke="white" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="256" cy="154" r="22" fill="white"/>
    <circle cx="214" cy="174" r="14" fill="white"/>
    <circle cx="298" cy="174" r="14" fill="white"/>
  </svg>
);

const LogoBar = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  justify-content: flex-start;
  padding: 0 var(--mei-spacing-inset-lg);
`;

const StyledSider = styled(Sider)`
  background: var(--mei-theme-bg-page) !important;
  border-right: 1px solid var(--mei-theme-border-default);
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.03);
  min-width: 200px !important;
  max-width: 200px !important;
  z-index: 1001;
  overflow: auto;
  height: 100vh;
  position: fixed !important;
  left: 0;
  top: 0;
  bottom: 0;
  &.ant-layout-sider-collapsed {
    min-width: 64px !important;
    max-width: 64px !important;
    .logo-text {
      display: none;
    }
  }
`;

const StyledHeader = styled(Header)`
  background: var(--mei-theme-bg-page) !important;
  color: var(--mei-theme-text-primary);
  border-bottom: 1px solid var(--mei-theme-border-default);
  display: flex;
  align-items: center;
  height: 64px !important;
  justify-content: space-between;
  padding: 0 var(--mei-spacing-inset-xl);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

const StyledContent = styled(Content)`
  background: var(--mei-theme-bg-surface);
  min-height: calc(100vh - 64px);
  padding: var(--mei-spacing-stack-xl) var(--mei-spacing-inset-xl);
`;

const menuItems = [
  { key: '/', icon: <BookOutlined />, label: <Link to="/">首页</Link> },
  { key: '/practice', icon: <FileTextOutlined />, label: <Link to="/practice">练习模式</Link> },
  { key: '/exam', icon: <TrophyOutlined />, label: <Link to="/exam">模拟考试</Link> },
  { key: '/review', icon: <ExclamationCircleOutlined />, label: <Link to="/review">错题复习</Link> },
  { key: '/statistics', icon: <BarChartOutlined />, label: <Link to="/statistics">学习统计</Link> },
  { key: '/preview', icon: <UnorderedListOutlined />, label: <Link to="/preview">题库预览</Link> },
];

// 自定义折叠图标 (参考图 2)
const CollapseIcon = ({ collapsed }: { collapsed: boolean }) => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: collapsed ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}
  >
    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {!collapsed && <path d="M8 12L4 8V16L8 12Z" fill="currentColor"/>}
    {collapsed && <path d="M16 12L20 8V16L16 12Z" fill="currentColor"/>}
  </svg>
);

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  // 面包屑
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/" style={{ color: 'var(--mei-theme-text-secondary)', paddingRight: 8 }}>首页</Link>
    </Breadcrumb.Item>,
    ...pathSnippets.map((snippet, idx) => {
      const url = `/${pathSnippets.slice(0, idx + 1).join('/')}`;
      let name = '';
      switch (snippet) {
        case 'practice': name = '练习模式'; break;
        case 'exam': name = '模拟考试'; break;
        case 'review': name = '错题复习'; break;
        case 'statistics': name = '学习统计'; break;
        case 'preview': name = '题库预览'; break;
        default: name = snippet;
      }
      return <Breadcrumb.Item key={url}><Link to={url} style={{ color: 'var(--mei-theme-text-primary)', fontWeight: 600, paddingLeft: 8 }}>{name}</Link></Breadcrumb.Item>;
    })
  ];
  // 折叠按钮
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <StyledSider
        width={200}
        collapsedWidth={64}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        trigger={null}
      >
        <LogoBar style={{ justifyContent: collapsed ? 'center' : 'flex-start' }}>
          <MeiLogo />
          {!collapsed && <span className="logo-text" style={{ marginLeft: 12, fontWeight: 700, fontSize: 18, color: 'var(--mei-color-primary-600)', whiteSpace: 'nowrap' }}>ACP 助手</span>}
        </LogoBar>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          style={{ border: 'none', background: 'transparent', marginTop: 8 }}
          items={menuItems}
        />
      </StyledSider>
      <Layout style={{ marginLeft: collapsed ? 64 : 200, transition: 'all 0.2s' }}>
        <StyledHeader>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Button 
              type="text" 
              style={{ 
                color: 'var(--mei-theme-text-secondary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: 32,
                height: 32,
                padding: 0,
                borderRadius: 'var(--mei-radius-sm)'
              }} 
              onClick={() => setCollapsed(c => !c)}
            >
              <CollapseIcon collapsed={collapsed} />
            </Button>
            <Breadcrumb separator="">
              {breadcrumbItems}
            </Breadcrumb>
          </div>
          <div>
            <Avatar 
              size={40} 
              icon={<UserOutlined style={{ color: 'var(--mei-color-purple-700)' }} />} 
              style={{ 
                background: 'var(--mei-color-purple-100)', 
                border: '1px solid var(--mei-theme-border-default)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }} 
            />
          </div>
        </StyledHeader>
        <StyledContent>
          <div className="fade-in">
            {children}
          </div>
        </StyledContent>
      </Layout>
    </Layout>
  );
};

export default MainLayout; 
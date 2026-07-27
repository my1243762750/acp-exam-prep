import React from 'react';
import { Layout, Menu, Breadcrumb, Button, Select, Tooltip } from 'antd';
import {
  BookOutlined,
  FileTextOutlined,
  TrophyOutlined,
  BarChartOutlined,
  ExclamationCircleOutlined,
  UnorderedListOutlined,
  FormOutlined,
  SwapOutlined,
  UploadOutlined,
  GithubOutlined
} from '@ant-design/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getCurrentSubjectInfo, getAllSubjects, setCurrentSubjectId } from '../data/subject';
import ImportModal from './ImportModal';

const { Header, Sider, Content } = Layout;
const { Option } = Select;

const MeiLogo = () => (
  <svg width="32" height="32" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mei-mark-gradient" x1="104" y1="88" x2="408" y2="424" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#6366F1"/>
        <stop offset="1" stopColor="#4F46E5"/>
      </linearGradient>
    </defs>
    <rect x="72" y="72" width="368" height="368" rx="84" fill="url(#mei-mark-gradient)"/>
    <path d="M144 326C170 266 199 218 230 218C261 218 270 258 282 294C294 258 307 218 342 218C381 218 407 266 410 326" stroke="white" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="256" cy="154" r="22" fill="white"/>
    <circle cx="214" cy="174" r="14" fill="white"/>
    <circle cx="298" cy="174" r="14" fill="white"/>
  </svg>
);

const LogoBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px var(--mei-spacing-inset-lg) 8px;
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledSider = styled(Sider)<{ $mobileOpen: boolean }>`
  background: var(--mei-theme-bg-page) !important;
  border-right: 1px solid var(--mei-color-neutral-200);
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
    .logo-text { display: none; }
    .subject-selector { display: none; }
    .import-btn { display: none; }
  }

  @media (max-width: 768px) {
    min-width: 240px !important;
    max-width: 240px !important;
    width: 240px !important;
    z-index: 1002;
    transform: translateX(${props => props.$mobileOpen ? '0' : '-100%'});
    transition: transform 0.2s ease;
  }
`;

const StyledHeader = styled(Header)`
  background: var(--mei-theme-bg-page) !important;
  color: var(--mei-theme-text-primary);
  border-bottom: 1px solid var(--mei-color-neutral-200);
  display: flex;
  align-items: center;
  height: 64px !important;
  justify-content: space-between;
  padding: 0 var(--mei-spacing-inset-xl);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 12px !important;
  }
`;

const StyledContent = styled(Content)`
  background: var(--mei-theme-bg-page);
  min-height: calc(100vh - 64px);
  padding: var(--mei-spacing-stack-xl) 0;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 16px 0 88px;
  }
`;

const MainContentLayout = styled(Layout)<{ $collapsed: boolean }>`
  margin-left: ${props => props.$collapsed ? '64px' : '200px'};
  transition: margin-left 0.2s;
  background: var(--mei-theme-bg-page);

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const ContentShell = styled.div`
  background: var(--mei-theme-bg-page);
  flex: 1;
  padding: 0 var(--mei-spacing-inset-xl);

  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;

const MobileOverlay = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${props => props.$open ? 'block' : 'none'};
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.45);
    z-index: 1001;
  }
`;

const CollapseIcon = ({ collapsed }: { collapsed: boolean }) => (
  <svg 
    width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ transform: collapsed ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}
  >
    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {!collapsed && <path d="M8 12L4 8V16L8 12Z" fill="currentColor"/>}
    {collapsed && <path d="M16 12L20 8V16L16 12Z" fill="currentColor"/>}
  </svg>
);

const BottomSection = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 72px;
  display: flex;
  align-items: center;
  padding: 0 var(--mei-spacing-inset-lg);
  background: var(--mei-theme-bg-page);
`;

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const subject = getCurrentSubjectInfo();
  const allSubjects = getAllSubjects();
  const [collapsed, setCollapsed] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(() => window.matchMedia('(max-width: 768px)').matches);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [importOpen, setImportOpen] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)');
    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
      if (!event.matches) setMobileOpen(false);
    };
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const pathSnippets = location.pathname.split('/').filter(i => i);
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/" style={{ color: 'var(--mei-theme-text-secondary)', paddingRight: 4 }}>首页</Link>
    </Breadcrumb.Item>,
    ...pathSnippets.map((snippet, idx) => {
      const url = `/${pathSnippets.slice(0, idx + 1).join('/')}`;
      let name = '';
      switch (snippet) {
        case 'practice': name = '练习模式'; break;
        case 'exam': name = '模拟考试'; break;
        case 'review': name = '错题复习'; break;
        case 'essay': name = '问答题'; break;
        case 'statistics': name = '学习统计'; break;
        case 'preview': name = '题库预览'; break;
        default: name = snippet;
      }
      return <Breadcrumb.Item key={url}><Link to={url} style={{ color: 'var(--mei-theme-text-primary)', fontWeight: 600 }}>{name}</Link></Breadcrumb.Item>;
    })
  ];

  const handleSubjectChange = (id: string) => {
    setCurrentSubjectId(id);
    navigate('/');
    window.location.reload();
  };

  const menuItems = [
    { key: '/', icon: <BookOutlined />, label: <Link to="/">首页</Link> },
    { key: '/practice', icon: <FileTextOutlined />, label: <Link to="/practice">练习模式</Link> },
    { key: '/exam', icon: <TrophyOutlined />, label: <Link to="/exam">模拟考试</Link> },
    { key: '/review', icon: <ExclamationCircleOutlined />, label: <Link to="/review">错题复习</Link> },
    { key: '/essay', icon: <FormOutlined />, label: <Link to="/essay">问答题</Link> },
    { key: '/statistics', icon: <BarChartOutlined />, label: <Link to="/statistics">学习统计</Link> },
    { key: '/preview', icon: <UnorderedListOutlined />, label: <Link to="/preview">题库预览</Link> },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <StyledSider
        $mobileOpen={mobileOpen}
        width={200}
        collapsedWidth={64}
        collapsible
        collapsed={isMobile ? false : collapsed}
        onCollapse={setCollapsed}
        trigger={null}
      >
        <LogoBar>
          <LogoRow style={{ justifyContent: !isMobile && collapsed ? 'center' : 'flex-start' }}>
            <MeiLogo />
            {(isMobile || !collapsed) && <span className="logo-text" style={{ marginLeft: 12, fontWeight: 700, fontSize: 18, color: 'var(--mei-color-primary-500)', whiteSpace: 'nowrap' }}>考试助手</span>}
          </LogoRow>
          {(isMobile || !collapsed) && allSubjects.length > 1 && (
            <div className="subject-selector" style={{ width: '100%', marginTop: 8 }}>
              <Select
                size="small"
                value={subject.id}
                onChange={handleSubjectChange}
                style={{ width: '100%' }}
                bordered={false}
                suffixIcon={<SwapOutlined style={{ fontSize: 12, color: 'var(--mei-theme-text-tertiary)' }} />}
              >
                {allSubjects.map(s => (
                  <Option key={s.id} value={s.id}>{s.shortName} - {s.name}</Option>
                ))}
              </Select>
            </div>
          )}
        </LogoBar>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={() => isMobile && setMobileOpen(false)}
          style={{ border: 'none', background: 'transparent', marginTop: 8 }}
          items={menuItems}
        />
        {(isMobile || !collapsed) && (
          <BottomSection>
            <Button
              block
              size="large"
              icon={<UploadOutlined />}
              onClick={() => setImportOpen(true)}
              style={{ borderRadius: 'var(--mei-radius-md)', fontSize: 14 }}
            >
              导入题库
            </Button>
          </BottomSection>
        )}
      </StyledSider>
      <MobileOverlay $open={mobileOpen} onClick={() => setMobileOpen(false)} />
      <MainContentLayout $collapsed={collapsed}>
        <StyledHeader>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Button 
              type="text" 
              aria-label={isMobile ? (mobileOpen ? '关闭导航' : '打开导航') : (collapsed ? '展开导航' : '收起导航')}
              style={{ 
                color: 'var(--mei-theme-text-secondary)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 32, height: 32, padding: 0,
                borderRadius: 'var(--mei-radius-sm)'
              }} 
              onClick={() => isMobile ? setMobileOpen(open => !open) : setCollapsed(c => !c)}
            >
              <CollapseIcon collapsed={isMobile ? !mobileOpen : collapsed} />
            </Button>
            <Breadcrumb separator={<span style={{ color: 'var(--mei-theme-border-strong)', fontSize: 12, margin: '0 4px' }}>/</span>}>
              {breadcrumbItems}
            </Breadcrumb>
          </div>
          <Tooltip title="在 GitHub 上查看">
            <Button
              type="text"
              icon={<GithubOutlined style={{ fontSize: 20 }} />}
              style={{ color: 'var(--mei-theme-text-secondary)', width: 36, height: 36 }}
              onClick={() => window.open('https://github.com/my1243762750/acp-exam-prep', '_blank')}
            />
          </Tooltip>
        </StyledHeader>
        <ContentShell>
          <StyledContent>
            <div className="fade-in">
              {children}
            </div>
          </StyledContent>
        </ContentShell>
      </MainContentLayout>
      <ImportModal open={importOpen} onClose={() => setImportOpen(false)} />
    </Layout>
  );
};

export default MainLayout;

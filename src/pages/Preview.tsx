import React, { useState, useMemo } from 'react';
import { Card, Button, Row, Col, Space, Pagination, Input, Select, Tooltip, Tag } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined, SearchOutlined, SwapOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { getCurrentQuestions, getCurrentCategories } from '../data/subject';
import QuestionCard from '../components/QuestionCard';
import AnswerCard from '../components/AnswerCard';

const { Option } = Select;

const PAGE_SIZE = 10;

const StyledCard = styled(Card)`
  margin-bottom: var(--mei-spacing-stack-lg);
  border-radius: var(--mei-radius-xl);
  border: 1px solid var(--mei-theme-border-default);
  background: var(--mei-theme-bg-page);
  box-shadow: none;
`;

const PreviewLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 24px;
  align-items: start;
  position: relative;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const QuestionSection = styled.div`
  min-width: 0;
`;

const SidebarSection = styled.div`
  position: sticky;
  top: 88px;
  max-height: calc(100vh - 112px - 72px);
  overflow-y: auto;

  @media (max-width: 992px) {
    position: static;
    max-height: none;
    margin-bottom: 24px;
  }
`;

const Preview: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [showMap, setShowMap] = useState<{ [id: number]: boolean }>({});
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [shuffled, setShuffled] = useState(false);

  const rawQuestions = getCurrentQuestions();
  const categories = getCurrentCategories();

  const orderedQuestions = useMemo(() => {
    if (!shuffled) return rawQuestions;
    const arr = [...rawQuestions];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [rawQuestions, shuffled]);

  const filtered = useMemo(() => {
    let list = orderedQuestions;
    if (searchText) {
      const kw = searchText.toLowerCase();
      list = list.filter(q => q.title.toLowerCase().includes(kw) || (q.explanation && q.explanation.toLowerCase().includes(kw)));
    }
    if (categoryFilter) {
      list = list.filter(q => q.category === categoryFilter);
    }
    return list;
  }, [orderedQuestions, searchText, categoryFilter]);

  const total = filtered.length;
  const start = (page - 1) * PAGE_SIZE;
  const pageQuestions = filtered.slice(start, start + PAGE_SIZE);

  const handleToggleAll = () => {
    const next = !showAll;
    setShowAll(next);
    const newMap: { [id: number]: boolean } = {};
    pageQuestions.forEach(q => { newMap[q.id] = next; });
    setShowMap(newMap);
  };

  const handleToggleOne = (id: number) => {
    setShowMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSearch = (val: string) => {
    setSearchText(val);
    setPage(1);
  };

  const handleNavigate = (index: number) => {
    const targetPage = Math.floor(index / PAGE_SIZE) + 1;
    setPage(targetPage);
  };

  return (
    <div style={{ paddingBottom: 80 }}>
      <StyledCard>
        <div style={{ padding: 'var(--mei-spacing-inset-lg)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
            <div>
              <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--mei-theme-text-primary)' }}>题库预览</span>
              <Tag color="blue" style={{ marginLeft: 12 }}>共 {total} 题</Tag>
            </div>
            <Space wrap>
              <Input
                placeholder="搜索题目..."
                prefix={<SearchOutlined style={{ color: 'var(--mei-theme-text-tertiary)' }} />}
                value={searchText}
                onChange={e => handleSearch(e.target.value)}
                allowClear
                size="middle"
                style={{ width: 200 }}
              />
              <Select
                placeholder="分类"
                allowClear
                value={categoryFilter || undefined}
                onChange={val => { setCategoryFilter(val || ''); setPage(1); }}
                style={{ width: 120 }}
                size="middle"
              >
                {categories.map(c => <Option key={c} value={c}>{c}</Option>)}
              </Select>
              <Tooltip title={shuffled ? '恢复顺序' : '随机打乱'}>
                <Button
                  type={shuffled ? 'primary' : 'default'}
                  icon={<SwapOutlined />}
                  onClick={() => { setShuffled(v => !v); setPage(1); }}
                  size="middle"
                  style={{ width: 36, padding: 0 }}
                />
              </Tooltip>
              <Button
                type={showAll ? 'default' : 'primary'}
                icon={showAll ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                onClick={handleToggleAll}
                size="middle"
                style={{ borderRadius: 'var(--mei-radius-md)' }}
              >
                {showAll ? '隐藏全部答案' : '显示全部答案'}
              </Button>
            </Space>
          </div>
        </div>
      </StyledCard>

      <PreviewLayout>
        <QuestionSection>
          <Row gutter={[0, 24]}>
            {pageQuestions.map((q, idx) => (
              <Col span={24} key={q.id}>
                <div style={{ position: 'relative' }}>
                  <QuestionCard
                    question={q}
                    showAnswer={!!showMap[q.id]}
                    questionNumber={start + idx + 1}
                  />
                  <div style={{ position: 'absolute', top: 24, right: 24, zIndex: 10 }}>
                    <Button
                      size="middle"
                      type={showMap[q.id] ? 'default' : 'primary'}
                      icon={showMap[q.id] ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                      onClick={() => handleToggleOne(q.id)}
                      style={{ borderRadius: 'var(--mei-radius-md)' }}
                    >
                      {showMap[q.id] ? '隐藏答案' : '显示答案'}
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {total === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--mei-theme-text-tertiary)' }}>
              未找到相关题目
            </div>
          )}
        </QuestionSection>

        <SidebarSection>
          <AnswerCard
            questions={filtered}
            userAnswers={{}}
            showAnswer={false}
            currentIndex={undefined}
            onNavigate={handleNavigate}
          />
        </SidebarSection>
      </PreviewLayout>

      {total > 0 && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 200, // Account for Sider width
          right: 0,
          height: 72,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 24px',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderTop: '1px solid var(--mei-theme-border-default)',
          boxShadow: '0 -4px 12px rgba(0,0,0,0.05)',
          zIndex: 1000
        }}>
          <Pagination
            current={page}
            total={total}
            pageSize={PAGE_SIZE}
            onChange={setPage}
            showSizeChanger={false}
            showTotal={(t) => `共 ${t} 题`}
          />
        </div>
      )}
    </div>
  );
};

export default Preview;

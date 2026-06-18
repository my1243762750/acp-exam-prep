import React, { useState, useMemo } from 'react';
import { Button, Row, Col, Space, Pagination, Input, Select, Tooltip } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined, SearchOutlined, SwapOutlined } from '@ant-design/icons';
import { getCurrentQuestions, getCurrentCategories } from '../data/subject';
import QuestionCard from '../components/QuestionCard';

const { Option } = Select;
const PAGE_SIZE = 10;

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

  return (
    <div style={{ paddingBottom: 80 }}> {/* Make room for sticky footer */}
      <div style={{
        position: 'sticky',
        top: 64, // Matches Header height
        zIndex: 900,
        background: 'var(--mei-theme-bg-page)', // Match page background
        padding: '24px 0 16px 0',
        margin: '-24px 0 0 0', // Pull up to counter Layout padding
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '16px 24px',
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: 'var(--mei-radius-xl)',
          border: '1px solid var(--mei-theme-border-default)',
          boxShadow: 'var(--mei-shadow-md)',
          flexWrap: 'wrap',
          gap: 16
        }}>
        <Space size="middle" style={{ flex: 1, minWidth: 300 }} wrap>
          <Input
            placeholder="搜索题目或选项内容..."
            prefix={<SearchOutlined style={{ color: 'var(--mei-theme-text-tertiary)' }} />}
            value={searchText}
            onChange={e => handleSearch(e.target.value)}
            allowClear
            size="large"
            style={{ width: 280 }}
          />
            <Select
              placeholder="分类筛选"
              allowClear
              value={categoryFilter || undefined}
              onChange={val => { setCategoryFilter(val || ''); setPage(1); }}
              style={{ width: 140 }}
              size="large"
            >
              {categories.map(c => <Option key={c} value={c}>{c}</Option>)}
            </Select>
          </Space>
          
          <Space size="middle" wrap>
            <Tooltip title={shuffled ? '恢复顺序' : '随机打乱'}>
              <Button
                type={shuffled ? 'primary' : 'default'}
                icon={<SwapOutlined />}
                onClick={() => { setShuffled(v => !v); setPage(1); }}
                size="large"
                style={{ borderRadius: 'var(--mei-radius-md)', width: 40, padding: 0 }}
              />
            </Tooltip>
            <Button 
              type={showAll ? 'default' : 'primary'} 
              icon={showAll ? <EyeInvisibleOutlined /> : <EyeOutlined />} 
              onClick={handleToggleAll}
              size="large"
              style={{ 
                borderRadius: 'var(--mei-radius-md)', 
                padding: '0 24px',
                fontWeight: 600
              }}
            >
              {showAll ? '隐藏全部答案' : '显示全部答案'}
            </Button>
            <span style={{ 
              fontWeight: 600, 
              background: 'var(--mei-color-primary-50)', 
              padding: '6px 16px', 
              borderRadius: 'var(--mei-radius-full)',
              color: 'var(--mei-color-primary-600)',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              height: '32px'
            }}>
              共 {total} 题
            </span>
          </Space>
        </div>
      </div>

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
        <Row>
          <Col span={24}>
            <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--mei-theme-text-tertiary)' }}>
              未找到相关题目
            </div>
          </Col>
        </Row>
      )}

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

import React, { useState, useMemo } from 'react';
import { Button, Row, Col, Space, Pagination, Input, Select } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined, SearchOutlined } from '@ant-design/icons';
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

  const allQuestions = getCurrentQuestions();
  const categories = getCurrentCategories();

  const filtered = useMemo(() => {
    let list = allQuestions;
    if (searchText) {
      const kw = searchText.toLowerCase();
      list = list.filter(q => q.title.toLowerCase().includes(kw) || (q.explanation && q.explanation.toLowerCase().includes(kw)));
    }
    if (categoryFilter) {
      list = list.filter(q => q.category === categoryFilter);
    }
    return list;
  }, [allQuestions, searchText, categoryFilter]);

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
    <div>
      <div style={{
        position: 'sticky',
        top: 64, // Matches Header height
        zIndex: 900,
        background: 'var(--mei-theme-bg-surface)',
        paddingTop: 16,
        marginBottom: 24,
        paddingBottom: 8 // Slight padding to separate from cards
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '20px 32px',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderRadius: 'var(--mei-radius-xl)',
          border: '1px solid var(--mei-theme-border-default)',
          boxShadow: 'var(--mei-shadow-md)',
          flexWrap: 'wrap',
          gap: 20
        }}>
          <Space size="large" style={{ flex: 1, minWidth: 300 }} wrap>
            <Input
              placeholder="搜索题目或选项内容..."
              prefix={<SearchOutlined style={{ color: 'var(--mei-color-primary-400)', fontSize: 18 }} />}
              value={searchText}
              onChange={e => handleSearch(e.target.value)}
              allowClear
              size="large"
              style={{ 
                borderRadius: 'var(--mei-radius-lg)', 
                width: 280,
                height: 52,
                borderWidth: 2,
                borderColor: 'var(--mei-theme-border-default)',
                transition: 'all 0.3s'
              }}
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
          
          <Space size="large" wrap>
            <Button 
              type={showAll ? 'default' : 'primary'} 
              icon={showAll ? <EyeInvisibleOutlined /> : <EyeOutlined />} 
              onClick={handleToggleAll}
              size="large"
              style={{ 
                borderRadius: 'var(--mei-radius-lg)', 
                height: 52, 
                padding: '0 32px',
                fontWeight: 600,
                boxShadow: 'var(--mei-shadow-sm)'
              }}
            >
              {showAll ? '一键隐藏结果答案' : '一键显示结果答案'}
            </Button>
            <span style={{ 
              fontWeight: 700, 
              background: 'var(--mei-color-primary-50)', 
              padding: '8px 16px', 
              borderRadius: 'var(--mei-radius-md)',
              color: 'var(--mei-color-primary-600)'
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

      {total > PAGE_SIZE && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
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

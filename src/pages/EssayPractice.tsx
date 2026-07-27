import React, { useState, useMemo } from 'react';
import { Card, Input, Button, Space, Typography, Tag, Empty, Select, message, Modal } from 'antd';
import { PlusOutlined, DeleteOutlined, EyeOutlined, EyeInvisibleOutlined, FormOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { getEssayQuestions, addEssayQuestion, deleteEssayQuestion } from '../utils/essayStorage';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const StyledCard = styled(Card)`
  margin-bottom: var(--mei-spacing-stack-lg);
  border-radius: var(--mei-radius-xl);
  border: 1px solid var(--mei-theme-border-default);
  background: var(--mei-theme-bg-page);
  box-shadow: none;
`;

const QuestionItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid var(--mei-theme-border-default);
  &:last-child { border-bottom: none; }
`;

const PracticeNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

const PracticeLayout = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const EssayPractice: React.FC = () => {
  const [title, setTitle] = useState('');
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState('');
  const [showAnswerMap, setShowAnswerMap] = useState<Record<number, boolean>>({});
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [practiceMode, setPracticeMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const questions = useMemo(() => getEssayQuestions(), [refreshKey]); // eslint-disable-line react-hooks/exhaustive-deps

  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    questions.forEach(q => { if (q.category) cats.add(q.category); });
    return Array.from(cats).sort();
  }, [questions]);

  const filtered = useMemo(() => {
    if (!categoryFilter) return questions;
    return questions.filter(q => q.category === categoryFilter);
  }, [questions, categoryFilter]);

  const handleAdd = () => {
    if (!title.trim()) { message.warning('请输入题目'); return; }
    if (!answer.trim()) { message.warning('请输入参考答案'); return; }
    addEssayQuestion({ title: title.trim(), answer: answer.trim(), category: category.trim() || undefined });
    setTitle('');
    setAnswer('');
    setCategory('');
    setRefreshKey(k => k + 1);
    setModalOpen(false);
    message.success('已添加');
  };

  const handleDelete = (id: number) => {
    deleteEssayQuestion(id);
    setRefreshKey(k => k + 1);
    message.success('已删除');
  };

  const toggleAnswer = (id: number) => {
    setShowAnswerMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const startPractice = () => {
    if (filtered.length === 0) { message.warning('没有可刷的题目'); return; }
    setPracticeMode(true);
    setCurrentIndex(0);
    setShowAnswerMap({});
  };

  const currentQuestion = filtered[currentIndex];

  return (
    <div style={{ paddingBottom: 80 }}>
      <Title level={2} style={{ color: 'var(--mei-theme-text-primary)' }}>问答题</Title>
      <Paragraph style={{ color: 'var(--mei-theme-text-secondary)', marginBottom: 24 }}>
        录入 AI 生成的问答题，看题思考后核对答案
      </Paragraph>

      {!practiceMode ? (
        <>
          <StyledCard>
            <div style={{ padding: 'var(--mei-spacing-inset-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
              <Space>
                <span style={{ fontWeight: 600 }}>题目列表</span>
                <Tag color="blue">共 {filtered.length} 题</Tag>
              </Space>
              <Space wrap>
                <Select
                  placeholder="全部分类"
                  allowClear
                  value={categoryFilter || undefined}
                  onChange={val => setCategoryFilter(val || '')}
                  style={{ width: 140 }}
                  size="middle"
                >
                  {allCategories.map(c => <Select.Option key={c} value={c}>{c}</Select.Option>)}
                </Select>
                <Button icon={<PlusOutlined />} onClick={() => setModalOpen(true)} size="middle" style={{ borderRadius: 'var(--mei-radius-md)' }}>
                  新增题目
                </Button>
                <Button type="primary" icon={<FormOutlined />} onClick={startPractice} size="middle" disabled={filtered.length === 0} style={{ borderRadius: 'var(--mei-radius-md)' }}>
                  开始刷题
                </Button>
              </Space>
            </div>
          </StyledCard>

          {filtered.length > 0 ? (
            <StyledCard>
              <div style={{ padding: '0 var(--mei-spacing-inset-lg)' }}>
                {filtered.map((q, index) => (
                  <QuestionItem key={q.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <Space style={{ marginBottom: 8 }}>
                          <Tag color="blue">第{index + 1}题</Tag>
                          {q.category && <Tag color="purple">{q.category}</Tag>}
                        </Space>
                        <div style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--mei-theme-text-primary)', whiteSpace: 'pre-wrap' }}>{q.title}</div>
                      </div>
                      <Space>
                        <Button
                          size="small"
                          type={showAnswerMap[q.id] ? 'default' : 'primary'}
                          icon={showAnswerMap[q.id] ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                          onClick={() => toggleAnswer(q.id)}
                          style={{ borderRadius: 'var(--mei-radius-sm)', whiteSpace: 'nowrap' }}
                        >
                          {showAnswerMap[q.id] ? '隐藏答案' : '显示答案'}
                        </Button>
                        <Button size="small" danger icon={<DeleteOutlined />} onClick={() => handleDelete(q.id)} style={{ borderRadius: 'var(--mei-radius-sm)' }} />
                      </Space>
                    </div>
                    {showAnswerMap[q.id] && (
                      <div style={{
                        marginTop: 16,
                        padding: '16px 20px',
                        background: 'var(--mei-color-primary-50)',
                        borderRadius: 'var(--mei-radius-md)',
                        border: '1px solid var(--mei-color-primary-100)'
                      }}>
                        <Text strong style={{ color: 'var(--mei-color-primary-600)' }}>参考答案：</Text>
                        <div style={{ marginTop: 8, lineHeight: 1.8, color: 'var(--mei-theme-text-primary)', whiteSpace: 'pre-wrap' }}>{q.answer}</div>
                      </div>
                    )}
                  </QuestionItem>
                ))}
              </div>
            </StyledCard>
          ) : (
            <StyledCard>
              <div style={{ padding: '40px 0' }}>
                <Empty description={categoryFilter ? `"${categoryFilter}" 分类下没有题目` : '还没有题目，在上方添加吧'} />
              </div>
            </StyledCard>
          )}
        </>
      ) : (
        <PracticeLayout>
          <StyledCard>
            <div style={{ padding: 'var(--mei-spacing-inset-lg)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <Space>
                  <Tag color="blue">第{currentIndex + 1}/{filtered.length}题</Tag>
                  {currentQuestion?.category && <Tag color="purple">{currentQuestion.category}</Tag>}
                </Space>
                <Button
                  size="small"
                  onClick={() => setPracticeMode(false)}
                  style={{ borderRadius: 'var(--mei-radius-sm)' }}
                >
                  返回列表
                </Button>
              </div>

              <div style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--mei-theme-text-primary)', marginBottom: 24, minHeight: 80, whiteSpace: 'pre-wrap' }}>
                {currentQuestion?.title}
              </div>

              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <Button
                  size="large"
                  type={showAnswerMap[currentQuestion?.id] ? 'default' : 'primary'}
                  icon={showAnswerMap[currentQuestion?.id] ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                  onClick={() => currentQuestion && toggleAnswer(currentQuestion.id)}
                  style={{ borderRadius: 'var(--mei-radius-md)', minWidth: 140, height: 44 }}
                >
                  {showAnswerMap[currentQuestion?.id] ? '隐藏答案' : '显示答案'}
                </Button>
              </div>

              {currentQuestion && showAnswerMap[currentQuestion.id] && (
                <div style={{
                  padding: '20px 24px',
                  background: 'var(--mei-color-primary-50)',
                  borderRadius: 'var(--mei-radius-lg)',
                  border: '1px solid var(--mei-color-primary-100)'
                }}>
                  <Text strong style={{ color: 'var(--mei-color-primary-600)', fontSize: 15 }}>参考答案：</Text>
                  <div style={{ marginTop: 12, lineHeight: 1.8, color: 'var(--mei-theme-text-primary)', whiteSpace: 'pre-wrap', fontSize: 15 }}>
                    {currentQuestion.answer}
                  </div>
                </div>
              )}

              <PracticeNav>
                <Button
                  size="large"
                  disabled={currentIndex === 0}
                  onClick={() => { setCurrentIndex(i => i - 1); setShowAnswerMap({}); }}
                  style={{ minWidth: 100, borderRadius: 'var(--mei-radius-md)' }}
                >
                  上一题
                </Button>
                <span style={{ color: 'var(--mei-theme-text-secondary)', fontWeight: 500 }}>
                  {currentIndex + 1} / {filtered.length}
                </span>
                <Button
                  size="large"
                  type="primary"
                  disabled={currentIndex === filtered.length - 1}
                  onClick={() => { setCurrentIndex(i => i + 1); setShowAnswerMap({}); }}
                  style={{ minWidth: 100, borderRadius: 'var(--mei-radius-md)' }}
                >
                  下一题
                </Button>
              </PracticeNav>
            </div>
          </StyledCard>
        </PracticeLayout>
      )}

      <Modal
        title="新增题目"
        open={modalOpen}
        onOk={handleAdd}
        onCancel={() => { setModalOpen(false); setTitle(''); setAnswer(''); setCategory(''); }}
        okText="添加"
        cancelText="取消"
        width={640}
        destroyOnClose
      >
        <div style={{ marginTop: 16 }}>
          <div style={{ marginBottom: 16 }}>
            <Text style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>题目</Text>
            <TextArea rows={6} value={title} onChange={e => setTitle(e.target.value)} placeholder="输入题目内容" />
          </div>
          <div style={{ marginBottom: 16 }}>
            <Text style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>参考答案</Text>
            <TextArea rows={6} value={answer} onChange={e => setAnswer(e.target.value)} placeholder="输入参考答案" />
          </div>
          <div>
            <Text style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>分类（可选）</Text>
            <Input value={category} onChange={e => setCategory(e.target.value)} placeholder="如：OSS、安全、网络" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EssayPractice;

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Card, Button, Row, Col, Space, Pagination, Input, Select, Tooltip, Tag } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined, SearchOutlined, SwapOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { getCurrentPracticeBanks } from '../data/subject';
import QuestionCard from '../components/QuestionCard';
import AnswerCard from '../components/AnswerCard';
import QuestionLanguageSwitch from '../components/QuestionLanguageSwitch';
import type { QuestionLanguage } from '../data/salesforce';
import {
  getEffectiveCorrectAnswers,
  getLocalizedExplanation,
  getLocalizedQuestion,
} from '../data/salesforce';
import { getStoredQuestionLanguage, saveQuestionLanguage } from '../utils/questionLanguage';

const { Option } = Select;

const PAGE_SIZE = 10;

const StyledCard = styled(Card)`
  position: sticky;
  top: 80px;
  z-index: 999;
  margin-bottom: var(--mei-spacing-stack-lg);
  border-radius: var(--mei-radius-xl);
  border: 1px solid var(--mei-theme-border-default);
  background: var(--mei-theme-bg-page);
  box-shadow: none;

  .ant-card-body {
    padding: 0;
  }

  @media (max-width: 768px) {
    top: 72px;

    .preview-toolbar,
    .preview-toolbar .ant-space,
    .preview-toolbar .ant-input-affix-wrapper,
    .preview-toolbar .ant-select {
      width: 100% !important;
    }
  }
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
  scroll-margin-top: 171px;
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

const AnswerToggle = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 10;

  @media (max-width: 768px) {
    top: 12px;
    right: 12px;

    .ant-btn-icon + span {
      display: none;
    }
  }
`;

const PageFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 200px;
  right: 0;
  min-height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid var(--mei-theme-border-default);
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
  z-index: 1000;

  @media (max-width: 768px) {
    left: 0;
    padding: 8px 12px;

    .ant-pagination-total-text {
      display: none;
    }
  }
`;

const Preview: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [showMap, setShowMap] = useState<{ [id: number]: boolean }>({});
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [shuffled, setShuffled] = useState(false);
  const [questionLanguage, setQuestionLanguage] = useState<QuestionLanguage>(
    getStoredQuestionLanguage,
  );
  const questionSectionRef = useRef<HTMLDivElement>(null);
  const questionRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const pendingQuestionIdRef = useRef<number | null>(null);

  const practiceBanks = getCurrentPracticeBanks();
  const rawQuestions = useMemo(
    () => practiceBanks.flatMap(bank => bank.questions),
    [practiceBanks]
  );
  const categories = useMemo(
    () => Array.from(new Set(rawQuestions.map(question => question.category))),
    [rawQuestions]
  );
  const hasTranslations = rawQuestions.some(question => Boolean(question['question-zh']));

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
      list = list.filter(q =>
        getLocalizedQuestion(q, questionLanguage).toLowerCase().includes(kw) ||
        getEffectiveCorrectAnswers(q).some(answer =>
          getLocalizedExplanation(q, answer, questionLanguage).toLowerCase().includes(kw)
        )
      );
    }
    if (categoryFilter) {
      list = list.filter(q => q.category === categoryFilter);
    }
    return list;
  }, [orderedQuestions, searchText, categoryFilter, questionLanguage]);

  const total = filtered.length;
  const start = (page - 1) * PAGE_SIZE;
  const pageQuestions = filtered.slice(start, start + PAGE_SIZE);

  useEffect(() => {
    const questionId = pendingQuestionIdRef.current;
    if (questionId === null) return;

    const frame = requestAnimationFrame(() => {
      questionRefs.current[questionId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      pendingQuestionIdRef.current = null;
    });
    return () => cancelAnimationFrame(frame);
  }, [page]);

  const handleToggleAll = () => {
    const next = !showAll;
    setShowAll(next);
    setShowMap({});
  };

  const handleToggleOne = (id: number) => {
    setShowMap(prev => ({ ...prev, [id]: !(prev[id] ?? showAll) }));
  };

  const handleSearch = (val: string) => {
    setSearchText(val);
    setPage(1);
  };

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    requestAnimationFrame(() => {
      questionSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const handleNavigate = (index: number) => {
    const targetQuestion = filtered[index];
    if (!targetQuestion) return;

    const targetPage = Math.floor(index / PAGE_SIZE) + 1;
    if (targetPage === page) {
      questionRefs.current[targetQuestion.id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    pendingQuestionIdRef.current = targetQuestion.id;
    setPage(targetPage);
  };

  const handleLanguageChange = (language: QuestionLanguage) => {
    setQuestionLanguage(language);
    saveQuestionLanguage(language);
    setPage(1);
  };

  return (
    <div style={{ paddingBottom: 80 }}>
      <StyledCard>
        <div style={{ padding: '16px 24px' }}>
          <div className="preview-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--mei-theme-text-primary)' }}>题库预览</span>
              <Tag color="blue" style={{ marginLeft: 12 }}>共 {total} 题</Tag>
            </div>
            <Space wrap>
              {hasTranslations && (
                <QuestionLanguageSwitch
                  value={questionLanguage}
                  onChange={handleLanguageChange}
                />
              )}
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
        <QuestionSection ref={questionSectionRef}>
          <Row gutter={[0, 24]}>
            {pageQuestions.map((q, idx) => (
              <Col span={24} key={q.id}>
                <div
                  ref={element => { questionRefs.current[q.id] = element; }}
                  style={{ position: 'relative', scrollMarginTop: 171 }}
                >
                  <QuestionCard
                    question={q}
                    showAnswer={showMap[q.id] ?? showAll}
                    questionNumber={start + idx + 1}
                    language={questionLanguage}
                  />
                  <AnswerToggle>
                    <Button
                      size="middle"
                      type={(showMap[q.id] ?? showAll) ? 'default' : 'primary'}
                      icon={(showMap[q.id] ?? showAll) ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                      onClick={() => handleToggleOne(q.id)}
                      style={{ borderRadius: 'var(--mei-radius-md)' }}
                    >
                      {(showMap[q.id] ?? showAll) ? '隐藏答案' : '显示答案'}
                    </Button>
                  </AnswerToggle>
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
        <PageFooter>
          <Pagination
            current={page}
            total={total}
            pageSize={PAGE_SIZE}
            onChange={handlePageChange}
            showSizeChanger={false}
            showTotal={(t) => `共 ${t} 题`}
          />
        </PageFooter>
      )}
    </div>
  );
};

export default Preview;

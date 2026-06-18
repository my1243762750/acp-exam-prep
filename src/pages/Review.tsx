import React, { useState, useMemo } from 'react';
import { Card, Select, Button, Space, Typography, Row, Col, Tag, Empty, List } from 'antd';
import { ExclamationCircleOutlined, EyeOutlined, DeleteOutlined, ReloadOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import QuestionCard from '../components/QuestionCard';
import type { Question } from '../data/questions';
import { getCurrentQuestions, getCurrentCategories } from '../data/subject';
import { getWrongQuestionIds, removeWrongQuestion, clearWrongQuestions } from '../utils/storage';

const { Title, Paragraph } = Typography;
const { Option } = Select;

const StyledCard = styled(Card)`
  margin-bottom: var(--mei-spacing-stack-md);
  border-radius: var(--mei-radius-lg);
  box-shadow: var(--mei-shadow-sm);
  border: 1px solid var(--mei-theme-border-default);
  background: var(--mei-theme-bg-elevated);
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--mei-spacing-stack-lg);
  flex-wrap: wrap;
  gap: var(--mei-spacing-inline-md);
`;

const Review: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [showQuestion, setShowQuestion] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [refreshKey, setRefreshKey] = useState(0);

  const categories = getCurrentCategories();
  const allQuestions = getCurrentQuestions();

  const wrongQuestionIds = useMemo(() => getWrongQuestionIds(), [refreshKey]); // eslint-disable-line react-hooks/exhaustive-deps
  const wrongQuestions = useMemo(() => {
    return allQuestions.filter(q => wrongQuestionIds.includes(q.id));
  }, [wrongQuestionIds, allQuestions]);

  const filteredQuestions = useMemo(() => {
    if (selectedCategory) {
      return wrongQuestions.filter(q => q.category === selectedCategory);
    }
    return wrongQuestions;
  }, [selectedCategory, wrongQuestions]);

  const handleViewQuestion = (question: Question) => {
    setCurrentQuestion(question);
    setShowQuestion(true);
  };

  const handleRemoveWrongQuestion = (questionId: number) => {
    removeWrongQuestion(questionId);
    setRefreshKey(k => k + 1);
  };

  const handleAnswer = (questionId: number, answer: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleCloseQuestion = () => {
    setShowQuestion(false);
    setCurrentQuestion(null);
  };

  const handleClearAll = () => {
    clearWrongQuestions();
    setRefreshKey(k => k + 1);
  };

  return (
    <div>
      <Title level={2} style={{ color: 'var(--mei-theme-text-primary)' }}>错题复习</Title>
      <Paragraph style={{ color: 'var(--mei-theme-text-secondary)', marginBottom: 24 }}>
        重点复习做错的题目，巩固薄弱知识点
      </Paragraph>

      <StyledCard>
        <div style={{ padding: 'var(--mei-spacing-inset-lg)' }}>
          <ReviewHeader>
            <div>
              <Title level={4} style={{ margin: 0 }}>错题管理</Title>
              <Paragraph style={{ color: 'var(--mei-theme-text-secondary)', margin: '4px 0 0 0' }}>
                共 {wrongQuestions.length} 道错题，按分类筛选复习
              </Paragraph>
            </div>
            <Space size="large">
              <Select
                style={{ width: 180 }}
                placeholder="全部分类"
                allowClear
                value={selectedCategory}
                onChange={setSelectedCategory}
                size="large"
              >
                {categories.map(category => (
                  <Option key={category} value={category}>{category}</Option>
                ))}
              </Select>
              <Button icon={<ReloadOutlined />} onClick={handleClearAll} size="large" disabled={wrongQuestions.length === 0}>
                清空错题
              </Button>
            </Space>
          </ReviewHeader>
        </div>
      </StyledCard>

      {filteredQuestions.length > 0 ? (
        <StyledCard title={<span style={{ fontWeight: 700 }}>错题列表</span>}>
          <div style={{ padding: 'var(--mei-spacing-inset-lg)' }}>
            <List
              dataSource={filteredQuestions}
              renderItem={(question, index) => (
                <List.Item
                  style={{ padding: '16px 0', borderBottom: '1px solid var(--mei-theme-border-default)' }}
                  actions={[
                    <Button
                      type="link"
                      icon={<EyeOutlined />}
                      onClick={() => handleViewQuestion(question)}
                      style={{ color: 'var(--mei-color-primary-500)' }}
                    >
                      查看
                    </Button>,
                    <Button
                      type="link"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => handleRemoveWrongQuestion(question.id)}
                    >
                      移除
                    </Button>
                  ]}
                >
                  <List.Item.Meta
                    title={
                      <Space>
                        <span style={{ fontWeight: 600 }}>第{index + 1}题</span>
                        <Tag color="red">错题</Tag>
                        {question.category && <Tag color="purple">{question.category}</Tag>}
                      </Space>
                    }
                    description={
                      <div style={{
                        maxWidth: '600px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        color: 'var(--mei-theme-text-secondary)'
                      }}>
                        {question.title.replace(/<[^>]+>/g, '').slice(0, 80)}...
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </div>
        </StyledCard>
      ) : (
        <StyledCard>
          <div style={{ padding: '40px 0' }}>
            <Empty
              description={
                <div>
                  <Paragraph style={{ fontWeight: 600 }}>暂无错题记录</Paragraph>
                  <Paragraph style={{ color: 'var(--mei-theme-text-tertiary)' }}>
                    {selectedCategory ? `在"${selectedCategory}"分类中没有错题` : '开始练习后，答错的题目会自动记录在这里'}
                  </Paragraph>
                </div>
              }
            />
          </div>
        </StyledCard>
      )}

      {showQuestion && currentQuestion && (
        <div className="fade-in">
          <StyledCard
            title={
              <Space>
                <ExclamationCircleOutlined style={{ color: 'var(--mei-color-error-base)' }} />
                <span style={{ fontWeight: 700 }}>错题详情</span>
              </Space>
            }
            extra={
              <Button onClick={handleCloseQuestion} shape="round">
                关闭
              </Button>
            }
          >
            <div style={{ padding: 'var(--mei-spacing-inset-lg)' }}>
              <QuestionCard
                question={currentQuestion}
                onAnswer={handleAnswer}
                showAnswer={true}
                userAnswer={userAnswers[currentQuestion.id]}
              />
            </div>
          </StyledCard>
        </div>
      )}

      {wrongQuestions.length > 0 && (
        <StyledCard title={<span style={{ fontWeight: 700 }}>学习建议</span>}>
          <div style={{ padding: 'var(--mei-spacing-inset-lg)' }}>
            <Row gutter={[32, 32]}>
              <Col xs={24} md={12}>
                <div style={{ padding: '8px 0' }}>
                  <Title level={5} style={{ color: 'var(--mei-color-primary-600)' }}>重点突破</Title>
                  <Paragraph style={{ color: 'var(--mei-theme-text-secondary)' }}>
                    错题是学习的宝贵资源，建议重点复习这些题目，理解错误原因。
                  </Paragraph>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div style={{ padding: '8px 0' }}>
                  <Title level={5} style={{ color: 'var(--mei-color-primary-600)' }}>分类学习</Title>
                  <Paragraph style={{ color: 'var(--mei-theme-text-secondary)' }}>
                    按知识点分类复习错题，系统性地弥补知识盲点。
                  </Paragraph>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div style={{ padding: '8px 0' }}>
                  <Title level={5} style={{ color: 'var(--mei-color-primary-600)' }}>反复练习</Title>
                  <Paragraph style={{ color: 'var(--mei-theme-text-secondary)' }}>
                    对错题进行多次练习，直到完全掌握相关知识点。
                  </Paragraph>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div style={{ padding: '8px 0' }}>
                  <Title level={5} style={{ color: 'var(--mei-color-primary-600)' }}>总结归纳</Title>
                  <Paragraph style={{ color: 'var(--mei-theme-text-secondary)' }}>
                    总结错题规律，避免在同类题目上再次犯错。
                  </Paragraph>
                </div>
              </Col>
            </Row>
          </div>
        </StyledCard>
      )}
    </div>
  );
};

export default Review;

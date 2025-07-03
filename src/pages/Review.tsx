import React, { useState, useEffect } from 'react';
import { Card, Select, Button, Space, Typography, Row, Col, Tag, Empty, List, Badge } from 'antd';
import { ExclamationCircleOutlined, EyeOutlined, DeleteOutlined, ReloadOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import QuestionCard from '../components/QuestionCard';
import { questions, categories, Question } from '../data/questions';

const { Title, Paragraph } = Typography;
const { Option } = Select;

const StyledCard = styled(Card)`
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
`;



const Review: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [wrongQuestions, setWrongQuestions] = useState<Question[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [showQuestion, setShowQuestion] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

  // 模拟错题数据
  useEffect(() => {
    // 这里可以从localStorage或API获取错题数据
    const mockWrongQuestions = questions.slice(0, 5); // 模拟前5题为错题
    setWrongQuestions(mockWrongQuestions);
    setFilteredQuestions(mockWrongQuestions);
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = wrongQuestions.filter(q => q.category === selectedCategory);
      setFilteredQuestions(filtered);
    } else {
      setFilteredQuestions(wrongQuestions);
    }
  }, [selectedCategory, wrongQuestions]);

  const handleViewQuestion = (question: Question) => {
    setCurrentQuestion(question);
    setShowQuestion(true);
  };

  const handleRemoveWrongQuestion = (questionId: number) => {
    setWrongQuestions(prev => prev.filter(q => q.id !== questionId));
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

  const handleReset = () => {
    setWrongQuestions([]);
    setFilteredQuestions([]);
    setCurrentQuestion(null);
    setShowQuestion(false);
    setUserAnswers({});
  };

  return (
    <div>
      <Title level={2}>错题复习</Title>
      <Paragraph type="secondary">
        重点复习做错的题目，巩固薄弱知识点
      </Paragraph>

      {/* 筛选和统计 */}
      <StyledCard>
        <ReviewHeader>
          <div>
            <Title level={4}>
              错题管理
              <Badge count={wrongQuestions.length} style={{ marginLeft: 8 }} />
            </Title>
            <Paragraph>
              共 {wrongQuestions.length} 道错题，按分类筛选复习
            </Paragraph>
          </div>
          <Space>
            <Select
              style={{ width: 150 }}
              placeholder="选择分类"
              allowClear
              value={selectedCategory}
              onChange={setSelectedCategory}
            >
              {categories.map(category => (
                <Option key={category} value={category}>{category}</Option>
              ))}
            </Select>
            <Button icon={<ReloadOutlined />} onClick={handleReset}>
              清空错题
            </Button>
          </Space>
        </ReviewHeader>
      </StyledCard>

      {/* 错题列表 */}
      {filteredQuestions.length > 0 ? (
        <StyledCard title="错题列表">
          <List
            dataSource={filteredQuestions}
            renderItem={(question, index) => (
              <List.Item
                actions={[
                  <Button
                    type="link"
                    icon={<EyeOutlined />}
                    onClick={() => handleViewQuestion(question)}
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
                      <span>第{index + 1}题</span>
                      <Tag color="red">错题</Tag>
                      {question.category && <Tag color="purple">{question.category}</Tag>}
                    </Space>
                  }
                  description={
                    <div style={{ 
                      maxWidth: '600px', 
                      overflow: 'hidden', 
                      textOverflow: 'ellipsis', 
                      whiteSpace: 'nowrap' 
                    }}>
                      {question.title}
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </StyledCard>
      ) : (
        <StyledCard>
          <Empty
            description={
              <div>
                <Paragraph>暂无错题记录</Paragraph>
                <Paragraph type="secondary">
                  {selectedCategory ? `在"${selectedCategory}"分类中没有错题` : '开始练习后，错题会自动记录在这里'}
                </Paragraph>
              </div>
            }
          />
        </StyledCard>
      )}

      {/* 题目详情弹窗 */}
      {showQuestion && currentQuestion && (
        <StyledCard
          title={
            <Space>
              <ExclamationCircleOutlined style={{ color: '#ff4d4f' }} />
              错题详情
            </Space>
          }
          extra={
            <Button onClick={handleCloseQuestion}>
              关闭
            </Button>
          }
        >
          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswer}
            showAnswer={true}
            userAnswer={userAnswers[currentQuestion.id]}
          />
        </StyledCard>
      )}

      {/* 学习建议 */}
      {wrongQuestions.length > 0 && (
        <StyledCard title="学习建议">
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <div style={{ padding: '16px 0' }}>
                <Title level={5}>🎯 重点突破</Title>
                <Paragraph>
                  错题是学习的宝贵资源，建议重点复习这些题目，理解错误原因。
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ padding: '16px 0' }}>
                <Title level={5}>📚 分类学习</Title>
                <Paragraph>
                  按知识点分类复习错题，系统性地弥补知识盲点。
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ padding: '16px 0' }}>
                <Title level={5}>🔄 反复练习</Title>
                <Paragraph>
                  对错题进行多次练习，直到完全掌握相关知识点。
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ padding: '16px 0' }}>
                <Title level={5}>📝 总结归纳</Title>
                <Paragraph>
                  总结错题规律，避免在同类题目上再次犯错。
                </Paragraph>
              </div>
            </Col>
          </Row>
        </StyledCard>
      )}
    </div>
  );
};

export default Review; 
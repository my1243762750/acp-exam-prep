import React, { useState } from 'react';
import { Button, Row, Col, Card, Space } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { questions } from '../data/questions';
import QuestionCard from '../components/QuestionCard';

const Preview: React.FC = () => {
  // 控制所有题目答案显示
  const [showAll, setShowAll] = useState(false);
  // 单题显示控制
  const [showMap, setShowMap] = useState<{ [id: number]: boolean }>({});

  const handleToggleAll = () => {
    setShowAll((prev) => !prev);
    // 同步所有题目的显示状态
    const newMap: { [id: number]: boolean } = {};
    questions.forEach(q => { newMap[q.id] = !showAll; });
    setShowMap(newMap);
  };

  const handleToggleOne = (id: number) => {
    setShowMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <Space style={{ marginBottom: 24 }}>
        <Button type={showAll ? 'default' : 'primary'} icon={showAll ? <EyeInvisibleOutlined /> : <EyeOutlined />} onClick={handleToggleAll}>
          {showAll ? '一键隐藏所有答案' : '一键显示所有答案'}
        </Button>
        <span style={{ color: '#888' }}>共 {questions.length} 题</span>
      </Space>
      <Row gutter={[0, 24]}>
        {questions.map((q, idx) => (
          <Col span={24} key={q.id}>
            <Card
              style={{ marginBottom: 12, borderRadius: 12 }}
              bodyStyle={{ padding: 0 }}
              bordered={false}
            >
              <QuestionCard
                question={q}
                showAnswer={!!showMap[q.id]}
                questionNumber={idx + 1}
              />
              <div style={{ textAlign: 'right', padding: '0 32px 16px 0' }}>
                <Button
                  size="small"
                  type={showMap[q.id] ? 'default' : 'primary'}
                  icon={showMap[q.id] ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                  onClick={() => handleToggleOne(q.id)}
                >
                  {showMap[q.id] ? '隐藏答案' : '显示答案'}
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Preview; 
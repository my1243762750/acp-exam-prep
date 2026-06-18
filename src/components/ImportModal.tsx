import React, { useState } from 'react';
import { Modal, Upload, Button, Typography, Alert, Tag, Space, message } from 'antd';
import { InboxOutlined, DownloadOutlined } from '@ant-design/icons';
import type { Question } from '../data/questions';
import { importSubject, setCurrentSubjectId } from '../data/subject';

const { Paragraph, Text } = Typography;
const { Dragger } = Upload;

interface ParsedData {
  name: string;
  shortName: string;
  description: string;
  questions: Question[];
  categories: string[];
  questionCount: number;
}

interface Props {
  open: boolean;
  onClose: () => void;
}

const ImportModal: React.FC<Props> = ({ open, onClose }) => {
  const [parsed, setParsed] = useState<ParsedData | null>(null);
  const [error, setError] = useState<string>('');

  const downloadTemplate = () => {
    const template = {
      name: '示例题库',
      shortName: '示例',
      description: '这是一个导入模板',
      questions: [
        {
          id: 1,
          type: '单选题',
          title: '阿里云对象存储OSS的基本数据单元是什么？',
          options: ['A.Object', 'B.Bucket', 'C.Service', 'D.安全组'],
          answer: 'A',
          explanation: 'OSS的基本数据单元是对象（Object）。',
          category: 'OSS',
        },
      ],
      categories: ['OSS'],
    };
    const blob = new Blob([JSON.stringify(template, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'question-bank-template.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFile = (file: File) => {
    setError('');
    setParsed(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const raw = JSON.parse(e.target?.result as string);
        let data: ParsedData;

        if (Array.isArray(raw)) {
          // bare question array
          const cats = Array.from(new Set(raw.map((q: Question) => q.category).filter(Boolean))) as string[];
          data = {
            name: '导入题库',
            shortName: '导入',
            description: '用户导入的题库',
            questions: raw,
            categories: cats,
            questionCount: raw.length,
          };
        } else if (raw.questions && Array.isArray(raw.questions)) {
          const cats = raw.categories || Array.from(new Set(raw.questions.map((q: Question) => q.category).filter(Boolean)));
          data = {
            name: raw.name || '导入题库',
            shortName: raw.shortName || '导入',
            description: raw.description || '用户导入的题库',
            questions: raw.questions,
            categories: cats,
            questionCount: raw.questions.length,
          };
        } else {
          setError('无法识别的格式。请提供题目数组或包含 questions 字段的对象。');
          return;
        }

        if (data.questions.length === 0) {
          setError('题库为空，请检查文件。');
          return;
        }

        setParsed(data);
      } catch {
        setError('JSON 解析失败，请检查文件格式。');
      }
    };
    reader.readAsText(file);
    return false;
  };

  const handleImport = () => {
    if (!parsed) return;

    const id = `custom_${Date.now()}`;
    importSubject({
      info: { id, name: parsed.name, shortName: parsed.shortName, description: parsed.description },
      questions: parsed.questions,
      categories: parsed.categories,
    });

    setCurrentSubjectId(id);
    message.success(`成功导入「${parsed.name}」共 ${parsed.questionCount} 题`);
    onClose();
    window.location.reload();
  };

  return (
    <Modal
      title="导入题库"
      open={open}
      onCancel={onClose}
      footer={null}
      width={560}
    >
      <Dragger
        accept=".json"
        showUploadList={false}
        beforeUpload={handleFile}
        style={{ marginBottom: 24 }}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击或拖拽 JSON 文件到此区域</p>
        <p className="ant-upload-hint">
          支持格式：题目数组 <Text code>[{ }]</Text> 或对象 <Text code>{"{ questions: [...], name: '...' }"}</Text>
        </p>
      </Dragger>

      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <Button type="link" icon={<DownloadOutlined />} onClick={downloadTemplate}>
          下载 JSON 模板
        </Button>
      </div>

      {error && <Alert message={error} type="error" showIcon style={{ marginBottom: 16, borderRadius: 'var(--mei-radius-md)' }} />}

      {parsed && (
        <div style={{ background: 'var(--mei-theme-bg-surface)', padding: 16, borderRadius: 'var(--mei-radius-md)', marginBottom: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{parsed.name}</div>
          <Space>
            <Tag color="blue">{parsed.questionCount} 题</Tag>
            <Tag color="purple">{parsed.categories.length} 个分类</Tag>
          </Space>
          {parsed.description && (
            <Paragraph style={{ marginTop: 8, color: 'var(--mei-theme-text-secondary)', marginBottom: 0 }}>
              {parsed.description}
            </Paragraph>
          )}
        </div>
      )}

      {parsed && (
        <Button type="primary" size="large" block onClick={handleImport} style={{ borderRadius: 'var(--mei-radius-md)' }}>
          确认导入并切换到该科目
        </Button>
      )}
    </Modal>
  );
};

export default ImportModal;

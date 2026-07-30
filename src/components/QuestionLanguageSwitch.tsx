import React from 'react';
import { Segmented } from 'antd';
import type { QuestionLanguage } from '../data/salesforce';

interface QuestionLanguageSwitchProps {
  value: QuestionLanguage;
  onChange: (language: QuestionLanguage) => void;
}

const QuestionLanguageSwitch: React.FC<QuestionLanguageSwitchProps> = ({ value, onChange }) => (
  <Segmented
    value={value}
    options={[
      { label: '英文', value: 'en' },
      { label: '中文', value: 'zh' },
      { label: '中英', value: 'both' },
    ]}
    onChange={next => onChange(next as QuestionLanguage)}
  />
);

export default QuestionLanguageSwitch;

import React from 'react';
import * as S from './SupportMulti.style';
import * as T from './SupportMulti.type';
import SupportTabs from '@molecules/SupportTabs';
import SupportMulti from '@molecules/SupportMulti';

const SupportMultiView = ({ tabs, onPropChange, categories, rows }: T.SupportMultiViewProps) => {
  return (
    <>
      <SupportTabs tabs={tabs} onPropChange={onPropChange} />
      <SupportMulti categories={categories} rows={rows} />
    </>
  );
};

export default SupportMultiView;

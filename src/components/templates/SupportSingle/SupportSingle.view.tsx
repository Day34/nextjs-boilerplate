import React from 'react';
import * as S from './SupportSingle.style';
import * as T from './SupportSingle.type';
import SupportTabs from '@molecules/SupportTabs';
import SupportSingle from '@molecules/SupportSingle';

const SupportSingleView = ({ tabs, onPropChange, title, description, date }: T.SupportSingleViewProps) => {
  return (
    <>
      <SupportTabs tabs={tabs} onPropChange={onPropChange} />
      <SupportSingle title={title} description={description} date={date} />
    </>
  );
};

export default SupportSingleView;

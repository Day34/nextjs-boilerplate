import React from 'react';
import SupportMultiView from './SupportMulti.view';

import * as T from './SupportMulti.type';

const SupportMultiContainer = ({ tabs, categories, rows, onPropChange }: T.SupportMultiProps) => {
  return <SupportMultiView tabs={tabs} categories={categories} rows={rows} onPropChange={onPropChange} />;
};

export default SupportMultiContainer;

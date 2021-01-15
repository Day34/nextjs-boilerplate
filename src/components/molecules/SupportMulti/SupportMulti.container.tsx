import React, { useEffect } from 'react';
import SupportMultiView from './SupportMulti.view';

import * as T from './SupportMulti.type';

const SupportMultiContainer = ({ categories, rows }: T.SupportMultiProps) => {
  return <SupportMultiView categories={categories} rows={rows} />;
};

export default SupportMultiContainer;

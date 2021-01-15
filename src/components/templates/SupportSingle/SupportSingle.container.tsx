import React from 'react';
import SupportSingleView from './SupportSingle.view';

import * as T from './SupportSingle.type';

const SupportSingleContainer = ({ tabs, title, description, date }: T.SupportSingleProps) => {
  return <SupportSingleView tabs={tabs} title={title} description={date} />;
};

export default SupportSingleContainer;

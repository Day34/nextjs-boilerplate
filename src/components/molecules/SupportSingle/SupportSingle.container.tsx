import React from 'react';
import SupportSingleView from './SupportSingle.view';

import * as T from './SupportSingle.type';

const SupportSingleContainer = ({ title, description, date }: T.SupportSingleProps) => {
  return <SupportSingleView title={title} description={description} date={date} />;
};

export default SupportSingleContainer;

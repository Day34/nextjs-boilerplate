import React from 'react';
import SupportTabsView from './SupportTabs.view';

import * as T from './SupportTabs.type';

const SupportTabsContainer = ({ tabs, onPropChange }: T.SupportTabsProps) => {
  const [value, setValue] = React.useState(0);

  console.log(tabs);

  const onChange = (value: number) => {
    setValue(value);

    onPropChange(value);
  };

  return <SupportTabsView tabs={tabs} value={value} onPropChange={onChange} />;
};

export default SupportTabsContainer;

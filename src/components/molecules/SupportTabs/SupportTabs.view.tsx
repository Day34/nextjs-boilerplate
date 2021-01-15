import React from 'react';
import * as S from './SupportTabs.style';
import * as T from './SupportTabs.type';
import { InputLabel, TextField, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const SupportTabsView = ({ tabs, value, onPropChange }: T.SupportTabsViewProps) => {
  return (
    <Tabs
      value={value}
      onChange={(event, value) => {
        onPropChange(value);
      }}
      indicatorColor="primary"
      textColor="primary"
      variant="fullWidth"
      centered
    >
      {tabs.map(({ title }, index) => (
        <Tab label={title} />
      ))}
    </Tabs>
  );
};

export default SupportTabsView;

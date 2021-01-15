import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SupportMultiProps } from './SupportMulti.type';
import SupportMulti from './index';
import {
  SupportTabs as dummySupportTabs,
  SupportMulti as dummySupportMulti,
  SupportMultiCategory as dummySupportMultiCategory,
} from '@dummies/Supports';
import SupportTabs from '@molecules/SupportTabs';

export default {
  title: 'Design System/04-Templates/Display/SupportMulti',
  component: SupportMulti,
  argTypes: {
    tabs: { control: { type: 'object' }, defaultValue: dummySupportTabs },
    onPropChange: { action: 'login clicked' },

    categories: { control: { type: 'object' }, defaultValue: dummySupportMultiCategory },
    rows: { control: { type: 'object' }, defaultValue: dummySupportMulti },
  },
} as Meta;

const Template: Story<SupportMultiProps> = ({ tabs, categories, rows, onPropChange }: SupportMultiProps) => (
  <SupportMulti tabs={tabs} categories={categories} rows={rows} onPropChange={onPropChange} />
);

export const Default = Template.bind({});
Default.args = {};

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SupportMultiProps } from './SupportMulti.type';
import {
  SupportMulti as dummySupportMulti,
  SupportMultiCategory as dummySupportMultiCategory,
} from '@dummies/Supports';
import SupportMulti from './index';

export default {
  title: 'Design System/02-Molecules/Display/SupportMulti',
  component: SupportMulti,
  argTypes: {
    categories: { control: { type: 'object' }, defaultValue: dummySupportMultiCategory },
    rows: { control: { type: 'object' }, defaultValue: dummySupportMulti },
  },
} as Meta;

const Template: Story<SupportMultiProps> = ({ categories, rows }: SupportMultiProps) => (
  <SupportMulti categories={categories} rows={rows} />
);

export const Default = Template.bind({});
Default.args = {};

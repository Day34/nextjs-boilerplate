import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SupportSingleProps } from './SupportSingle.type';
import SupportSingle from './index';
import { SupportTabs as dummySupportTabs } from '@dummies/Supports';
import SupportTabs from '@molecules/SupportTabs';

export default {
  title: 'Design System/04-Templates/Display/SupportSingle',
  component: SupportSingle,
  argTypes: {
    tabs: { control: { type: 'object' }, defaultValue: dummySupportTabs },

    title: { control: { type: 'text' }, defaultValue: '제목' },
    description: { control: { type: 'text' }, defaultValue: '내용' },
    date: { control: { type: 'text' }, defaultValue: '제목' },
  },
} as Meta;

const Template: Story<SupportSingleProps> = ({ tabs, title, description, date }: SupportSingleProps) => (
  <SupportSingle tabs={tabs} title={title} description={description} date={date} />
);

export const Default = Template.bind({});
Default.args = {};

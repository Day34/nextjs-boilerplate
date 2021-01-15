import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SupportSingleProps } from './SupportSingle.type';
import SupportSingle from './index';

export default {
  title: 'Design System/02-Molecules/Display/SupportSingle',
  component: SupportSingle,
  argTypes: {
    title: { control: { type: 'text' }, defaultValue: '제목' },
    description: { control: { type: 'text' }, defaultValue: '내용' },
    date: { control: { type: 'text' }, defaultValue: '제목' },
  },
} as Meta;

const Template: Story<SupportSingleProps> = ({ title, description, date }: SupportSingleProps) => (
  <SupportSingle title={title} description={description} date={date} />
);

export const Default = Template.bind({});
Default.args = {};

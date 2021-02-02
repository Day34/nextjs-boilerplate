import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InquiryListProps } from './InquiryList.type';
import InquiryList from '.';

export default {
  title: 'Design System/03-Organisms/Display/InquiryList',
  component: InquiryList,
} as Meta;

const Template: Story<InquiryListProps> = () => <InquiryList />;

export const Default = Template.bind({});
Default.args = {};

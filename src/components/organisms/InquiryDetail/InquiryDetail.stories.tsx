import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InquiryDetailProps } from './InquiryDetail.type';
import InquiryDetail from '.';

export default {
  title: 'Design System/03-Organisms/Display/InquiryDetail',
  component: InquiryDetail,
} as Meta;

const Template: Story<InquiryDetailProps> = () => <InquiryDetail />;

export const Default = Template.bind({});
Default.args = {};

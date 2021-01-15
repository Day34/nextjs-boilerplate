import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InquiryFormProps } from './InquiryForm.type';
import InquiryForm from '.';

export default {
  title: 'Design System/03-Organisms/Display/InquiryForm',
  component: InquiryForm,
} as Meta;

const Template: Story<InquiryFormProps> = () => <InquiryForm />;

export const Default = Template.bind({});
Default.args = {};

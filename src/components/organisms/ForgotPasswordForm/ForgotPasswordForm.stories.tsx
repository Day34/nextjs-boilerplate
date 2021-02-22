import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ForgotPasswordFormProps } from './ForgotPasswordForm.type';
import ForgotPasswordForm from '.';

export default {
  title: 'Design System/03-Organisms/Auth/ForgotPasswordForm',
  component: ForgotPasswordForm,
} as Meta;

const Template: Story<ForgotPasswordFormProps> = () => <ForgotPasswordForm />;

export const Default = Template.bind({});
Default.args = {};

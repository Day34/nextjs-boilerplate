import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SignInFormProps } from './SignInForm.type';
import SignInForm from '.';

export default {
  title: 'Design System/03-Organisms/Display/SignInForm',
  component: SignInForm,
} as Meta;

const Template: Story<SignInFormProps> = () => <SignInForm />;

export const Default = Template.bind({});
Default.args = {};

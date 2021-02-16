import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SignUpFormProps } from './SignUpForm.type';
import SignUpForm from '.';

export default {
  title: 'Design System/03-Organisms/Display/SignUpForm',
  component: SignUpForm,
} as Meta;

const Template: Story<SignUpFormProps> = () => <SignUpForm />;

export const Default = Template.bind({});
Default.args = {};

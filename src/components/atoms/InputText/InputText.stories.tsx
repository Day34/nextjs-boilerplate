import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import InputText from './index';
import { InputTextProps } from './InputText.type';

export default {
  title: 'Design System/01-Atoms/Inputs/InputText',
  component: InputText,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'label',
    },
    placeholder: {
      control: { type: 'text' },
      defaultValue: 'placeholder',
    },
    defaultValue: {
      control: { type: 'text' },
      defaultValue: 'defaultValue',
    },
    helperText: {
      control: { type: 'text' },
      defaultValue: 'helperText',
    },
    required: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    error: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    variant: {
      control: { type: 'select', options: ['filled', 'outlined', 'standard'] },
      defaultValue: 'outlined',
    },
    color: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      defaultValue: 'primary',
    },
    fullWidth: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      defaultValue: 'small',
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    readyOnly: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    onChange: { action: 'onChange' },
  },
} as Meta;

const Template: Story<InputTextProps> = ({ ...props }: InputTextProps) => <InputText {...props} />;

export const Default = Template.bind({});
Default.args = {};

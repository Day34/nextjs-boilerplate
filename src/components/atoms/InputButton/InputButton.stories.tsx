import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import InputButton from './index';
import { InputButtonProps } from './InputButton.type';

export default {
  title: 'Design System/01-Atoms/Inputs/InputButton',
  component: InputButton,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['text', 'outlined', 'contained'] },
      defaultValue: 'outlined',
    },
    color: {
      control: { type: 'select', options: ['default', 'inherit', 'primary', 'secondary'] },
      defaultValue: 'default',
    },
    fullWidth: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      defaultValue: 'medium',
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    onClick: { action: 'button clicked' },
  },
} as Meta;

const Template: Story<InputButtonProps> = args => <InputButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

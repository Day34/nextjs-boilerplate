import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputButtonProps } from './InputButton.type';
import InputButton from './index';

export default {
  title: 'Design System/02-Molecules/Display/InputButton',
  component: InputButton,
  argTypes: {
    inline: { control: { type: 'boolean' }, defaultValue: false },
    frameTitle: { control: { type: 'text' }, defaultValue: 'title' },
    buttonText: { control: { type: 'text' }, defaultValue: 'button' },
    onClick: { action: 'button clicked' },
    color: {
      control: { type: 'select', options: ['default', 'inherit', 'primary', 'secondary'] },
      defaultValue: 'default',
    },
    variant: {
      control: { type: 'select', options: ['text', 'outlined', 'contained'] },
      defaultValue: 'outlined',
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      defaultValue: 'medium',
    },
  },
} as Meta;

const Template: Story<InputButtonProps> = ({ inline, frameTitle, buttonText, ...props }: InputButtonProps) => (
  <InputButton inline={inline} frameTitle={frameTitle} buttonText={buttonText} {...props} />
);

export const Default = Template.bind({});
Default.args = {};

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputTextProps } from './InputText.type';
import InputText from './index';

export default {
  title: 'Design System/02-Molecules/Display/InputText',
  component: InputText,
  argTypes: {
    inline: { control: { type: 'boolean' }, defaultValue: false },
    frameTitle: { control: { type: 'text' }, defaultValue: 'title' },
    defaultValue: { control: { type: 'text' }, defaultValue: 'title' },
    variant: {
      control: { type: 'select', options: ['filled', 'outlined', 'standard'] },
      defaultValue: 'outlined',
    },
  },
} as Meta;

const Template: Story<InputTextProps> = ({ inline, frameTitle, ...props }: InputTextProps) => (
  <InputText inline={inline} frameTitle={frameTitle} {...props} />
);

export const Default = Template.bind({});
Default.args = {};

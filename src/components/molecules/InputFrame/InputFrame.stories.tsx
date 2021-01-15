import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputFrameProps } from './InputFrame.type';
import InputFrame from './index';

export default {
  title: 'Design System/02-Molecules/Display/InputFrame',
  component: InputFrame,
  argTypes: {
    inline: { control: { type: 'boolean' }, defaultValue: false },
    frameTitle: { control: { type: 'text' }, defaultValue: 'title' },
  },
} as Meta;

const Template: Story<InputFrameProps> = ({ inline, frameTitle }: InputFrameProps) => (
  <InputFrame inline={inline} frameTitle={frameTitle}>
    <div>children</div>
  </InputFrame>
);

export const Default = Template.bind({});
Default.args = {};

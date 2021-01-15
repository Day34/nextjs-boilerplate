import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputSelectProps } from './InputSelect.type';
import InputSelect from './index';

export default {
  title: 'Design System/02-Molecules/Display/InputSelect',
  component: InputSelect,
  argTypes: {
    inline: { control: { type: 'boolean' }, defaultValue: false },
    frameTitle: { control: { type: 'text' }, defaultValue: 'title' },
    options: {
      control: { type: 'object' },
      defaultValue: [
        {
          title: '값1',
          value: 1,
        },
        {
          title: '값2',
          value: 2,
        },
        {
          title: '값3',
          value: 3,
        },
      ],
    },
    value: { control: { type: 'text' }, defaultValue: 2 },
    variant: {
      control: { type: 'select', options: ['filled', 'outlined', 'standard'] },
      defaultValue: 'outlined',
    },
    onChange: { action: 'onChange' },
    onClose: { action: 'onClose' },
    onOpen: { action: 'onOpen' },
  },
} as Meta;

const Template: Story<InputSelectProps> = ({ inline, frameTitle, options, ...props }: InputSelectProps) => (
  <InputSelect inline={inline} frameTitle={frameTitle} options={options} {...props} />
);

export const Default = Template.bind({});
Default.args = {};

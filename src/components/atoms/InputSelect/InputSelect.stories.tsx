import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import InputSelect from './index';
import { InputSelectProps } from './InputSelect.type';

export default {
  title: 'Design System/01-Atoms/Inputs/InputSelect',
  component: InputSelect,
  argTypes: {
    label: { control: { type: 'text' }, defaultValue: 'label' },
    placeholder: { control: { type: 'text' }, defaultValue: 'placeholder' },
    options: {
      control: { type: 'object' },
      defaultValue: [
        {
          label: '값1',
          value: 1,
        },
        {
          label: '값2',
          value: 2,
        },
        {
          label: '값3',
          value: 3,
        },
      ],
    },
    helperText: { control: { type: 'text' }, defaultValue: 'helperText' },
    selectedValue: { control: { type: 'text' }, defaultValue: '' },
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
      control: { type: 'select', expanded: true, options: ['default', 'primary', 'secondary'] },
      defaultValue: 'primary',
    },
    fullWidth: { control: { type: 'boolean' }, defaultValue: false },
    size: {
      control: { type: 'select', options: ['small', 'medium'] },
      defaultValue: 'small',
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    onChange: { action: 'onChange' },
    onClose: { action: 'onClose' },
    onOpen: { action: 'onOpen' },
  },
} as Meta;

const Template: Story<InputSelectProps> = ({ ...props }: InputSelectProps) => <InputSelect {...props} />;

export const Default = Template.bind({});
Default.args = {};

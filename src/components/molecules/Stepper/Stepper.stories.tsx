import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Stepper from './index';
import { StepperProps } from './Stepper.type';

export default {
  title: 'Design System/02-Molecules/Navigation/Stepper',
  component: Stepper,
  argTypes: {
    steps: {
      control: { type: 'object' },
      defaultValue: ['링크 만들기', '링크 선택하기', '링크 연결하기', '링크 완료'],
    },
    step: {
      control: { type: 'number' },
      defaultValue: 1,
    },
    alternativeLabel: { control: { type: 'boolean' }, defaultValue: false },
  },
} as Meta;

const Template: Story<StepperProps> = ({ ...props }: StepperProps) => <Stepper {...props} />;

export const Default = Template.bind({});
Default.args = {};

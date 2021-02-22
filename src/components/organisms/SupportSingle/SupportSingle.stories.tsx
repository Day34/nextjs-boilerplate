import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SupportSingleProps } from './SupportSingle.type';
import SupportSingle from '.';
import { Introduce as dummyIntroduce } from '@dummies/Supports';

export default {
  title: 'Design System/03-Organisms/Support/SupportSingle',
  component: SupportSingle,
  argTypes: {
    introduce: { control: { type: 'string' }, defaultValue: dummyIntroduce },
    privacy: { control: { type: 'string' }, defaultValue: dummyIntroduce },
    terms: { control: { type: 'string' }, defaultValue: dummyIntroduce },
  },
} as Meta;

const Template: Story<SupportSingleProps> = ({ ...props }: SupportSingleProps) => <SupportSingle {...props} />;

export const Default = Template.bind({});
Default.args = {};

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Navigation as dummySeparator } from '@dummies/Navigation';
import Separator from '.';
import { SeparatorProps } from './Separator.type';

export default {
  title: 'Design System/02-Molecules/Navigations/Separator',
  component: Separator,
  argTypes: {
    items: { control: { type: 'object' }, defaultValue: dummySeparator },
  },
} as Meta;

const Template: Story<SeparatorProps> = ({ ...props }: SeparatorProps) => <Separator {...props} />;

export const Default = Template.bind({});
Default.args = {};

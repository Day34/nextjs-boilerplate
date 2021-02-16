import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Navigation as dummyNavigation } from '@dummies/Navigation';
import Navigation from '.';
import { NavigationProps } from './Navigation.type';

export default {
  title: 'Design System/02-Molecules/Navigation/Navigation',
  component: Navigation,
  argTypes: {
    direction: {
      control: { type: 'select', options: ['horizontal', 'vertical'] },
      defaultValue: 'horizontal',
    },
    items: { control: { type: 'object' }, defaultValue: dummyNavigation },
  },
} as Meta;

const Template: Story<NavigationProps> = ({ ...props }: NavigationProps) => <Navigation {...props} />;

export const Default = Template.bind({});
Default.args = {};

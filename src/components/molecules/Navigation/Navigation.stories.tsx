import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Navigation as dummyNavigation } from '@dummies/Navigation';
import { NavigationProps } from './Navigation.type';
import Navigation from '.';

export default {
  title: 'Design System/02-Molecules/Display/Navigation',
  component: Navigation,
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['horizontal', 'vertical'],
      },
    },
    items: { control: { type: 'object' }, defaultValue: dummyNavigation },
  },
} as Meta;

const Template: Story<NavigationProps> = ({ direction, items }: NavigationProps) => (
  <Navigation direction={direction} items={items} />
);

export const Default = Template.bind({});
Default.args = {};

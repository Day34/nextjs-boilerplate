import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuNavigation as dummyMenuNavigation } from '@dummies/Navigation';
import { MenuNavigationProps } from './MenuNavigation.type';
import MenuNavigation from '.';

export default {
  title: 'Design System/02-Molecules/SimpleNavigationItem/MenuNavigation',
  component: MenuNavigation,
  argTypes: {
    items2: { control: { type: 'object' }, defaultValue: dummyMenuNavigation },
  },
} as Meta;

const Template: Story<MenuNavigationProps> = ({ items2 }: MenuNavigationProps) => <MenuNavigation items2={items2} />;

export const Default = Template.bind({});
Default.args = {};

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuNavigation as dummyMenuNavigation } from '@dummies/Navigation';
import { MenuNavigationItemProps } from './MenuNavigationItem.type';
import MenuNavigationItem from '.';

export default {
  title: 'Design System/02-Molecules/Display/MenuNavigationItem',
  component: MenuNavigationItem,
  argTypes: {
    title: { control: { type: 'object' }, defaultValue: dummyMenuNavigation[1].title },
    items: { control: { type: 'object' }, defaultValue: dummyMenuNavigation[1].items },
  },
} as Meta;

const Template: Story<MenuNavigationItemProps> = ({ title, items }: MenuNavigationItemProps) => (
  <MenuNavigationItem title={title} items={items} />
);

export const Default = Template.bind({});
Default.args = {};

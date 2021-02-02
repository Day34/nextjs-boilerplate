import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuNavigation as dummyMenuNavigation } from '@dummies/Navigation';
import { MenuNavigationDropdownProps } from './MenuNavigationDropdown.type';
import MenuNavigationDropdown from '.';

export default {
  title: 'Design System/02-Molecules/SimpleNavigationItem/MenuNavigationDropdown',
  component: MenuNavigationDropdown,
  argTypes: {
    items: { control: { type: 'object' }, defaultValue: dummyMenuNavigation[1].items },
  },
} as Meta;

const Template: Story<MenuNavigationDropdownProps> = ({ items }: MenuNavigationDropdownProps) => (
  <MenuNavigationDropdown items={items} />
);

export const Default = Template.bind({});
Default.args = {};

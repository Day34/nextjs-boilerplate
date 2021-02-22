import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SupportTabs as dummyTabs, SupportScrollTabs as dummySupportScrollTabs } from '@dummies/Supports';
import Tabs from './index';
import { TabsProps } from './Tabs.type';

export default {
  title: 'Design System/02-Molecules/Navigations/Tabs',
  component: Tabs,
  argTypes: {
    indicatorColor: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      defaultValue: 'primary',
    },
    textColor: {
      control: { type: 'select', options: ['primary', 'secondary', 'inherit'] },
      defaultValue: 'primary',
    },
    variant: {
      control: { type: 'select', options: ['standard', 'scrollable', 'fullWidth'] },
      defaultValue: 'standard',
    },
    centered: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    tabs: {
      control: { type: 'object' },
      defaultValue: dummyTabs,
    },
    onPropChange: { action: 'login clicked' },
  },
} as Meta;

const Template: Story<TabsProps> = ({ ...props }: TabsProps) => <Tabs {...props} />;

export const Default = Template.bind({});
Default.args = {};

export const fullWidth = Template.bind({});
fullWidth.args = {
  variant: 'fullWidth',
};

export const scrollable = Template.bind({});
scrollable.args = {
  variant: 'scrollable',
  tabs: dummySupportScrollTabs,
  scrollButtons: 'auto',
};

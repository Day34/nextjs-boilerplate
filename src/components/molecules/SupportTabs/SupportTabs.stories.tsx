import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SupportTabsProps } from './SupportTabs.type';
import SupportTabs from './index';
import { SupportTabs as dummySupportTabs } from '@dummies/Supports';
import SupportMulti from './index';

export default {
  title: 'Design System/02-Molecules/Display/SupportTabs',
  component: SupportTabs,
  argTypes: {
    tabs: { control: { type: 'object' }, defaultValue: dummySupportTabs },
    onPropChange: { action: 'login clicked' },
  },
} as Meta;

const Template: Story<SupportTabsProps> = ({ tabs, onPropChange }: SupportTabsProps) => (
  <SupportTabs tabs={tabs} onPropChange={onPropChange} />
);

export const Default = Template.bind({});
Default.args = {};

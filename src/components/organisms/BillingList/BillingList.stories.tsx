import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BillingListProps } from './BillingList.type';
import BillingList from '.';

export default {
  title: 'Design System/03-Organisms/Display/BillingList',
  component: BillingList,
} as Meta;

const Template: Story<BillingListProps> = () => <BillingList />;

export const Default = Template.bind({});
Default.args = {};

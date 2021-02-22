import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PricingProps } from './Pricing.type';
import Pricing from '.';

export default {
  title: 'Design System/03-Organisms/Payment/Pricing',
  component: Pricing,
} as Meta;

const Template: Story<PricingProps> = () => <Pricing />;

export const Default = Template.bind({});
Default.args = {};

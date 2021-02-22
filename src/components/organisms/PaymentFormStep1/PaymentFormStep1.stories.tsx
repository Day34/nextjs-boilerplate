import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PaymentFormStep1Props } from './PaymentFormStep1.type';
import PaymentFormStep1 from '.';

export default {
  title: 'Design System/03-Organisms/Payment/PaymentFormStep1',
  component: PaymentFormStep1,
} as Meta;

const Template: Story<PaymentFormStep1Props> = () => <PaymentFormStep1 />;

export const Default = Template.bind({});
Default.args = {};

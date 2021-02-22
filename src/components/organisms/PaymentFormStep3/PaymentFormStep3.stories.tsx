import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PaymentFormStep3Props } from './PaymentFormStep3.type';
import PaymentFormStep3 from '.';

export default {
  title: 'Design System/03-Organisms/Payment/PaymentFormStep3',
  component: PaymentFormStep3,
} as Meta;

const Template: Story<PaymentFormStep3Props> = () => <PaymentFormStep3 />;

export const Default = Template.bind({});
Default.args = {};

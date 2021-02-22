import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PaymentFormProps } from './PaymentFormForm.type';
import PaymentForm from '.';

export default {
  title: 'Design System/03-Organisms/Payment/PaymentForm',
  component: PaymentForm,
} as Meta;

const Template: Story<PaymentFormProps> = () => <PaymentForm />;

export const Default = Template.bind({});
Default.args = {};

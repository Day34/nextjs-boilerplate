import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ModalWithdrawalProps } from './ModalWithdrawal.type';
import ModalWithdrawal from '.';

export default {
  title: 'Design System/03-Organisms/Popup/ModalWithdrawal',
  component: ModalWithdrawal,
  argTypes: {
    open: { control: { type: 'boolean' }, defaultValue: true },
    onPropClose: { action: 'close action' },
  },
} as Meta;

const Template: Story<ModalWithdrawalProps> = ({ ...props }: ModalWithdrawalProps) => <ModalWithdrawal {...props} />;

export const Default = Template.bind({});
Default.args = {};

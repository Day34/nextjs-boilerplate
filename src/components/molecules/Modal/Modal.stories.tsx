import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Modal from './index';
import { ModalProps } from './Modal.type';

export default {
  title: 'Design System/02-Molecules/Uitils/Modal',
  component: Modal,
  argTypes: {
    open: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    onPropClose: { action: 'close action' },
  },
} as Meta;

const Template: Story<ModalProps> = ({ ...props }: ModalProps) => <Modal {...props} />;

export const Default = Template.bind({});
Default.args = {
  children: 'text',
};

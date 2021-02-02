import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ModalReportImaginaryNumberProps } from './ModalReportImaginaryNumber.type';
import ModalReportImaginaryNumber from '.';

export default {
  title: 'Design System/03-Organisms/Display/ModalReportImaginaryNumber',
  component: ModalReportImaginaryNumber,
  argTypes: {
    open: { control: { type: 'boolean' }, defaultValue: true },
    onPropClose: { action: 'close action' },
  },
} as Meta;

const Template: Story<ModalReportImaginaryNumberProps> = ({ ...props }: ModalReportImaginaryNumberProps) => (
  <ModalReportImaginaryNumber {...props} />
);

export const Default = Template.bind({});
Default.args = {};

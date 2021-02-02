import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ModalReleaseLinkProps } from './ModalReleaseLink.type';
import ModalReleaseLink from '.';

export default {
  title: 'Design System/03-Organisms/Display/ModalReleaseLink',
  component: ModalReleaseLink,
  argTypes: {
    open: { control: { type: 'boolean' }, defaultValue: true },
    onPropClose: { action: 'close action' },
  },
} as Meta;

const Template: Story<ModalReleaseLinkProps> = ({ ...props }: ModalReleaseLinkProps) => <ModalReleaseLink {...props} />;

export const Default = Template.bind({});
Default.args = {};

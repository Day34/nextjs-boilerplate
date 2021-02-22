import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { VisitUserProps } from './VisitUser.type';
import VisitUser from '.';

export default {
  title: 'Design System/03-Organisms/Report/VisitUser',
  component: VisitUser,
} as Meta;

const Template: Story<VisitUserProps> = () => <VisitUser />;

export const Default = Template.bind({});
Default.args = {};

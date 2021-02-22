import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { VisitPlatformProps } from './VisitPlatform.type';
import VisitPlatform from '.';

export default {
  title: 'Design System/03-Organisms/Report/VisitPlatform',
  component: VisitPlatform,
} as Meta;

const Template: Story<VisitPlatformProps> = () => <VisitPlatform />;

export const Default = Template.bind({});
Default.args = {};

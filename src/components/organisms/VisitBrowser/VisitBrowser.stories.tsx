import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { VisitBrowserProps } from './VisitBrowser.type';
import VisitBrowser from '.';

export default {
  title: 'Design System/03-Organisms/Report/VisitBrowser',
  component: VisitBrowser,
} as Meta;

const Template: Story<VisitBrowserProps> = () => <VisitBrowser />;

export const Default = Template.bind({});
Default.args = {};

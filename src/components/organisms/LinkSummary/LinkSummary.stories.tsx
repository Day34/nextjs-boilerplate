import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LinkSummaryProps } from './LinkSummary.type';
import LinkSummary from '.';

export default {
  title: 'Design System/03-Organisms/Display/LinkSummary',
  component: LinkSummary,
} as Meta;

const Template: Story<LinkSummaryProps> = () => <LinkSummary />;

export const Default = Template.bind({});
Default.args = {};

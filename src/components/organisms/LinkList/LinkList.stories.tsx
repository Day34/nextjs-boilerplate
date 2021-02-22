import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LinkListProps } from './LinkList.type';
import LinkList from '.';

export default {
  title: 'Design System/03-Organisms/Account/LinkList',
  component: LinkList,
} as Meta;

const Template: Story<LinkListProps> = () => <LinkList />;

export const Default = Template.bind({});
Default.args = {};

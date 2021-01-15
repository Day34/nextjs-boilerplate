import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HeaderProps } from './Header.type';
import Header from '.';

export default {
  title: 'Design System/03-Organisms/Display/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = () => <Header />;

export const Default = Template.bind({});
Default.args = {};

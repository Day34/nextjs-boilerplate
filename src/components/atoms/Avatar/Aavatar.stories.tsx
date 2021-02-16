import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import * as T from './Avatar.type';
import Avatar from './Avatar';

export default {
  title: 'Design System/01-Atoms/Display/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      control: { type: 'text' },
      defaultValue: 'http://rgo4.com/files/attach/images/2681740/158/890/029/afd813f3b8f37d0b37fa527c2052109a.jpg',
    },
    alt: {
      control: { type: 'text' },
      defaultValue: 'alt',
    },
  },
} as Meta;

const Template: Story<T.AvatarProps> = ({ ...props }: T.AvatarProps) => <Avatar {...props} />;

export const Default = Template.bind({});
Default.args = {};

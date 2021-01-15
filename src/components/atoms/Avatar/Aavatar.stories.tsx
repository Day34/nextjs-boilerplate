import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { AvatarProps } from './Avatar.type';
import Avatar from './Avatar';

export default {
  title: 'Design System/01-Atoms/Display/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = ({ src, alt }: AvatarProps) => <Avatar src={src} alt={alt} />;

export const Default = Template.bind({});
Default.args = {
  src: 'http://rgo4.com/files/attach/images/2681740/158/890/029/afd813f3b8f37d0b37fa527c2052109a.jpg',
  alt: 'alt',
};

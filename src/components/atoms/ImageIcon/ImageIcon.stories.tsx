import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { IconType, IconProps } from './ImageIcon.type';
import ImageIcon from '.';

export default {
  title: 'Design System/01-Atoms/Display/ImageIcon',
  component: ImageIcon,
  argTypes: {
    type: { control: { type: 'select', options: Object.values(IconType) }, defaultValue: 'logo' },
    flipVertical: { control: { type: 'boolean' } },
    flipHorizontal: { control: { type: 'boolean' } },
  },
} as Meta;

const Template: Story<IconProps> = ({ type, flipVertical, flipHorizontal }: IconProps) => (
  <ImageIcon type={type} flipVertical={flipVertical} flipHorizontal={flipHorizontal} />
);

export const Default = Template.bind({});
Default.args = {};

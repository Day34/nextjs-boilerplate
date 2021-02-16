import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import * as T from './ImageIcon.type';
import ImageIcon from '.';

export default {
  title: 'Design System/01-Atoms/Display/ImageIcon',
  component: ImageIcon,
  argTypes: {
    type: { control: { type: 'select', options: Object.values(T.IconType) }, defaultValue: 'logo' },
    flipVertical: { control: { type: 'boolean' } },
    flipHorizontal: { control: { type: 'boolean' } },
  },
} as Meta;

const Template: Story<T.IconProps> = ({ ...props }: T.IconProps) => <ImageIcon {...props} />;

export const Default = Template.bind({});
Default.args = {};

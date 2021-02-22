import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SimpleArticleProps } from './SimpleArticle.type';
import SimpleArticle from './index';

export default {
  title: 'Design System/03-Organisms/Post/SimpleArticle',
  component: SimpleArticle,
  argTypes: {
    html: { control: { type: 'string' }, defaultValue: '제목' },
  },
} as Meta;

const Template: Story<SimpleArticleProps> = ({ ...props }: SimpleArticleProps) => <SimpleArticle {...props} />;

export const Default = Template.bind({});
Default.args = {};

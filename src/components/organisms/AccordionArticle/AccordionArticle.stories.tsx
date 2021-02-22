import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { AccordionArticleProps } from './AccordionArticle.type';
import {
  SupportMulti as dummyAccordionArticle,
  SupportMultiCategory as dummyAccordionArticleCategory,
} from '@dummies/Supports';
import AccordionArticle from './index';

export default {
  title: 'Design System/03-Organisms/Post/AccordionArticle',
  component: AccordionArticle,
  argTypes: {
    categories: { control: { type: 'object' }, defaultValue: dummyAccordionArticleCategory },
    rows: { control: { type: 'object' }, defaultValue: dummyAccordionArticle },
  },
} as Meta;

const Template: Story<AccordionArticleProps> = ({ categories, rows }: AccordionArticleProps) => (
  <AccordionArticle categories={categories} rows={rows} />
);

export const Default = Template.bind({});
Default.args = {};

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LinkGeneratorStep1Props } from './LinkGeneratorStep1.type';
import LinkGeneratorStep1 from './index';

export default {
  title: 'Design System/03-Organisms/Link/LinkGeneratorStep1',
  component: LinkGeneratorStep1,
  argTypes: {
    sourceLink: { control: { type: 'text' }, defaultValue: '' },
    onPropNext: { action: 'next clicked' },
  },
} as Meta;

const Template: Story<LinkGeneratorStep1Props> = ({ sourceLink, onPropNext }: LinkGeneratorStep1Props) => (
  <LinkGeneratorStep1 sourceLink={sourceLink} onPropNext={onPropNext} />
);

export const Default = Template.bind({});
Default.args = {};

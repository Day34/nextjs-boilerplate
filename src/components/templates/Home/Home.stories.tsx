import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HomeProps } from './Home.type';
import LinkGenerator from '.';
import { LinkRank as dummyLinkRank, LinkRcommand as dumyLinkRecommand } from '@dummies/Link';

export default {
  title: 'Design System/04-Templates/Display/Home',
  component: LinkGenerator,
  argTypes: {
    rank: { control: { type: 'object' }, defaultValue: dummyLinkRank },
    recommand: { control: { type: 'object' }, defaultValue: dumyLinkRecommand },
  },
} as Meta;

const Template: Story<HomeProps> = ({ rank, recommand }: HomeProps) => (
  <LinkGenerator rank={rank} recommand={recommand} />
);

export const Default = Template.bind({});
Default.args = {};

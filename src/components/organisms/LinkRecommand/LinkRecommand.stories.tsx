import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LinkRecommandProps } from './LinkRecommand.type';
import LinkRecommand from '.';
import { LinkRcommand as dummyLinkRcommand } from '@dummies/Link';

export default {
  title: 'Design System/03-Organisms/Display/LinkRecommand',
  component: LinkRecommand,
  argTypes: {
    rows: { control: { type: 'object' }, defaultValue: dummyLinkRcommand },
  },
} as Meta;

const Template: Story<LinkRecommandProps> = ({ rows }: LinkRecommandProps) => <LinkRecommand rows={rows} />;

export const Default = Template.bind({});
Default.args = {};

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import * as T from './GenericTemplate.type';
import GenericTemplate from '.';

export default {
  title: 'Design System/04-Templates/GenericTemplate',
  component: GenericTemplate,
  argTypes: {},
} as Meta;

const Template = () => (
  <GenericTemplate>
    <p>Chidren</p>
  </GenericTemplate>
);

export const Default = Template.bind({});
Default.args = {};

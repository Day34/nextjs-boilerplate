import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { AccountProps } from './Account.type';
import Account from '.';

export default {
  title: 'Design System/03-Organisms/Account/Account',
  component: Account,
} as Meta;

const Template: Story<AccountProps> = () => <Account />;

export const Default = Template.bind({});
Default.args = {};

/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import Account from '.';
export default {
  component: Account,
  title: 'Header/Account',
};

const Template = (args) => <Account {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  auth: { loading: false, user: { name: 'Wallon CG' } },
};
export const LoggedOut = Template.bind({});
LoggedOut.args = {
  auth: { loading: false, user: null },
};

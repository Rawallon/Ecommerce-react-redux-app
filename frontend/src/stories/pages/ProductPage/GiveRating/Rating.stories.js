/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import GiveRating from '.';

export default {
  component: GiveRating,
  title: 'Product Page/Rating',
};

const Template = (args) => <GiveRating {...args} />;

export const Default = Template.bind({});
Default.args = {};

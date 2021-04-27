/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import Rating from '.';

export default {
  component: Rating,
  title: 'Rating',
};

const Template = (args) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {
  bsIcon: true,
  rating: '3.5',
  count: '10',
};
export const NoCount = Template.bind({});
NoCount.args = {
  bsIcon: true,
  rating: '2.5',
};
export const RedStar = Template.bind({});
RedStar.args = {
  bsIcon: true,
  rating: '3.5',
  count: '2',
  color: 'red',
};

/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import OverallRating from '.';

export default {
  component: OverallRating,
  title: 'Product Page/Overall Rating',
};

const Template = (args) => <OverallRating {...args} />;

export const Default = Template.bind({});
Default.args = {
  product: {
    reviews: [
      {
        rating: '3',
      },
      {
        rating: '1',
      },
      {
        rating: '5',
      },
      {
        rating: '5',
      },
      {
        rating: '5',
      },
      {
        rating: '3',
      },
      {
        rating: '5',
      },
      {
        rating: '2',
      },
      {
        rating: '2',
      },
      {
        rating: '4',
      },
    ],
  },
};

/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import img from '../../../public/airpods.jpg';
import Cart from '.';
export default {
  component: Cart,
  title: 'Header/Cart',
};

const Template = (args) => <Cart {...args} />;

export const NoItems = Template.bind({});
NoItems.args = {
  items: [],
};
export const Default = Template.bind({});
Default.args = {
  items: [
    {
      name: 'Skull Tee',
      qty: '2',
      price: '130',
      image: img,
    },
    {
      name: 'Transparent Blouse',
      qty: '1',
      price: '55',
      image: img,
    },
    {
      name: 'Stubbs the Zombie in Rebel Without a Pulse',
      qty: '1',
      price: '55',
      image: img,
    },
  ],
};

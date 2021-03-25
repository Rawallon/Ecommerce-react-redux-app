/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import Product from '.';
import image from './airpods.jpg';

export default {
  component: Product,
  title: 'Product card',
};

const Template = (args) => <Product {...args} />;

export const Default = Template.bind({});
Default.args = {
  numInStock: true,
  category: 'Sneakers & Keds',
  name: 'Women Colorblock Sneakers',
  price: '220',
  rating: '3.5',
  image,
  _id: '1',
};

export const NoButtons = Template.bind({});
NoButtons.args = {
  showButtons: false,
  numInStock: true,
  category: 'Sneakers & Keds',
  name: 'Women Colorblock Sneakers',
  price: '220',
  rating: '3.5',
  image,
  _id: '1',
};

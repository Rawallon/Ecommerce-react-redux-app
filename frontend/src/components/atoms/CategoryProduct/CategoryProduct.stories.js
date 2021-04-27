/* eslint-disable import/no-anonymous-default-export */

import React from 'react';

import CategoryProduct from '.';
import image from '../../public/airpods.jpg';

export default {
  component: CategoryProduct,
  title: 'Category product',
};

const Template = (args) => <CategoryProduct {...args} />;
//  TODO on sale
//  no stock
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
  simple: true,
  numInStock: true,
  category: 'Sneakers & Keds',
  name: 'Women Colorblock Sneakers',
  price: '220',
  rating: '3.5',
  image,
  _id: '1',
};

export const onSale = Template.bind({});
onSale.args = {
  numInStock: true,
  category: 'Sneakers & Keds',
  name: 'Women Colorblock Sneakers',
  oldPrice: '100',
  price: '50',
  rating: '3.5',
  image,
  _id: '1',
};

export const badge = Template.bind({});
badge.args = {
  numInStock: true,
  category: 'Sneakers & Keds',
  name: 'Women Colorblock Sneakers',
  badge: ['Fresh', '#3494e6'],
  price: '50',
  rating: '3.5',
  image,
  _id: '1',
};

export const NoStock = Template.bind({});
NoStock.args = {
  numInStock: false,
  category: 'Sneakers & Keds',
  name: 'Women Colorblock Sneakers',
  price: '220',
  badge: ['Out of stock', '#F7F8FA', '#222'],
  rating: '3.5',
  image,
  _id: '1',
};

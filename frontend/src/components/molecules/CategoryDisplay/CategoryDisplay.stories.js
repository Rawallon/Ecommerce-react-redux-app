/* eslint-disable import/no-anonymous-default-export */

import React from 'react';

import ItemBanner from '.';
import HoodiesImg from '../../public/hoodies.jpg';
import pImage from '../../public/airpods.jpg';

export default {
  component: ItemBanner,
  title: 'Category display',
};

const Template = (args) => <ItemBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: 'https://via.placeholder.com/720x850',
  titleFeature: 'Hoodie day',
  pImage,
  title: 'Hoodie',
  categoryName: 'hoodies',
  background: '#e2e9ef',
  item: {
    showButtons: false,
    numInStock: true,
    category: 'Sneakers & Keds',
    name: 'Women Colorblock Sneakers',
    price: Number(Math.random() * 300).toFixed(2),
    rating: Number(Math.random() * 3).toFixed(2),
    pImage,
    _id: '1',
  },
};
export const DefaultWithItems = Template.bind({});
DefaultWithItems.args = {
  product: true,
  image: HoodiesImg,
  pImage,
  titleFeature: 'Hoodie day',
  title: 'Hoodie',
  categoryName: 'hoodies',
  background: '#e2e9ef',
  item: {
    showButtons: false,
    numInStock: true,
    category: 'Sneakers & Keds',
    name: 'Women Colorblock Sneakers',
    price: Number(Math.random() * 300).toFixed(2),
    rating: Number(Math.random() * 3).toFixed(2),
    image: pImage,
    _id: '1',
  },
};

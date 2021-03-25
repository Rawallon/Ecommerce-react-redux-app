/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import CategoriesDetails from '.';
export default {
  component: CategoriesDetails,
  title: 'Header/CategoriesDetails',
};

const Template = (args) => <CategoriesDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  categoryButton: 'Browse all action games',
  categoryTitle: 'Discover action games',
  products: Array(6).fill({
    showButtons: false,
    showCategory: false,
    numInStock: true,
    category: 'Sneakers & Keds',
    name: 'Women Colorblock Sneakers',
    price: Number(Math.random() * 300).toFixed(2),
    rating: Number(Math.random() * 3).toFixed(2),
    image: 'https://via.placeholder.com/640x510',
    _id: '1',
  }),
};

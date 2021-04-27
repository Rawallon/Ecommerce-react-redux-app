/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import Categories from '.';
export default {
  component: Categories,
  title: 'Header/Categories',
};

const Template = (args) => <Categories {...args} />;

export const Default = Template.bind({});
Default.args = {
  categories: [
    { name: 'Components', link: '#' },
    { name: 'Computer Systems', link: '#' },
    { name: 'Electronics', link: '#' },
    { name: 'Gaming', link: '#' },
    { name: 'Networking', link: '#' },
    { name: 'Office Solutions', link: '#' },
    { name: 'Software & Services', link: '#' },
    { name: 'Home & Tools', link: '#' },
    { name: 'Health & Sports', link: '#' },
    { name: 'Apparel & Accessories', link: '#' },
  ],
};

/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import Header from '.';
export default {
  component: Header,
  title: 'Header/Header',
};

const Template = (args) => <Header {...args} />;

const categories = [
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
];

export const LoggedWithItems = Template.bind({});
LoggedWithItems.args = {
  auth: { loading: false, user: { name: 'Wallon CG' } },
  itemsOnCart: [
    {
      name: 'Skull Tee',
      qty: '2',
      price: '130',
      image:
        'https://a-static.mlcdn.com.br/102x76/smart-tv-led-43-lg-43lm6300psb-full-hd-wi-fi-inteligencia-artificial-3-hdmi-2-usb/magazineluiza/193428600/fe7e77b8a185e55d1fff375f5759fdee.jpg',
    },
    {
      name: 'Transparent Blouse',
      qty: '1',
      price: '55',
      image:
        'https://a-static.mlcdn.com.br/102x76/smartphone-samsung-galaxy-a12-64gb-preto-4g-octa-core-4gb-ram-65-cam-quadrupla-selfie-8mp/magazineluiza/155615900/56c162eaa6c24877dca0afa962128363.jpg',
    },
  ],
  categories: categories,
};

export const NotLoggedEmptyCart = Template.bind({});
NotLoggedEmptyCart.args = {
  auth: { loading: false, user: null },
  itemsOnCart: [],
  categories: categories,
};

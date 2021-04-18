import React from 'react';

import ItemCarousel from '.';
import pImage from '../../public/airpods.jpg';

export default {
  component: ItemCarousel,
  title: 'Carousel Item',
};

const Template = (args) => <ItemCarousel {...args} />;

const fakeItems = Array(5).fill({
  showButtons: false,
  numInStock: true,
  category: 'Sneakers & Keds',
  name: 'Women Colorblock Sneakers',
  price: Number(Math.random() * 300).toFixed(2),
  rating: Number(Math.random() * 3).toFixed(2),
  image: pImage,
  _id: '1',
  bgColor: 'f5f5f5',
  nameColor: '000',
  btnColor: 'fe696a',
  btnColorHover: 'fe3638',
});

export const Default = Template.bind({});
Default.args = {
  items: fakeItems,
  duration: 30000,
};

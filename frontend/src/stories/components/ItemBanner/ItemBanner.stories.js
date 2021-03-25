/* eslint-disable import/no-anonymous-default-export */

import React from 'react';

import ItemBanner from '.';
import image from './banner.jpg';
import image2 from './banner2.jpg';

export default {
  component: ItemBanner,
  title: 'Item banner',
  argTypes: {
    background: { control: 'color' },
  },
};

const Template = (args) => <ItemBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  background: '#f6f9fc',
  sub: 'Hurry up! Limited time offer  ',
  title: 'Converse All Star on Sale ',
  button: 'Shop Now',
  image,
};

export const Default2 = Template.bind({});
Default2.args = {
  background: '#fff',
  sub: 'Product launch discount!  ',
  title: 'Apple Watch on Sale ',
  button: 'Get Now',
  image: image2,
};

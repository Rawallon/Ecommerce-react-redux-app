/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import Carousel from '.';

export default {
  component: Carousel,
  title: 'Carousel',
};

const Template = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = [
  {
    link: '#',
    img: 'https://via.placeholder.com/1320x460/e6e6e6',
    color: 'e6e6e6',
  },
  {
    link: '#',
    img: 'https://via.placeholder.com/1320x460/FFFF00',
    color: 'FFFF00',
  },
  {
    link: '#',
    img: 'https://via.placeholder.com/1320x460/ADFF2F',
    color: 'ADFF2F',
  },
  {
    link: '#',
    img: 'https://via.placeholder.com/1320x460/FFDAB9',
    color: 'FFDAB9',
  },
];

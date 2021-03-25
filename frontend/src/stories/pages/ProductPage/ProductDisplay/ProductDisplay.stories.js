/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import Quantity from '.';
import air from '../../../public/airpods.jpg';
import alexa from '../../../public/alexa.jpg';
import camera from '../../../public/camera.jpg';
export default {
  component: Quantity,
  title: 'Product Page/Product Display',
};

const Template = (args) => <Quantity {...args} />;

export const Default = Template.bind({});
Default.args = {
  pDispData: {
    slider: false,
    images: [air, alexa, camera, air],
  },
};

import React from 'react';

import PictureDisplay from '.';
import air from '../../../public/airpods.jpg';
import alexa from '../../../public/alexa.jpg';
import camera from '../../../public/camera.jpg';

export default {
  component: PictureDisplay,
  title: 'Product Page/Picture Display',
};

const Template = (args) => <PictureDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  slider: false,
  images: [air, alexa, camera, air],
};

export const SliderOnly = Template.bind({});
SliderOnly.args = {
  slider: true,
  images: [air, alexa, camera, air],
};

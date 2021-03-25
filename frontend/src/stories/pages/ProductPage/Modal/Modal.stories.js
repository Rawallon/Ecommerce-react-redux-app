/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import Modal from '.';
import air from '../../../public/airpods.jpg';
import alexa from '../../../public/alexa.jpg';
import camera from '../../../public/camera.jpg';
export default {
  component: Modal,
  title: 'Product Page/Modal',
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  pDispData: {
    slider: false,
    images: [air, alexa, camera, air],
  },
};

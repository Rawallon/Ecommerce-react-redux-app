/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import Quantity from '.';
export default {
  component: Quantity,
  title: 'Product Page/Quantity',
};

const Template = (args) => <Quantity {...args} />;

export const Default = Template.bind({});
Default.args = {
  numInStock: 20,
};

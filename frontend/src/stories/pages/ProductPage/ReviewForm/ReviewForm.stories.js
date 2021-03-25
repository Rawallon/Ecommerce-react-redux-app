/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import ReviewForm from '.';

export default {
  component: ReviewForm,
  title: 'Product Page/Review Form',
};

const Template = (args) => <ReviewForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  setIsReviewing: () => {},
};

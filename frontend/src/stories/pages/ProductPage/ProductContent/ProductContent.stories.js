/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import ProductContent from '.';

export default {
  component: ProductContent,
  title: 'Product Page/Product Content',
};

const Template = (args) => <ProductContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  product: {
    description:
      'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
    reviews: [
      {
        rating: '4',
        name: 'Paul',
        title: 'Good',
        comment: 'what the title says',
        createdAt: '2021-03-10T01:34:50.913+00:00',
      },
      {
        rating: '3',
        name: 'John',
        title: 'Ok',
        comment: 'Whatever',
        createdAt: '2021-03-10T01:34:50.913+00:00',
      },
      {
        rating: '1',
        name: 'Breno',
        title: 'No bueno',
        comment: 'yikes',
        createdAt: '2021-03-10T01:34:50.913+00:00',
      },
      {
        rating: '5',
        name: 'Stevie',
        title: 'So good',
        comment: 'it got me good',
        createdAt: '2021-03-10T01:34:50.913+00:00',
      },
      {
        rating: '5',
        name: 'Habacookie',
        title: 'Alrighy',
        comment: 'it is what it is',
        createdAt: '2021-03-10T01:34:50.913+00:00',
      },
      {
        rating: '5',
        name: 'Habacookie',
        title: 'Alrighy',
        comment: 'it is what it is',
        createdAt: '2021-03-10T01:34:50.913+00:00',
      },
      {
        rating: '2',
        name: 'Don Juan',
        title: 'Awesome',
        comment: 'Works as intended',
        createdAt: '2021-03-10T01:34:50.913+00:00',
      },
      {
        rating: '2',
        name: 'Not Don',
        title: 'Not really awesome',
        comment: 'it only works sometimes',
        createdAt: '2021-03-10T01:34:50.913+00:00',
      },
    ],
  },
};

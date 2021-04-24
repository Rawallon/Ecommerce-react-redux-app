import React from 'react';
import { Wrapper } from './ProductDisplay.style';
import { Container } from '../../../GlobalStyle.style';

import PictureDisplay from '../PictureDisplay/';
import ProductData from '../ProductData/';

export default function ProductDisplay({ images, product, addToCart }) {
  return (
    <Container>
      <Wrapper>
        <PictureDisplay images={images} />
        <ProductData showDesc={false} addToCart={addToCart} {...product} />
      </Wrapper>
    </Container>
  );
}

import React from 'react';

import { Wrapper } from './ProductDisplay.style';
import { Container } from '../../../styles/main.styles';
import PictureDisplay from '../../atoms/PictureDisplay';
import ProductData from '../ProductData';

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

import React from 'react';
import { Wrapper } from './ProductDisplay.style';
import { Container } from '../../../GlobalStyle.style';

import PictureDisplay from '../PictureDisplay/';
import ProductData from '../ProductData/';

export default function index({ pDispData }) {
  return (
    <Container>
      <Wrapper>
        <PictureDisplay {...pDispData} />
        <ProductData showDesc={false} />
      </Wrapper>
    </Container>
  );
}

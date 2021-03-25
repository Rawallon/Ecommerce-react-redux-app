import React from 'react';
import { Wrapper } from './Modal.style';
import { Container } from '../../../GlobalStyle.style';

import PictureDisplay from '../PictureDisplay/';
import ProductData from '../ProductData/';

export default function Modal({ pDispData }) {
  return (
    <Container>
      <Wrapper>
        <PictureDisplay {...pDispData} />
        <ProductData />
      </Wrapper>
    </Container>
  );
}

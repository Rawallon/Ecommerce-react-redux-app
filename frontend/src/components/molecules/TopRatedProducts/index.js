import React from 'react';

import { Col, Row } from '../../../styles/bootstrap.style';
import { HeaderText } from '../../../styles/main.styles';
import { TopRated } from './TopRatedProducts.style';

import CategoryProduct from '../../atoms/CategoryProduct';

export default function TopRatedProducts({ productTopRated }) {
  const { loading, products } = productTopRated;

  if (loading) return null;

  return (
    <TopRated>
      <HeaderText textAlign={'center'}>Our top rated products</HeaderText>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm md lg>
            <CategoryProduct {...product} />
          </Col>
        ))}
      </Row>
    </TopRated>
  );
}

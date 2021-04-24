import React from 'react';

import { Hr, StyledButton } from '../../../GlobalStyle.style';
import {
  Column,
  ContentWrapper,
  Row,
  Title,
  RowWrapper,
} from './CategoryDetails.style';
import Product from '../../../components/CategoryProduct';
import Loader from '../../../../components/Loader';
import { Link } from 'react-router-dom';

export default function CategoryDetails({ hoveredCat, featuredItems }) {
  const { loading, featuredProducts } = featuredItems;

  const renderProducts = () => {
    if (loading)
      return Array(3)
        .fill()
        .map((_, index) => (
          <Row key={index}>
            <Column>
              <Loader />
            </Column>
          </Row>
        ));

    return featuredProducts.map((p) => (
      <Row key={p.name}>
        <Column>
          <Product {...p} showButtons={false} />
        </Column>
      </Row>
    ));
  };
  return (
    <ContentWrapper>
      <Title>Discover {hoveredCat}</Title>
      <RowWrapper>{renderProducts()}</RowWrapper>
      <Hr marginTop={1} />
      <Link to={'/category/' + hoveredCat}>
        <StyledButton>Browse all {hoveredCat}</StyledButton>
      </Link>
    </ContentWrapper>
  );
}

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
export default function CategoryDetails({
  categoryTitle,
  categoryButton,
  products,
}) {
  const dummyData = {
    categoryButton: 'Browse all action games',
    categoryTitle: 'Discover action games',
    products: Array(6).fill({
      showButtons: false,
      showCategory: false,
      numInStock: true,
      category: 'Sneakers & Keds',
      name: 'Women Colorblock Sneakers',
      price: Number(Math.random() * 300).toFixed(2),
      rating: Number(Math.random() * 3).toFixed(2),
      image: 'https://via.placeholder.com/640x510',
      _id: '1',
    }),
  };
  const renderRowProducts = (init, final) =>
    dummyData.products.slice(init, final).map((p) => (
      <Column key={p.name}>
        <Product {...p} />
      </Column>
    ));
  return (
    <ContentWrapper>
      <Title>{dummyData.categoryTitle}</Title>
      <RowWrapper>
        {dummyData.products.length >= 2 ? (
          <Row>{renderRowProducts(0, 1)}</Row>
        ) : (
          <></>
        )}
        {dummyData.products.length >= 4 ? (
          <Row>{renderRowProducts(1, 2)}</Row>
        ) : (
          <></>
        )}
        {dummyData.products.length >= 6 ? (
          <Row>{renderRowProducts(2, 3)}</Row>
        ) : (
          <></>
        )}
      </RowWrapper>
      <Hr marginTop={1} />
      <StyledButton>{dummyData.categoryButton}</StyledButton>
    </ContentWrapper>
  );
}

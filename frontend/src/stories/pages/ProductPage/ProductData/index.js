import React from 'react';
import {
  FlexBetween,
  PriceTag,
  ProductTitle,
  Wrapper,
  FlexRow,
  ProductDesc,
  CartButton,
  ColorDiv,
  CategoriesList,
  DataWrapper,
} from './ProductData.style';
import Rating from '../../../components/Rating/';
import Quantity from '../Quantity/';

export default function ProductData({ pDispData, showDesc = true }) {
  return (
    <Wrapper>
      <ProductTitle>Product Title</ProductTitle>
      <FlexBetween>
        <PriceTag>$30.00</PriceTag>
        <Rating rating="3.5" count="10" />
      </FlexBetween>
      {showDesc && (
        <ProductDesc>
          Go sporty this summer with this vintage navy and white striped v-neck
          t-shirt from the Nike. Perfect for pairing with denim and white kicks
          for a stylish sporty vibe.
        </ProductDesc>
      )}
      <FlexRow>
        Color:
        <ColorDiv active color="blue" />
        <ColorDiv color="red" />
      </FlexRow>
      <FlexRow>
        <Quantity numInStock="5" />
        <CartButton>Add to Cart</CartButton>
      </FlexRow>
      <DataWrapper>
        <CategoriesList>
          <span>SKU:</span>
          <a href="#">N/A</a>
        </CategoriesList>
        <CategoriesList>
          <span>Categories:</span>
          <a href="#">Women</a>
        </CategoriesList>
      </DataWrapper>
    </Wrapper>
  );
}

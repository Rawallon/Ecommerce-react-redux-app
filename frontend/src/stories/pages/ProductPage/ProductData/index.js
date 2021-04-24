import React, { useState } from 'react';
import {
  FlexBetween,
  PriceTag,
  ProductTitle,
  Wrapper,
  FlexRow,
  ProductDesc,
  CartButton,
  CategoriesList,
  DataWrapper,
} from './ProductData.style';
import Rating from '../../../components/Rating/';
import Quantity from '../Quantity/';
import { Link } from 'react-router-dom';

export default function ProductData({
  addToCart,
  showDesc = true,
  name,
  price,
  rating,
  numReviews,
  description,
  countInStock,
  category,
  _id,
}) {
  const [qty, setQty] = useState(1);

  return (
    <Wrapper>
      <ProductTitle>{name}</ProductTitle>
      <FlexBetween>
        <PriceTag>$ {price}</PriceTag>
        <Rating rating={rating} count={numReviews} />
      </FlexBetween>
      {showDesc && <ProductDesc>{description}</ProductDesc>}
      {/* <FlexRow>
        Color:
        <ColorDiv active color="blue" />
        <ColorDiv color="red" />
      </FlexRow> */}
      <FlexRow>
        <Quantity qty={qty} setQty={setQty} numInStock={countInStock} />
        <CartButton onClick={() => addToCart(_id, qty)}>Add to Cart</CartButton>
      </FlexRow>
      <DataWrapper>
        <CategoriesList>
          <span>SKU:</span>
          <p>{_id}</p>
        </CategoriesList>
        <CategoriesList>
          <span>Categories:</span>
          <Link to={'/category/' + category}>{category}</Link>
        </CategoriesList>
      </DataWrapper>
    </Wrapper>
  );
}

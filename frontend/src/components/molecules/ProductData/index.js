import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
  CartButtonDisabled,
} from './ProductData.style';
import Quantity from '../../atoms/Quantity';
import Rating from '../../atoms/Rating';

export default function ProductData({
  showLinks = false,
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
      {showLinks ? (
        <Link to={'/product/' + _id}>
          <ProductTitle>{name}</ProductTitle>
        </Link>
      ) : (
        <ProductTitle>{name}</ProductTitle>
      )}
      <FlexBetween>
        <PriceTag>$ {price}</PriceTag>
        <Rating rating={rating} count={numReviews} />
      </FlexBetween>
      {showDesc && <ProductDesc>{description}</ProductDesc>}
      {/* 
      // This is commented out since it isn't implemented in the backend
      <FlexRow>
        Color:
        <ColorDiv active color="blue" />
        <ColorDiv color="red" />
      </FlexRow> */}
      {countInStock > 0 ? (
        <FlexRow>
          <Quantity qty={qty} setQty={setQty} numInStock={countInStock} />
          <CartButton onClick={() => addToCart(_id, qty)}>
            Add to Cart
          </CartButton>
        </FlexRow>
      ) : (
        <FlexRow>
          <Quantity qty={0} numInStock={0} />
          <CartButtonDisabled>Out of stock</CartButtonDisabled>
        </FlexRow>
      )}
      <DataWrapper>
        <CategoriesList>
          {showLinks ? (
            <Link to={'/product/' + _id}>
              <span>SKU:</span>
              <p>{_id}</p>
            </Link>
          ) : (
            <>
              <span>SKU:</span>
              <p>{_id}</p>
            </>
          )}
        </CategoriesList>
        <CategoriesList>
          <span>Category:</span>
          <Link to={'/category/' + category}>{category}</Link>
        </CategoriesList>
      </DataWrapper>
    </Wrapper>
  );
}

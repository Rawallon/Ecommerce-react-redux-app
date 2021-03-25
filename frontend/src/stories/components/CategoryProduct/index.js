import React from 'react';

import {
  Card,
  Cardimg,
  CardBody,
  CardRow,
  CardButton,
  PriceSpan,
  NoStockSpan,
  CardSecondaryButton,
  CardButtonDisabled,
  CardButtonsHidden,
  PriceDiv,
  OnSaleBage,
} from './CategoryProduct.style';
import Rating from '../Rating/';

export default function CategoryProduct({
  _id,
  category,
  name,
  image,
  badge,
  oldPrice,
  price,
  rating,
  numInStock,
  showButtons = true,
  showCategory = true,
}) {
  const renderButtons = () => {
    const viewBtn = (
      <CardSecondaryButton inStock={numInStock > 0}>
        Quick View
      </CardSecondaryButton>
    );

    if (numInStock) {
      return (
        <CardButtonsHidden>
          <CardButton>Add to cart</CardButton>
          {viewBtn}
        </CardButtonsHidden>
      );
    } else {
      return (
        <CardButtonsHidden>
          <CardButtonDisabled>View details</CardButtonDisabled>
          {viewBtn}
        </CardButtonsHidden>
      );
    }
  };
  return (
    <Card simple={!showButtons}>
      {oldPrice && <OnSaleBage>Sale</OnSaleBage>}
      {badge && (
        <OnSaleBage color={badge[1]} font={badge[2]}>
          {badge[0]}
        </OnSaleBage>
      )}
      <Cardimg href={`/product/${_id}`}>
        <img src={image} alt="" />
      </Cardimg>
      <CardBody>
        {showCategory && (
          <span>
            <a href={`/category/${category}`}>{category}</a>
          </span>
        )}
        <h3>
          <a href={`/product/${_id}`}>{name}</a>
        </h3>
        <CardRow inStock={numInStock > 0}>
          {numInStock ? (
            <PriceDiv>
              <PriceSpan>
                ${price.split('.')[0]}.
                <small>{price.split('.')[1] || '00'}</small>
              </PriceSpan>
              {oldPrice && (
                <PriceSpan disabled>
                  ${oldPrice.split('.')[0]}.
                  <small>{oldPrice.split('.')[1] || '00'}</small>
                </PriceSpan>
              )}
            </PriceDiv>
          ) : (
            <NoStockSpan>Out of stock</NoStockSpan>
          )}
          <Rating rating={rating} />
          {renderButtons()}
        </CardRow>
      </CardBody>
    </Card>
  );
}

import React from 'react';
import { connect } from 'react-redux';

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
import { addToCart } from '../../../actions/cartActions';
import { useHistory } from 'react-router';

export const CategoryProduct = ({
  addToCart,
  loading,
  _id,
  category,
  name,
  image,
  badge,
  oldPrice,
  price,
  rating,
  countInStock,
  showButtons = true,
  showCategory = true,
}) => {
  let history = useHistory();
  function addToCartHandler(pId) {
    addToCart(pId);
    history.push('/cart');
  }
  const renderButtons = () => {
    const viewBtn = (
      <CardSecondaryButton inStock={countInStock > 0}>
        Quick View
      </CardSecondaryButton>
    );

    if (countInStock) {
      return (
        <CardButtonsHidden>
          <CardButton onClick={() => addToCartHandler(_id)}>
            Add to cart
          </CardButton>
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

  if (loading) return null;
  else
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
          <CardRow inStock={countInStock > 0}>
            {countInStock ? (
              <PriceDiv>
                <PriceSpan>
                  ${price.toString().split('.')[0]}.
                  <small>{price.toString().split('.')[1] || '00'}</small>
                </PriceSpan>
                {oldPrice && (
                  <PriceSpan disabled>
                    ${oldPrice.toString().split('.')[0]}.
                    <small>{oldPrice.toString().split('.')[1] || '00'}</small>
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
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryProduct);

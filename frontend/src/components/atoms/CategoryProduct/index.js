import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';

import { listProductModalDetails } from '../../../actions/productActions';
import { addToCart } from '../../../actions/cartActions';

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

import Rating from '../Rating';

export const CategoryProduct = ({
  small = false,
  addToCart,
  listProductModalDetails,
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
    if (countInStock) {
      return (
        <CardButtonsHidden>
          <CardButton onClick={() => addToCartHandler(_id)}>
            Add to cart
          </CardButton>
          <CardSecondaryButton
            inStock={countInStock > 0}
            onClick={() => listProductModalDetails(_id)}>
            Quick View
          </CardSecondaryButton>
        </CardButtonsHidden>
      );
    } else {
      return (
        <CardButtonsHidden>
          <CardButtonDisabled>View details</CardButtonDisabled>
          <CardSecondaryButton
            inStock={countInStock > 0}
            onClick={() => listProductModalDetails(_id)}>
            Quick View
          </CardSecondaryButton>
        </CardButtonsHidden>
      );
    }
  };

  if (loading) return null;
  else
    return (
      <Card small={small} simple={!showButtons}>
        {oldPrice && <OnSaleBage right>Sale</OnSaleBage>}
        {countInStock === 0 && (
          <OnSaleBage right color={'#f3f5f9'} font={'#4b566b'}>
            Out of stock
          </OnSaleBage>
        )}
        {badge && (
          <OnSaleBage color={badge[1]} font={badge[2]}>
            {badge[0]}
          </OnSaleBage>
        )}
        <Cardimg to={`/product/${_id}`}>
          <img src={image} alt="" />
        </Cardimg>
        <CardBody>
          {showCategory && (
            <span>
              <Link to={`/category/${category}`}>{category}</Link>
            </span>
          )}
          <h3>
            <Link to={`/product/${_id}`}>{name}</Link>
          </h3>
          <CardRow inStock={countInStock > 0}>
            {countInStock ? (
              <PriceDiv>
                <PriceSpan>
                  $ {price.toString().split('.')[0]}.
                  <small>{price.toString().split('.')[1] || '00'}</small>
                </PriceSpan>
                {oldPrice && (
                  <PriceSpan disabled>
                    $ {oldPrice.toString().split('.')[0]}.
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

const mapDispatchToProps = {
  addToCart,
  listProductModalDetails,
};

export default connect(null, mapDispatchToProps)(CategoryProduct);

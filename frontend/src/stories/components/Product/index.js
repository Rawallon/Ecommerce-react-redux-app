import React from 'react';
import {
  Card,
  Cardimg,
  CardBody,
  CardRow,
  CardButton,
  CardSecondaryButton,
  CardButtonDisabled,
} from './Product.style';
import Rating from '../Rating/';

function Product({
  _id,
  category,
  name,
  image,
  price,
  rating,
  numInStock,
  showButtons = true,
}) {
  const renderButtons = () => {
    const viewBtn = (
      <CardSecondaryButton inStock={numInStock > 0}>
        Quick View
      </CardSecondaryButton>
    );

    if (numInStock) {
      return (
        <>
          <CardButton>Add to cart</CardButton>
          {viewBtn}
        </>
      );
    } else {
      return (
        <>
          <CardButtonDisabled>View details</CardButtonDisabled>
          {viewBtn}
        </>
      );
    }
  };
  return (
    <Card>
      <Cardimg href={`/product/${_id}`}>
        <img src={image} alt="" />
      </Cardimg>
      <CardBody>
        <span>
          <a href={`/category/${category}`}>{category}</a>
        </span>
        <h3>
          <a href={`/product/${_id}`}>{name}</a>
        </h3>
        <CardRow inStock={numInStock > 0}>
          {numInStock ? <span>${price}</span> : <span>Out of stock</span>}
          <Rating rating={rating} />
        </CardRow>
        {showButtons && renderButtons()}
      </CardBody>
    </Card>
  );
}

export default Product;

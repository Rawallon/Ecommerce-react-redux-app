import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { listProductCart } from '../../../actions/cartActions';

import { CartItemWrapper, ListGroupItem } from './CheckoutProduct.styles';

import Prefetch from '../../molecules/Prefetch';

export const CheckoutProduct = ({
  product = [],
  listProductCart,
  pId,
  qty,
  propPrice,
  propQty,
}) => {
  const { loading, error } = product;

  useEffect(() => {
    listProductCart(pId);
  }, [listProductCart, pId]);

  // The value of the item should be store when the order is made (in case it changes later)
  // In case something goes haywire and the value isn't stored with the order it will display the item's current price
  function renderPrice() {
    if (propPrice && propQty)
      return (
        <>
          {propQty} x ${propPrice} = ${Number(propQty * propPrice).toFixed(2)}
        </>
      );
    else
      return (
        <>
          {qty} x ${product.price} = ${Number(qty * product.price).toFixed(2)}
        </>
      );
  }

  return (
    <>
      <Prefetch loading={loading} error={error} />
      {product && (
        <ListGroupItem>
          <CartItemWrapper>
            <Link to={`/product/${product._id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <Link to={`/product/${product._id}`}>{product.name}</Link>
            <div>{renderPrice()}</div>
          </CartItemWrapper>
        </ListGroupItem>
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  qty: state.cart.cartItems[ownProps.pId],
  product: state.cartList.products[ownProps.pId],
});

const mapDispatchToProps = {
  listProductCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutProduct);

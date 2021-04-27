import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { listProductCart, remCart } from '../../../actions/cartActions';

import {
  ItemDetails,
  ItemDisplay,
  ItemName,
  ItemImage,
  ItemAlign,
} from './CartProduct.style';

import Prefetch from '../../molecules/Prefetch';

export const CartProduct = ({
  pId,
  product,
  qty,
  listProductCart,
  remCart,
}) => {
  const { loading, error } = product || { loading: true };
  useEffect(() => {
    listProductCart(pId);
  }, [listProductCart, pId]);

  if (loading || error) return <Prefetch error={error} loading={loading} />;

  return (
    <ItemDisplay>
      <ItemImage>
        <Link to={'/product/' + product._id}>
          <img src={product.image} alt="" />
        </Link>
      </ItemImage>
      <ItemDetails>
        <Link to={'/product/' + product._id}>
          <ItemName>{product.name}</ItemName>
        </Link>
        <button onClick={() => remCart(pId)}>Remove</button>
      </ItemDetails>
      <ItemAlign>
        ${(product.price * qty).toString().split('.')[0]}.
        {(product.price * qty).toFixed(2).toString().split('.')[1] || '00'}
      </ItemAlign>
    </ItemDisplay>
  );
};

const mapStateToProps = (state, ownProps) => ({
  qty: state.cart.cartItems[ownProps.pId],
  product: state.cartList.products[ownProps.pId],
});

const mapDispatchToProps = {
  listProductCart,
  remCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);

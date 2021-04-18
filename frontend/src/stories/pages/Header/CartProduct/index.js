import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { listProductCart, remCart } from '../../../../actions/cartActions';
import Prefetch from '../../../../components/Prefetch';
import {
  ItemDetails,
  ItemDisplay,
  ItemName,
  ItemImage,
  ItemAlign,
} from './CartProduct.style';

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
  else
    return (
      <ItemDisplay>
        {' '}
        <ItemImage>
          <img src={product.image} alt="" />
        </ItemImage>
        <ItemDetails>
          <ItemName>{product.name}</ItemName>
          <button onClick={() => remCart(pId)}>Remove</button>
        </ItemDetails>
        {/* <ItemAlign align="start">{product.qty}</ItemAlign> */}
        <ItemAlign>
          ${String(product.price * qty).split('.')[0]}.
          {String(product.price * qty).split('.')[1] || '00'}
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

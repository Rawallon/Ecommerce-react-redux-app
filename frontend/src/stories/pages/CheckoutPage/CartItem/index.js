import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeQtyCart } from '../../../../actions/cartActions';
import { remCart } from '../../../../actions/cartActions';
import Prefetch from '../../../../components/Prefetch';
import { ButtonPrimary } from '../../../../styles/bootstrap.style';
import {
  FlexGrow,
  ItemCenterText,
  ItemFlex,
  ItemImage,
  ListItem,
  SelectQty,
} from './CartItem.styles';

export const CartItem = ({
  product,
  changeQtyCart,
  pId,
  remCart,
  qty,
  loading,
  error,
}) => {
  function changeQty(e) {
    if (qty > product.countInStock || +e.target.value === 0) {
      remCart(pId);
      return;
    }
    changeQtyCart(pId, e.target.value);
  }

  return (
    <>
      {(loading || error) && (
        <ListItem>
          <Prefetch loading={loading} error={error} />
        </ListItem>
      )}
      {product && (
        <ListItem>
          <ItemImage>
            <Link to={`/product/${product._id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
          </ItemImage>
          <ItemFlex column>
            <Link to={`/product/${product._id}`}>
              <h6>{product.name}</h6>
            </Link>
            <ItemFlex>
              <FlexGrow>
                <SelectQty value={qty} onChange={changeQty}>
                  <option key="0" value="0">
                    0 (remove)
                  </option>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </SelectQty>
              </FlexGrow>
              <FlexGrow>
                <ButtonPrimary onClick={() => remCart(product._id)}>
                  Remove
                </ButtonPrimary>
              </FlexGrow>
            </ItemFlex>
          </ItemFlex>
          <ItemCenterText>
            ${Number(product.price * qty).toFixed(2)}
          </ItemCenterText>
        </ListItem>
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  qty: state.cart.cartItems[ownProps.pId],
  product: state.cartList.products[ownProps.pId],
  loading: state.cartList.products[ownProps.pId]?.loading,
  error: state.cartList.products[ownProps.pId]?.error,
});

const mapDispatchToProps = {
  remCart,
  changeQtyCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);

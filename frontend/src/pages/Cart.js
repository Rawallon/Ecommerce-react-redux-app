import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Meta from '../components/Meta';
import CheckoutSteps from '../stories/pages/CheckoutPage/CheckoutSteps/';
import CartPage from '../stories/pages/CheckoutPage/CartPage';
import { HeaderText } from '../styles/main.styles';

export function Cart({ history, cartItems = {} }) {
  const [cartItemsArray, setCartItemsArray] = useState([]);

  useEffect(() => {
    // Cart items format is "{ itemId: qty }"
    setCartItemsArray(Object.keys(cartItems));
  }, [cartItems]);

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping');
  };

  return (
    <>
      <Meta title="Cart" />
      <CheckoutSteps step1 />
      <HeaderText>Cart Items</HeaderText>
      <CartPage
        cartItemsArray={cartItemsArray}
        checkoutHandler={checkoutHandler}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, null)(Cart);

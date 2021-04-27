import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { HeaderText } from '../styles/main.styles';

import Meta from '../components/atoms/Meta';
import CheckoutSteps from '../components/molecules/CheckoutSteps';
import CartPage from '../components/organisms/CartPage';

export function Cart({ history, cartItems = {} }) {
  const [cartItemsArray, setCartItemsArray] = useState([]);

  useEffect(() => {
    // Cart items format is "{ itemId: qty }"
    // its stored only on localStorage
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

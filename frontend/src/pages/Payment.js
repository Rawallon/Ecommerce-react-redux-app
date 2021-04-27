import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { savePaymentMethod } from '../actions/cartActions';

import Meta from '../components/atoms/Meta';

import CheckoutSteps from '../components/molecules/CheckoutSteps';
import PaymentForm from '../components/molecules/PaymentForm';

export const Payment = ({
  shippingAddress,
  savePaymentMethod,
  history,
  userInfo,
}) => {
  function submitHandler(paymentMethod) {
    savePaymentMethod(paymentMethod);
    history.push('/placeorder');
  }

  useEffect(() => {
    if (!userInfo) history.push('/cart');
    if (!shippingAddress) history.push('/shipping');
  }, [history, shippingAddress, userInfo]);

  return (
    <>
      <Meta title="Order details" />
      <CheckoutSteps step1 step2 step3 />
      <PaymentForm submitHandler={submitHandler} />
    </>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userLogin.userInfo,
  shippingAddress: state.cart.shippingAddress,
});

const mapDispatchToProps = { savePaymentMethod };

export default connect(mapStateToProps, mapDispatchToProps)(Payment);

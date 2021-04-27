import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { saveShippingAddress } from '../actions/cartActions';

import Meta from '../components/atoms/Meta';

import CheckoutSteps from '../components/molecules/CheckoutSteps';
import ShippingForm from '../components/molecules/ShippingForm';

export const Shipping = ({
  shippingAddress,
  saveShippingAddress,
  history,
  userInfo,
}) => {
  function submitHandler(address, city, postalCode, country) {
    saveShippingAddress({
      address,
      city,
      postalCode,
      country,
    });
    history.push('/payment');
  }

  useEffect(() => {
    if (!userInfo) history.push('/cart');
  }, [history, userInfo]);

  return (
    <>
      <Meta title="Shipping details" />
      <CheckoutSteps step1 step2 />
      <ShippingForm
        submitHandler={submitHandler}
        shippingAddress={shippingAddress}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userLogin.userInfo,
  shippingAddress: state.cart.shippingAddress,
});

const mapDispatchToProps = { saveShippingAddress };

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);

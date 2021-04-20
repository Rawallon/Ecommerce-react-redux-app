import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import FormGroup from '../components/FormGroup';
import { saveShippingAddress } from '../actions/cartActions';
import Meta from '../components/Meta';
import CheckoutSteps from '../stories/pages/CheckoutPage/CheckoutSteps/';

export const Shipping = ({
  shippingAddress,
  saveShippingAddress,
  history,
  userInfo,
}) => {
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  function submitHandler(e) {
    e.preventDefault();
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
    <FormContainer>
      <Meta title="Shipping details" />
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup
          name="address"
          value={address}
          onChange={setAddress}
          required
        />
        <FormGroup name="city" value={city} onChange={setCity} required />
        <FormGroup
          name="postalCode"
          value={postalCode}
          onChange={setPostalCode}
          required
        />
        <FormGroup
          name="country"
          value={country}
          onChange={setCountry}
          required
        />
        <Button type="submit" variant="primary" block>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userLogin.userInfo,
  shippingAddress: state.cart.shippingAddress,
});

const mapDispatchToProps = { saveShippingAddress };

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import Meta from '../components/Meta';

export const Payment = ({
  shippingAddress,
  savePaymentMethod,
  history,
  userInfo,
}) => {
  const [paymentMethod, setPaymentMethod] = useState('Paypal');
  function submitHandler(e) {
    e.preventDefault();
    savePaymentMethod(paymentMethod);
    history.push('/placeorder');
  }

  useEffect(() => {
    if (!userInfo) history.push('/cart');
    if (!shippingAddress) history.push('/shipping');
  }, [history, shippingAddress, userInfo]);

  return (
    <FormContainer>
      <Meta title="Order details" />
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Paypal or CC"
              id="Paypal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <Form.Check
              type="radio"
              label="MercadoPago"
              id="MercadoPago"
              name="paymentMethod"
              value="MercadoPago"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </Col>
        </Form.Group>
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

const mapDispatchToProps = { savePaymentMethod };

export default connect(mapStateToProps, mapDispatchToProps)(Payment);

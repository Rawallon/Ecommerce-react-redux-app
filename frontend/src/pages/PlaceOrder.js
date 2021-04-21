import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { clearCreateOrder, createOrder } from '../actions/orderAction';
import Message from '../components/Message';
import Meta from '../components/Meta';
import CheckoutProduct from '../stories/pages/CheckoutPage/CheckoutProduct';
import CheckoutSteps from '../stories/pages/CheckoutPage/CheckoutSteps/';
import PlaceOrderSubtotal from '../stories/pages/CheckoutPage/PlaceOrderSubtotal';
import { Col, ListGroup, ListGroupItem, Row } from '../styles/bootstrap.style';
import { SubheaderText } from '../styles/main.styles';

export const PlaceOrder = ({
  cart,
  createOrder,
  orderCreate,
  history,
  clearCreateOrder,
}) => {
  const { order, success, error } = orderCreate;
  useEffect(() => {
    if (!cart.paymentMethod) history.push(`/payment`);
    if (success) {
      history.push(`/order/${order._id}`);
      clearCreateOrder();
    }
  }, [success, history, order, clearCreateOrder, cart]);

  function placeOrderHandler() {
    createOrder({
      orderItems: Object.keys(cart.cartItems),
      orderItemsQty: cart.cartItems,
      shippingAddress: cart.shippingAddress,
      paymentMethod: cart.paymentMethod,
    });
  }

  return (
    <div>
      <Meta title="Confirm order" />
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        {error && <Message variant="danger">{error}</Message>}
        <Col md>
          <ListGroup>
            <ListGroupItem>
              <SubheaderText>Shipping</SubheaderText>
              <p>
                <strong>Address:</strong>
                {cart.shippingAddress.address},{cart.shippingAddress.city}{' '}
                {cart.shippingAddress.postalCode} ,{' '}
                {cart.shippingAddress.country}
              </p>
            </ListGroupItem>
            <ListGroupItem>
              <SubheaderText>Payment Method</SubheaderText>
              <strong>Method:</strong>
              {cart.paymentMethod}
            </ListGroupItem>
            <ListGroupItem>
              <SubheaderText>Order items</SubheaderText>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty!</Message>
              ) : (
                <ListGroup variant="flush">
                  {Object.keys(cart.cartItems).map((item) => (
                    <CheckoutProduct key={item} pId={item} />
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <PlaceOrderSubtotal placeOrderHandler={placeOrderHandler} />
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  orderCreate: state.orderCreate,
});

const mapDispatchToProps = {
  createOrder,
  clearCreateOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder);

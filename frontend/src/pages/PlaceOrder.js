import React, { useEffect } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { clearCreateOrder, createOrder } from '../actions/orderAction';
import CheckoutProduct from '../components/CheckoutProduct';
import CheckoutSteps from '../components/CheckoutSteps';
import CheckoutSubtotal from '../components/CheckoutSubtotal';
import Message from '../components/Message';
import Meta from '../components/Meta';

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
        <Col md={8}>
          <ListGroup>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {cart.shippingAddress.address},{cart.shippingAddress.city}{' '}
                {cart.shippingAddress.postalCode} ,{' '}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method:</strong>
              {cart.paymentMethod}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty!</Message>
              ) : (
                <ListGroup variant="flush">
                  {Object.keys(cart.cartItems).map((item) => (
                    <CheckoutProduct key={item} pId={item} />
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <CheckoutSubtotal placeOrderHandler={placeOrderHandler} />
        </Col>
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

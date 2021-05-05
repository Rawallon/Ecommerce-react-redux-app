import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { clearCreateOrder, createOrder } from '../actions/orderAction';

import CheckoutProduct from '../components/atoms/CheckoutProduct';
import Message from '../components/atoms/MessageComponent';
import Meta from '../components/atoms/Meta';
import PlaceOrderSubtotal from '../components/atoms/PlaceOrderSubtotal';
import CheckoutSteps from '../components/molecules/CheckoutSteps';

import {
  Col,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeader,
  Row,
} from '../styles/bootstrap.style';
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
        <Col
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
          flexDirection={'column'}
          style={{
            flex: '0 0 66.666667%',
            maxWidth: '66.666667%',
          }}>
          <ListGroup>
            <ListGroupItem>
              <ListGroupItemHeader>
                <SubheaderText>Shipping</SubheaderText>
              </ListGroupItemHeader>
              <p>
                <strong>Address:</strong>
                {cart.shippingAddress.address},{cart.shippingAddress.city}{' '}
                {cart.shippingAddress.postalCode} ,{' '}
                {cart.shippingAddress.country}
              </p>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeader>
                <SubheaderText>Payment Method</SubheaderText>
              </ListGroupItemHeader>
              <strong>Method:</strong>
              {cart.paymentMethod}
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeader>
                <SubheaderText>Order items</SubheaderText>
              </ListGroupItemHeader>
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
        <Col
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
          flexDirection={'column'}
          style={{
            flex: '0 0 33.3333%',
            maxWidth: '33.3333%',
          }}>
          <PlaceOrderSubtotal placeOrderHandler={placeOrderHandler} />
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

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';

import Message from '../components/Message';
import CartProduct from '../components/CartProduct';
import CartSubtotal from '../components/CartSubtotal';
import CheckoutSteps from '../components/CheckoutSteps';
import Meta from '../components/Meta';

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

      <h1>Cart Items</h1>
      <Row>
        <Col md={8}>
          <Card className="w-100">
            <ListGroup variant="flush">
              {cartItemsArray.length === 0 ? (
                <Message>
                  Your cart is empty, <Link to="/">go back</Link>
                </Message>
              ) : (
                cartItemsArray.map((item) => (
                  <CartProduct key={item} pId={item} />
                ))
              )}
            </ListGroup>
          </Card>
        </Col>
        <Col md={4}>
          <CartSubtotal checkoutHandler={checkoutHandler} />
        </Col>
      </Row>
    </>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, null)(Cart);

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import {
  clearProductDetails,
  listProductDetails,
} from '../actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import CartProduct from '../components/CartProduct';
import CartSubtotal from '../components/CartSubtotal';
import CheckoutSteps from '../components/CheckoutSteps';

export function Cart({
  history,
  isLoading = false,
  error = '',
  cartItems = {},
}) {
  const [cartItemsArray, setCartItemsArray] = useState([]);
  useEffect(() => {
    setCartItemsArray(Object.keys(cartItems));
  }, [cartItems]);

  function renderPrefetch() {
    if (error) return <Message variant="danger">{error}</Message>;
    if (isLoading) return <Loader />;
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping');
  };

  return (
    <>
      <CheckoutSteps step1 />

      <h1>Cart Items</h1>
      <Row>
        {renderPrefetch()}
        <Col md={8}>
          <Card className="w-100">
            <ListGroup variant="flush">
              {cartItemsArray.length === 0 && (
                <Message>
                  Your cart is empty, <Link to="/">go back</Link>
                </Message>
              )}
              {cartItemsArray.map((item) => (
                <CartProduct key={item} pId={item} />
              ))}
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
  product: state.productDetails.product,
  isLoading: state.productDetails.loading,
  error: state.productDetails.error,
});

const mapDispatchToProps = {
  listProductDetails,
  clearProductDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

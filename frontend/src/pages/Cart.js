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

export function Cart({
  match,
  isLoading = false,
  error = '',
  cartItems = {},
  listProductDetails,
  clearProductDetails,
}) {
  const [totalValue, setTotalValue] = useState({});
  const [cartItemsArray, setCartItemsArray] = useState([]);
  useEffect(() => {
    setCartItemsArray(Object.keys(cartItems));
  }, [cartItems]);

  function addTotalValue(itemId, price) {
    setTotalValue({ ...totalValue, [itemId]: price });
  }

  function renderPrefetch() {
    if (error) return <Message variant="danger">{error}</Message>;
    if (isLoading) return <Loader />;
  }
  return (
    <>
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
                <CartProduct
                  key={item}
                  pId={item}
                  addTotalValue={addTotalValue}
                />
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col md={4}>
          <CartSubtotal />
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

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import {
  clearProductDetails,
  listProductDetails,
} from '../actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import CartProduct from '../components/CartProduct';
import { Link } from 'react-router-dom';

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
    console.log(itemId, price);
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
            <ListGroup.Item active>
              <Col>
                <h3>Resumo do pedido</h3>
              </Col>
              {Object.values(totalValue).length > 0 && (
                <>
                  <Col className="d-flex align-items-center justify-content-between">
                    <div>
                      {Object.values(cartItems).reduce(
                        (accumulator, currentValue) =>
                          +accumulator + +currentValue,
                      )}{' '}
                      item
                      {cartItemsArray.length > 1 && `s`}
                    </div>
                    <div>
                      $
                      {Object.values(totalValue)
                        .reduce(
                          (accumulator, currentValue) =>
                            +accumulator + +currentValue,
                        )
                        .toFixed(2)}
                    </div>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-between my-2">
                    <div>Shipping</div>
                    <div>-</div>
                  </Col>
                </>
              )}
              <Col class="mt-4">
                <Button variant="outline-success" block>
                  Continue to checkout!
                </Button>
              </Col>
            </ListGroup.Item>
          </ListGroup>
        </Card>
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

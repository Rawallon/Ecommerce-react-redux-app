import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { changeQtyCart, listProductCart } from '../actions/cartActions';
import { remCart } from '../actions/cartActions';
import Loader from '../components/Loader';
import Message from './Message';

export const CartProduct = ({
  product = [],
  listProductCart,
  changeQtyCart,
  addTotalValue,
  pId,
  isLoading = true,
  error = '',
  remCart,
  qty,
}) => {
  useEffect(() => {
    listProductCart(pId);
  }, []);
  useEffect(() => {
    if (qty > product.countInStock) {
      remCart(pId);
    }
    if (product.price) addTotalValue(pId, +product.price * +qty);
  }, [qty, product]);

  function renderPrefetch() {
    if (error) return <Message variant="danger">{error}</Message>;
    if (isLoading) return <Loader />;
  }

  function changeQty(e) {
    changeQtyCart(pId, e.target.value);
    if (qty > product.countInStock) {
      remCart(pId);
    }
  }
  return (
    <>
      {renderPrefetch()}
      {!isLoading && !error && (
        <ListGroup.Item>
          <Row>
            <Col md={2}>
              <Link to={`/product/${product._id}`}>
                <Image src={product.image} alt={product.name} fluid rounded />
              </Link>
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <Link to={`/product/${product._id}`}>
                <h6>{product.name}</h6>
              </Link>
            </Col>
            <Col md={2} className="d-flex flex-column align-items-center">
              <Col>
                <Form.Control as="select" value={qty} onChange={changeQty}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </Form.Control>
              </Col>
              <Col>
                <button
                  className="btn btn-outline-primary w-100"
                  onClick={() => remCart(product._id)}>
                  Remove
                </button>
              </Col>
            </Col>
            <Col
              md={2}
              className="d-flex align-items-center justify-content-center">
              ${Number(product.price * qty).toFixed(2)}
            </Col>
          </Row>
        </ListGroup.Item>
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  qty: state.cart.cartItems[ownProps.pId],
  product: state.cartList.products[ownProps.pId],
  isLoading: state.cartList.products[ownProps.pId]?.loading,
  error: state.cartList.products[ownProps.pId]?.error,
});

const mapDispatchToProps = {
  listProductCart,
  remCart,
  changeQtyCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);

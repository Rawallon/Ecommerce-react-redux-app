import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Image, ListGroup, Row } from 'react-bootstrap';
import { listProductCart } from '../actions/cartActions';
import Loader from '../components/Loader';
import Message from './Message';

export const CheckoutProduct = ({
  product = [],
  listProductCart,
  pId,
  isLoading = true,
  error = '',
  qty,
  propPrice,
  propQty,
}) => {
  useEffect(() => {
    listProductCart(pId);
  }, [listProductCart, pId]);

  function renderPrefetch() {
    if (error) return <Message variant="danger">{error}</Message>;
    if (isLoading) return <Loader />;
  }

  function renderPrice() {
    if (propPrice && propQty)
      return (
        <>
          {propQty} x ${propPrice} = ${Number(propQty * propPrice).toFixed(2)}
        </>
      );
    else
      return (
        <>
          {qty} x ${product.price} = ${Number(qty * product.price).toFixed(2)}
        </>
      );
  }
  return (
    <>
      {renderPrefetch()}
      {!isLoading && !error && (
        <ListGroup.Item>
          <Row>
            <Col md={1}>
              <Link to={`/product/${product._id}`}>
                <Image src={product.image} alt={product.name} fluid rounded />
              </Link>
            </Col>
            <Col>
              <Link to={`/product/${product._id}`}>{product.name}</Link>
            </Col>
            <Col md={4}>{renderPrice()}</Col>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutProduct);

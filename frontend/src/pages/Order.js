import React, { useEffect } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { clearOrderDetails, getOrderDetails } from '../actions/orderAction';
import CheckoutProduct from '../components/CheckoutProduct';
import CheckoutSteps from '../components/CheckoutSteps';
import CheckoutSubtotal from '../components/CheckoutSubtotal';
import Loader from '../components/Loader';
import Message from '../components/Message';

export const Order = ({
  match,
  order,
  getOrderDetails,
  clearOrderDetails,
  orderDetails,
  history,
  loggedId,
}) => {
  const { loading, error } = orderDetails;
  const orderId = match.params.id;
  useEffect(() => {
    if (!loggedId) history.push('/login');
    getOrderDetails(orderId);
    return () => {
      clearOrderDetails();
    };
  }, [match]);

  function renderPrefetch() {
    if (error) return <Message variant="danger">{error}</Message>;
    if (loading) return <Loader />;
  }
  if (loading || error) {
    return renderPrefetch();
  } else
    return (
      <div>
        <Row>
          <Col md={8}>
            <ListGroup>
              <ListGroup.Item>
                <h2>Shipping</h2>
                <p>
                  <strong>Name</strong>: {order.user.name}
                </p>
                <p>
                  <strong>Email</strong>:{' '}
                  <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                </p>
                <p>
                  <strong>Address:</strong>
                  {order.shippingAddress.address},{order.shippingAddress.city}{' '}
                  {order.shippingAddress.postalCode} ,{' '}
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <Message variant="success">
                    Delivered on {order.deliveredAt}
                  </Message>
                ) : (
                  <Message variant="danger">Not Delivered</Message>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>Payment Method</h2>
                <p>
                  <strong>Method:</strong>
                  {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <Message variant="success">Paid on {order.paidAt}</Message>
                ) : (
                  <Message variant="danger">Not Paid</Message>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>Order items</h2>
                <ListGroup variant="flush">
                  {Object.values(order.orderItems).map((item) => (
                    <CheckoutProduct
                      key={item.id}
                      pId={item.id}
                      propPrice={item.price}
                      propQty={order.orderItemsQty[item.id]}
                    />
                  ))}
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <CheckoutSubtotal />
          </Col>
        </Row>
      </div>
    );
};

const mapStateToProps = (state) => ({
  loggedId: state.userLogin.userInfo?._id,
  cart: state.cart,
  order: state.orderDetails.order,
  orderDetails: state.orderDetails,
});

const mapDispatchToProps = {
  getOrderDetails,
  clearOrderDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);

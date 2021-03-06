import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { PayPalButton } from 'react-paypal-button-v2';
import { connect } from 'react-redux';
import {
  clearOrderDetails,
  clearPaymentDetails,
  getOrderDetails,
  setOrderPayment,
} from '../actions/orderAction';
import CheckoutProduct from '../components/CheckoutProduct';
import Loader from '../components/Loader';
import Message from '../components/Message';

export const Order = ({
  match,
  getOrderDetails,
  clearOrderDetails,
  orderDetails,
  history,
  loggedId,
  orderPayment,
  clearPaymentDetails,
  setOrderPayment,
}) => {
  const [sdkReady, setSdkReady] = useState(false);

  const { loading, error, order } = orderDetails;
  const { success: sucPay, loading: loaPay, error: errPay } = orderPayment;
  const orderId = match.params.id;
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&buyer-country=BR&currency=BRL`;
      script.onload = () => setSdkReady(true);
      document.body.append(script);
    };

    //if (!loggedId) history.push('/login');
    if ((order !== undefined && Object.keys(order).length === 0) || sucPay) {
      getOrderDetails(orderId);
      clearPaymentDetails();
    } else if (order !== undefined && !order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [
    order,
    sucPay,
    clearOrderDetails,
    getOrderDetails,
    history,
    loggedId,
    orderId,
    sdkReady,
  ]);

  function renderPaypalBtn() {
    if (orderPayment.loading) return <Loader />;
    if (!order.isPaid) {
      if (!sdkReady) {
        return <Loader />;
      } else {
        return (
          <PayPalButton
            currency="BRL"
            amount={(
              order.totalValue +
              order.shippingValue +
              order.taxValue
            ).toFixed(2)}
            onSuccess={succesPaymentHandler}
          />
        );
      }
    }
  }

  function succesPaymentHandler(payRes) {
    setOrderPayment(orderId, payRes);
  }

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
            <>
              <Card>
                <Card.Header>Order Summary</Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Item</Col>
                        <Col className="text-right">${order.totalPrice}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Shipping</Col>
                        <Col className="text-right">${order.shippingPrice}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Tax</Col>
                        <Col className="text-right">${order.taxPrice}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <Row>
                        <Col className="font-weight-bold">Total</Col>
                        <Col className="text-right font-weight-bold">
                          $
                          {(
                            order.totalPrice +
                            order.shippingPrice +
                            order.taxPrice
                          ).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                  <Col className="mt-4">
                    {order.paymentMethod == 'Paypal' ? (
                      renderPaypalBtn()
                    ) : (
                      <Button onClick={() => alert('todo!')} block>
                        Another payment method!
                      </Button>
                    )}
                  </Col>
                </Card.Body>
              </Card>
            </>
          </Col>
        </Row>
      </div>
    );
};

const mapStateToProps = (state) => ({
  loggedId: state.userLogin.userInfo?._id,
  cart: state.cart,
  orderDetails: state.orderDetails,
  orderPayment: state.orderPayment,
});

const mapDispatchToProps = {
  getOrderDetails,
  clearOrderDetails,
  clearPaymentDetails,
  setOrderPayment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);

import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import styled from 'styled-components';

import {
  clearOrderDetails,
  clearPaymentDetails,
  getOrderDetails,
  setOrderPayment,
  setAsDeliveredAdmin,
} from '../actions/orderAction';

import {
  ButtonPrimary,
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeader,
  Row,
  Col,
} from '../styles/bootstrap.style';
import Loader from '../components/organisms/Loader';
import Message from '../components/atoms/Message/';
import PageLoader from '../components/molecules/PageLoader';
import Meta from '../components/atoms/Meta';
import CheckoutProduct from '../components/atoms/CheckoutProduct';

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  div:first-child {
    flex-grow: 1;
  }
`;

const RowWrapper = styled(Row)`
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const Column = styled(Col)`
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  max-width: ${({ maxWidth }) => maxWidth};
  @media (max-width: 576px) {
    & + & {
      margin-top: 2rem;
    }
    max-width: 100%;
    flex-direction: column;
  }
`;

export const Order = ({
  match,
  getOrderDetails,
  clearOrderDetails,
  orderDetails,
  history,
  loggedId,
  isAdmin,
  orderPayment,
  clearPaymentDetails,
  setOrderPayment,
  location,
  setAsDeliveredAdmin,
}) => {
  const [sdkReady, setSdkReady] = useState(false);
  const { loading, error, order } = orderDetails;
  const { success: sucPay } = orderPayment;
  const orderId = match.params.id;

  function parseQuery(queryString) {
    var query = {};
    var pairs = queryString.substr(1).split('&');
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split('=');
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
  }

  const succesPaymentHandler = useCallback(
    (payRes) => {
      setOrderPayment(orderId, payRes);
    },
    [orderId, setOrderPayment],
  );

  useEffect(() => {
    return () => {
      clearOrderDetails();
    };
  }, [clearOrderDetails]);

  useEffect(() => {
    // Check if the user logged
    if (!loggedId) history.push('/login');

    // Check the if the id of the order owner is same visiting the page
    if (!loading && order && !isAdmin && order.user._id !== loggedId)
      history.push('/profile');
  }, [history, loggedId, isAdmin, order, loading]);

  useEffect(() => {
    // This needed because Mercado Pago are passed as query
    if (!loading && order && match.params.pay && !order.isPaid) {
      if (order.paymentMethod === 'MercadoPago') {
        succesPaymentHandler(parseQuery(location.search));
      }
    }

    // Adds sdk according to the payment method
    const addPaymentScript = async () => {
      if (order.paymentMethod === 'PayPal') {
        // Ps: Paypal SDK doesn't create a button
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        const { data: clientId } = await axios.get('/api/config/paypal');
        script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&buyer-country=BR&currency=BRL`;
        document.body.append(script);
        script.onload = () => setSdkReady(true);
      } else if (order.paymentMethod === 'MercadoPago') {
        // MercadoPago SDK creates the button
        var script = document.createElement('script');
        script.src =
          'https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js';
        script.type = 'text/javascript';
        script.dataset.preferenceId = order.paymentId;
        document.getElementById('button-checkout').innerHTML = '';
        document.querySelector('#button-checkout').appendChild(script);
        script.onload = () => setSdkReady(true);
      }
    };

    if ((!loading && !order) || sucPay) {
      getOrderDetails(orderId);
      // In case of payment it clears to stop a infinte loop
      clearPaymentDetails();
    } else {
      if (order && !order.isPaid) {
        if (!window.paypal) {
          addPaymentScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [
    succesPaymentHandler,
    match,
    location,
    loading,
    order,
    sucPay,
    getOrderDetails,
    orderId,
    sdkReady,
    clearPaymentDetails,
  ]);

  function renderPaypalBtn() {
    if (orderPayment.loading) return <Loader />;
    if (!order.isPaid) {
      console.log({ sdkReady });
      if (!sdkReady) {
        return <Loader />;
      } else {
        return (
          <div style={{ width: '100%', marginTop: '0.75rem' }}>
            <PayPalButton
              style={{ layout: 'vertical', color: 'black' }}
              currency="BRL"
              amount={(
                order.totalPrice +
                order.shippingPrice +
                order.taxPrice
              ).toFixed(2)}
              onSuccess={succesPaymentHandler}
            />
          </div>
        );
      }
    }
  }

  if (!error && !loading && !order) return <Loader />;
  if (error) return <Message variant="danger">{error}</Message>;
  if (loading) return <PageLoader />;
  if (order)
    return (
      <>
        <Meta title="Order details" />
        <RowWrapper>
          <Column flex={'0 0 66.666667%'} maxWidth={'66.666667%'}>
            <ListGroup>
              <ListGroupItem>
                <ListGroupItemHeader>
                  <h2>Shipping</h2>
                </ListGroupItemHeader>
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
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeader>
                  <h2>Payment Method</h2>
                </ListGroupItemHeader>
                <p>
                  <strong>Method:</strong>
                  {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <Message variant="success">Paid on {order.paidAt}</Message>
                ) : (
                  <Message variant="danger">Not Paid</Message>
                )}
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeader>
                  <h2>Order items</h2>
                </ListGroupItemHeader>
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
              </ListGroupItem>
            </ListGroup>
          </Column>
          <Column flex={'0 0 33.3333%'} maxWidth={'33.3333%'}>
            <>
              <Card>
                <CardHeader>Order Summary</CardHeader>
                <CardBody>
                  <ListGroup variant="flush">
                    <ListGroupItem>
                      <CardRow style={{ margin: 0 }}>
                        <div>Item</div>
                        <div style={{ textAlign: 'right' }}>
                          ${Number(order.totalPrice).toFixed(2)}
                        </div>
                      </CardRow>
                    </ListGroupItem>
                    <ListGroupItem>
                      <CardRow>
                        <div>Shipping</div>
                        <div>${order.shippingPrice}</div>
                      </CardRow>
                    </ListGroupItem>
                    <ListGroupItem>
                      <CardRow>
                        <div>Tax</div>
                        <div>${order.taxPrice}</div>
                      </CardRow>
                    </ListGroupItem>
                    <ListGroupItem noBorder>
                      <CardRow>
                        <div>Total</div>
                        <div>
                          $
                          {(
                            order.totalPrice +
                            order.shippingPrice +
                            order.taxPrice
                          ).toFixed(2)}
                        </div>
                      </CardRow>
                    </ListGroupItem>
                  </ListGroup>
                  <Col>
                    {order.paymentMethod === 'PayPal' ? (
                      renderPaypalBtn()
                    ) : (
                      <div id="button-checkout">asd</div>
                    )}
                  </Col>
                  {isAdmin && (
                    <Col>
                      <ButtonPrimary
                        block
                        onClick={() => setAsDeliveredAdmin(orderId)}>
                        Set as delivered
                      </ButtonPrimary>
                    </Col>
                  )}
                </CardBody>
              </Card>
            </>
          </Column>
        </RowWrapper>
      </>
    );
};

const mapStateToProps = (state) => ({
  isAdmin: state.userLogin.userInfo?.isAdmin,
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
  setAsDeliveredAdmin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);

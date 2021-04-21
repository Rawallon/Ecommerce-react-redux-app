import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Col, Row, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { updateUserProfile } from '../actions/userAction';
import { clearOrderList, getOrderList } from '../actions/orderAction';
import Meta from '../components/Meta';
import Prefetch from '../components/Prefetch';
import Message from '../components/Message';
import FormInput from '../stories/components/FormInput';

export function Profile({
  history,
  loading,
  error,
  userInfo,
  loggedId,
  updateUserProfile,
  orderList,
  getOrderList,
  clearOrderList,
  userUpdateProfile,
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState({});

  // Using it to call when the component unmounts
  useEffect(() => {
    return () => {
      clearOrderList();
    };
  }, [clearOrderList]);

  useEffect(() => {
    if (!loggedId) history.push('/login');
    else {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }

    if (!orderList.loading && !orderList.orders) getOrderList();
  }, [history, userInfo, loggedId, getOrderList, orderList]);

  function submitHandler(e) {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      setMessage({
        name: name.length === 0,
        email: email.length === 0,
        password: password.length === 0,
        confirmPassword: confirmPassword.length === 0,
      });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({
        ...message,
        password: true,
        confirmPassword: true,
      });
      return;
    }

    updateUserProfile({
      _id: userInfo._id,
      name,
      email,
      password,
    });
  }

  function renderRowOrder(order) {
    return (
      <tr key={order._id}>
        <td>{order._id}</td>
        <td>{order.createdAt.substring(0, 10)}</td>
        <td>{Number(order.totalPrice).toFixed(2)}</td>
        <td>
          {order.isPaid ? (
            order.paidAt.substring(0, 10)
          ) : (
            <i className="fas fa-times fa-2x" style={{ color: 'red' }}></i>
          )}
        </td>
        <td>
          {order.isDelivered ? (
            order.deliveredAt.substring(0, 10)
          ) : (
            <i className="fas fa-times fa-2x" style={{ color: 'red' }}></i>
          )}
        </td>
        <td>
          <LinkContainer to={`/order/${order._id}`}>
            <Button variant="outline-secondary" size="sm" block>
              Details
            </Button>
          </LinkContainer>
        </td>
      </tr>
    );
  }

  return (
    <Row>
      <Meta title="Profile" />
      <Col md={3}>
        <h2>Profile</h2>
        {userUpdateProfile.success && (
          <Message variant="success">Profile updated</Message>
        )}

        <Prefetch error={error} loading={loading} />

        <Form onSubmit={submitHandler}>
          <FormInput name="name" type="text" value={name} onChange={setName} />
          <FormInput
            name="email"
            type="email"
            value={email}
            isInvalid={!!message['email']}
            onChange={setEmail}
          />
          <FormInput
            name="password"
            disabled={loading}
            isInvalid={!!message['password']}
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
          />
          <FormInput
            name="confirmPassword"
            disabled={loading}
            isInvalid={!!message['confirmPassword']}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />

          <Button type="submit" variant="primary" block>
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My orders</h2>
        <Col>
          <Table striped bordered hover responsive size="sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                // This if is necessary since I wrapped Prefetch with tr and td
                orderList && (orderList.error || orderList.loading) && (
                  <tr>
                    <td colSpan="6">
                      <Prefetch
                        error={orderList.error}
                        loading={orderList.loading}
                      />
                    </td>
                  </tr>
                )
              }
              {!orderList.error &&
                !orderList.loading &&
                orderList.orders?.map((order) => renderRowOrder(order))}
            </tbody>
          </Table>
        </Col>
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => ({
  loggedId: state.userLogin.userInfo?._id,
  userInfo: state.userLogin.userInfo,
  userUpdateProfile: state.userUpdateProfile,
  orderList: state.orderList,
});

const mapDispatchToProps = {
  updateUserProfile,
  getOrderList,
  clearOrderList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

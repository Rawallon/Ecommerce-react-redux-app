import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Col, Row, Spinner, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { updateUserProfile } from '../actions/userAction';
import Message from '../components/Message';
import Loader from '../components/FormLoader';
import { getOrderList } from '../actions/orderAction';
import FormGroup from '../components/FormGroup';

export function Profile({
  history,
  loading,
  error,
  userInfo,
  loggedId,
  updateUserProfile,
  orderList,
  getOrderList,
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [message, setMessage] = useState({});

  useEffect(() => {
    if (!loggedId) history.push('/login');
    else {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }

    if (!orderList.order) getOrderList();
  }, [history, userInfo, loggedId]);

  function submitHandler(e) {
    e.preventDefault();
    if (
      name.length === 0 &&
      email.length === 0 &&
      password.length === 0 &&
      confirmPassword.length === 0
    ) {
      setMessage({
        name: name.length === 0,
        email: email.length === 0,
        password: password.length === 0,
        confirmPassword: confirmPassword.length === 0,
        oldPassword: oldPassword.length === 0,
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
      oldPassword,
    });
  }

  function renderMyOrders() {
    if (orderList.loading) return <Spinner />;
    if (orderList.error)
      return <Message variant="danger">{orderList.error}</Message>;

    if (orderList.orders)
      return (
        <Table striped bordered hover responsive className="table-sm">
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
            {orderList.orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <i className="fas fa-times" style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i className="fas fa-times" style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant="light" className="btn-sm">
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      );
  }

  return (
    <Row>
      <Col md={3}>
        <h2>Profile</h2>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <FormGroup name="name" type="text" value={name} onChange={setName} />
          <FormGroup
            name="email"
            type="email"
            value={email}
            isInvalid={!!message['email']}
            onChange={setEmail}
          />
          <FormGroup
            name="password"
            disabled={loading}
            isInvalid={!!message['password']}
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
          />
          <FormGroup
            name="confirmPassword"
            disabled={loading}
            isInvalid={!!message['confirmPassword']}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />
          <FormGroup
            name="oldPassword"
            disabled={loading}
            type="password"
            isInvalid={!!message['oldPassword']}
            label="Old password"
            placeholder="Old password"
            value={oldPassword}
            onChange={setOldPassword}
          />

          <Button type="submit" variant="primary" block>
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My orders</h2>
        <Col>{renderMyOrders()}</Col>
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => ({
  loggedId: state.userLogin.userInfo?._id,
  userInfo: state.userLogin.userInfo,
  error: state.userUpdateProfile.error,
  loading: state.userUpdateProfile.loading,
  orderList: state.orderList,
});

const mapDispatchToProps = {
  updateUserProfile,
  getOrderList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

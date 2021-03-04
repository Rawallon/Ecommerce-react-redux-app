import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { getUserDetails, updateUserProfile } from '../actions/userAction';
import Message from '../components/Message';
import Loader from '../components/FormLoader';

export function Profile({
  location,
  getUserDetails,
  history,
  loading,
  error,
  userRegister,
  userInfo,
  loggedId,
  updateUserProfile,
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
      if (!userInfo) {
        getUserDetails('profile');
      } else {
        setName(userInfo.name);
        setEmail(userInfo.email);
      }
    }
  }, [history, userInfo, getUserDetails, loggedId]);
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
  return (
    <Row>
      <Col md={3}>
        <h2>Profile</h2>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              disabled={loading}
              type="text"
              isInvalid={!!message['name']}
              placeholder="Complete name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              disabled={loading}
              type="email"
              isInvalid={!!message['email']}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              disabled={loading}
              isInvalid={!!message['password']}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm password:</Form.Label>
            <Form.Control
              disabled={loading}
              type="password"
              isInvalid={!!message['confirmPassword']}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Old password:</Form.Label>
            <Form.Control
              disabled={loading}
              type="password"
              isInvalid={!!message['oldPassword']}
              placeholder="Confirm password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" variant="primary" block>
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My orders</h2>
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => ({
  loggedId: state.userLogin.userInfo?._id,
  userInfo: state.userLogin.userInfo,
  error: state.userUpdateProfile.error,
  loading: state.userUpdateProfile.loading,
});

const mapDispatchToProps = {
  getUserDetails,
  updateUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

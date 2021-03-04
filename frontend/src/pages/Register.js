import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { register } from '../actions/userAction';
import Message from '../components/Message';
import Loader from '../components/Loader';

export function Register({
  location,
  register,
  history,
  loading,
  error,
  userRegister,
  userInfo,
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState({});
  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) history.push(redirect);
  }, [history, userInfo, redirect]);

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
    register(name, email, password);
  }
  return (
    <FormContainer>
      <h1>Sign up</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
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
            type="password"
            isInvalid={!!message['confirmPassword']}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign in
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Already registered?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : `/register`}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.userLogin.userInfo,
  userRegister: state.userRegister,
  error: state.userRegister.error,
  loading: state.userRegister.loading,
});

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

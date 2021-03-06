import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { register } from '../actions/userAction';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormGroup from '../components/FormGroup';

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
        <FormGroup
          name="name"
          type="text"
          value={name}
          isInvalid={!!message['name']}
          placeholder="Complete name"
          onChange={setName}
        />
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
          label="Confirm Password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />

        <Button type="submit" variant="primary">
          Register
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

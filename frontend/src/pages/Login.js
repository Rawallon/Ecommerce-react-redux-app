import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userAction';
import FormGroup from '../components/FormGroup';
import Prefetch from '../components/Prefetch';

export function Login({ location, login, history, userLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const redirect = location.search ? location.search.split('=')[1] : '/';
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) history.push(redirect);
  }, [history, userInfo, redirect]);

  function submitHandler(e) {
    e.preventDefault();
    login(email, password);
  }
  return (
    <FormContainer>
      <h1>Sign in</h1>
      <Prefetch error={error} loading={loading} />
      <Form onSubmit={submitHandler}>
        <FormGroup
          name="email"
          type="email"
          value={email}
          onChange={setEmail}
          required
        />
        <FormGroup
          name="password"
          type="password"
          value={password}
          onChange={setPassword}
          required
        />

        <Button type="submit" variant="primary">
          Sign in
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : `/register`}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

const mapStateToProps = (state) => ({
  userLogin: state.userLogin,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userAction';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormGroup from '../components/FormGroup';

export function Login({ location, login, history, loading, error, userInfo }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const redirect = location.search ? location.search.split('=')[1] : '/';

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
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
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
  userInfo: state.userLogin.userInfo,
  error: state.userLogin.error,
  loading: state.userLogin.loading,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

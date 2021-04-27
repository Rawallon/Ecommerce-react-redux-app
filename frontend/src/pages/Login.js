import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../actions/userAction';

import { ButtonPrimary, Col, Row } from '../styles/bootstrap.style';

import FormInput from '../components/atoms/FormInput';
import Prefetch from '../components/molecules/Prefetch';

export function Login({ location, login, history, userLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const redirect = location.search ? location.search.split('=')[1] : '';
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (!loading && !error && userInfo) history.push(redirect);
  }, [error, history, loading, redirect, userInfo]);

  function submitHandler(e) {
    e.preventDefault();
    login(email, password);
  }
  return (
    <Row justifyCenter>
      <Col md flexDirection="column">
        <h1>Sign in</h1>
        <Prefetch error={error} loading={loading} />
        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <FormInput
            name="email"
            type="email"
            value={email}
            onChange={setEmail}
            required
            autocomplete="email"
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            onChange={setPassword}
            required
            autocomplete="password"
          />

          <ButtonPrimary type="submit" variant="primary">
            Sign in
          </ButtonPrimary>
        </form>

        <Row>
          <Col>
            <span style={{ color: 'gray' }}>
              New customer?{' '}
              <Link
                style={{ color: 'black' }}
                to={redirect ? `/register?redirect=${redirect}` : `/register`}>
                Register
              </Link>
            </span>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => ({
  userLogin: state.userLogin,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

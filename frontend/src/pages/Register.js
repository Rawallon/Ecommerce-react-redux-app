import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { register } from '../actions/userAction';
import Meta from '../components/Meta';
import Prefetch from '../components/Prefetch';
import FormInput from '../stories/components/FormInput';
import { ButtonPrimary, Col, Row } from '../styles/bootstrap.style';

export function Register({
  location,
  register,
  history,
  userRegister,
  userInfo,
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState({});
  const redirect = location.search ? location.search.split('=')[1] : '/';
  const { error, loading } = userRegister;

  useEffect(() => {
    if (!loading && !error && userInfo) history.push(redirect);
  }, [history, userInfo, redirect, loading, error]);

  function submitHandler(e) {
    setMessage('asd');
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
    register(name, email, password);
  }
  return (
    <Row justifyCenter>
      <Col md flexDirection="column">
        <Meta title="Sign up" />
        <h1>Sign up</h1>
        <Prefetch error={error} loading={loading} />
        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <FormInput
            name="name"
            type="text"
            value={name}
            isInvalid={!!message['name']}
            placeholder="Complete name"
            onChange={setName}
            autocomplete="complete-name"
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            isInvalid={!!message['email']}
            onChange={setEmail}
            autocomplete="email"
          />
          <FormInput
            name="password"
            disabled={loading}
            isInvalid={!!message['password']}
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
            autocomplete="new-password"
          />
          <FormInput
            name="confirmPassword"
            disabled={loading}
            isInvalid={!!message['confirmPassword']}
            type="password"
            label="Confirm Password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            autocomplete="confirm-password"
          />

          <ButtonPrimary type="submit" variant="primary" block>
            Register
          </ButtonPrimary>
        </form>

        <Row>
          <Col>
            Already registered?{' '}
            <Link to={redirect ? `/login?redirect=${redirect}` : `/register`}>
              Login
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.userLogin.userInfo,
  userRegister: state.userRegister,
});

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

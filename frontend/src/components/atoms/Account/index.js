import React from 'react';
import { Link } from 'react-router-dom';
import { Hr, StyledButton } from '../../../styles/bootstrap.style';

import {
  Wrapper,
  Header,
  LoginForm,
  MenuItem,
  MenuWrapper,
} from './Account.style';

export default function Account({ auth, logout }) {
  if (!auth)
    return (
      <Wrapper>
        <LoginForm>
          <Link to="/login">
            <StyledButton>Log in</StyledButton>
          </Link>
          <Hr marginTop="0.875" />
          <Link to="/register">
            <StyledButton bgColor="e6e6e6" bgHover="e1e1e1">
              Register
            </StyledButton>
          </Link>
        </LoginForm>
      </Wrapper>
    );
  else {
    if (!auth.name) return null; //While loads after user logs in
    return (
      <Wrapper>
        <Header>
          <span>Your Account</span>
          <h3>{auth.name.split(' ')[0]}</h3>
        </Header>
        <MenuWrapper>
          <Link to="/profile">
            <MenuItem>My Account</MenuItem>
          </Link>
          <Link to="/profile">
            <MenuItem>My Orders</MenuItem>
          </Link>
          {auth.isAdmin && (
            <>
              <Link to="#">
                <MenuItem>You're admin!</MenuItem>
              </Link>
            </>
          )}
          <Hr />
          <MenuItem onClick={logout}>Logout</MenuItem>
        </MenuWrapper>
      </Wrapper>
    );
  }
}
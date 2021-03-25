import React from 'react';
import { Hr, StyledButton } from '../../../GlobalStyle.style';
import {
  Wrapper,
  Header,
  LoginForm,
  MenuItem,
  MenuWrapper,
} from './Account.style';

export default function index({ auth }) {
  if (!auth.user)
    return (
      <Wrapper>
        <Header>
          <h3>Log In</h3>
        </Header>
        <LoginForm>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <StyledButton>Log in Now</StyledButton>
          <Hr marginTop="0.875" />
          <StyledButton bgColor="4267b2" bgHover="375899">
            Facebook
          </StyledButton>
        </LoginForm>
      </Wrapper>
    );
  else
    return (
      <Wrapper>
        <Header>
          <span>Your Account</span>
          <h3>{auth.user.name}</h3>
        </Header>
        <MenuWrapper>
          <MenuItem>My Account</MenuItem>
          <MenuItem>My Orders</MenuItem>
          <Hr />
          <MenuItem>Logout</MenuItem>
        </MenuWrapper>
      </Wrapper>
    );
}

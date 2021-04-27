import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  cursor: default;
  position: relative;
  width: 205px;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  background: #f2f2f2;
  padding: 1rem;
  position: relative;

  span {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 5px;
    color: #9a9a9a;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;

  margin: 0.25rem 0.5rem;

  a {
    width: 100%;
  }
`;

export const LoginForm = styled(MenuWrapper)`
  margin: 0;
  padding: 0.25rem 0.5rem;

  input {
    border-radius: 5px;
    margin: 0.5rem 0;
    width: 100%;
    padding: 10px;
    font-size: 1em;
    border: #b1b1b1 solid 1px;
    box-shadow: inset 0 1px 3px rgb(0 0 0 / 10%);
    color: #4c4c4c;
  }

  a {
    width: 100%;
  }
`;

export const MenuItem = styled.div`
  cursor: pointer;
  width: 100%;
  display: block;
  position: relative;
  padding: 0.5rem 0.25rem;
  margin: 0.25rem 0;
  border-radius: 3px;
  font-size: 14px;
  color: #4c4c4c;
  text-decoration: none;

  :hover {
    color: #000;
    background: #e6e6e6;
  }
`;

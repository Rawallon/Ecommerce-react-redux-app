import styled from 'styled-components';

export const CartWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  cursor: default;
  position: relative;
  width: 203px;

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
`;

export const MenuItem = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 14px;
  background: transparent;
  transition: all 0.5s;
  border-bottom: 1px solid black;

  :hover {
    color: #fff;
    background: #000;
  }

  a {
    color: inherit;
    font-weight: normal;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    svg {
      margin: 0;
    }
  }
`;

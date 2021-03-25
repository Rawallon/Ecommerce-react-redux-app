import styled, { css, keyframes } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    grid-template-rows: 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 1rem;
  color: #222;
  margin-bottom: 10px !important;
  font-weight: 600;
  letter-spacing: 0px;
  line-height: 1.428;
`;

export const ProductDesc = styled.p`
  font-size: 1rem;
  color: #878787;
`;

export const FlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const FlexRow = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const PriceTag = styled.p`
  font-size: 22px;
  line-height: 22px;
  margin-right: 10px;
  color: #696969;
`;

export const CartButton = styled.button`
  border: 0;
  width: auto;
  height: 100%;
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  display: block;
  padding: 9px 16px;
  border-radius: 40px;
  background-color: #fe696a;
  transition-property: background, color;
  transition-duration: 0.25s;
  &:hover {
    background-color: #fe3638;
  }

  @media (min-width: 1200px) {
    width: auto;
    min-width: 160px;
    max-width: 100%;
  }
`;

export const ColorDiv = styled.div`
  border-radius: 50%;
  box-shadow: inset 0 0 0 2px #fff;
  background: ${({ color }) => color && `${color}`};
  border: 2px solid ${({ active }) => (active ? '#fe696a;' : '#ccc;')};
  width: 2rem;
  height: 2rem;
  transition: all 0.2s;
  :hover {
    border-color: black;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
`;

export const CategoriesList = styled.div`
  color: #878787;
  span {
    margin-right: 0.5rem;
  }

  a {
    text-decoration: none;
    color: #222;
    transition: 0.3s;
  }
`;

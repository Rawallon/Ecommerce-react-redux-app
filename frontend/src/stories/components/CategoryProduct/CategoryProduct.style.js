import styled, { css } from 'styled-components';

export const CardButtonsHidden = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  margin-top: -0.8rem;
  transition: all 0.2s;
  border-radius: 0.4375rem 0.4375rem;
  background-color: #fff;
  opacity: 0;
  z-index: 2;
  padding: 1.25rem 1.25rem;
`;

export const Card = styled.div`
  max-width: 366px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 0;
  border-radius: 18px 18px 0 0;
  z-index: 1;
  transition: box-shadow 0.2s ease;
  ${({ simple }) =>
    !simple &&
    css`
      &:hover {
        border-color: #fff;
        box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.1);
        z-index: 10;
        border-radius: 0;
      }

      &:hover ${CardButtonsHidden} {
        opacity: 1;
        visibility: visible;
        box-shadow: 0 1rem 1.525rem 0rem rgba(0, 0, 0, 0.1);
      }
    `};
`;

export const Cardimg = styled.a`
  display: block;
  overflow: hidden;
  border-radius: 18px 18px 0 0;

  width: 100%;

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
`;

export const CardBody = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding: 1.25rem 1.25rem;
  padding-top: 0.5rem !important;
  padding-bottom: 1rem !important;

  span {
    display: block;
    font-size: 0.75rem;
    padding-bottom: 4px;
    a {
      text-decoration: none;
      color: #7d879c;
      width: 100%;
    }
  }
  h3 {
    margin-top: 0;
    margin-bottom: 0.75rem;
    font-weight: 500;
    line-height: 1.2;
    color: #373f50;
    font-size: 0.875rem;
    a {
      text-decoration: none;
      color: #373f50;
      width: 100%;
    }
  }
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PriceDiv = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 0.25rem;
  }
`;
export const NoStockSpan = styled.span`
  font-size: 0.875rem !important;
  color: ${({ inStock }) => (inStock ? '#4e54c8;' : '#7d879c')};
`;
export const PriceSpan = styled.span`
  font-size: ${({ disabled }) =>
    disabled ? '0.875rem !important' : '1.25rem !important'};
  color: ${({ disabled }) => (disabled ? '#7d879c;' : '#4e54c8;')};
  ${({ disabled }) =>
    disabled &&
    css`
      text-decoration: line-through;
    `};
`;
export const CardButton = styled.button`
  border: 0;
  width: 100%;
  cursor: pointer;
  color: #fff;
  margin-bottom: 8px;
  display: block;
  padding: 9px 16px;
  font-size: 0.8125rem;
  border-radius: 5px;
  background-color: #fe696a;
  transition-property: background, color;
  transition-duration: 0.25s;

  &:hover {
    background-color: #fe3638;
  }
`;

export const CardSecondaryButton = styled(CardButton)`
  background-color: transparent;
  color: #4b566b;
  box-shadow: 0 0 0 2px ${({ inStock }) => (inStock ? '#fe696a;' : '#d1d9e8')};

  &:hover {
    background-color: ${({ inStock }) => (inStock ? '#fe3638;' : '#d1d9e8')};
    color: #fff;
  }
`;

export const CardButtonDisabled = styled(CardButton)`
  background-color: #f3f5f9;
  color: #4b566b;

  &:hover {
    background-color: #d1d9e8;
  }
`;

export const OnSaleBage = styled.div`
  position: absolute;
  top: 0.75rem;
  z-index: 5;
  box-shadow: 0 0.5rem 1.125rem -0.275rem ${({ color }) => (color ? color : '#f34770')};
  background-color: ${({ color }) => (color ? color : '#f34770')};
  padding: 0.25em 0.625em;
  font-size: 0.875em;
  border-radius: 0.175rem;
  color: ${({ font }) => (font ? font : 'white')};
  left: 0.75rem;
`;

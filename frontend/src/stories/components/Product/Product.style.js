import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.085);
  border-radius: 18px;
  &:hover {
    /* border-color: #fff; */
    box-shadow: 0 0.3rem 1.525rem -0.375rem rgb(0 0 0 / 10%);
  }
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
  flex: 1 1 auto;
  padding: 1.25rem 1.25rem;
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;

  span {
    display: block;
    font-size: 0.75rem;
    padding-bottom: 4px;
    a {
      text-decoration: none;
      color: #7d879c;
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
    }
  }
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;

  span {
    font-size: ${({ inStock }) => (inStock ? '1rem;' : '.875rem')};
    color: ${({ inStock }) => (inStock ? '#4e54c8;' : '#7d879c')};
  }
`;

export const CardButton = styled.button`
  border: 0;
  width: 100%;
  cursor: pointer;
  color: #fff;
  margin-top: 16px;
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

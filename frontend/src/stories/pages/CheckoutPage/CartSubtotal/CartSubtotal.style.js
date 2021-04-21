import styled from 'styled-components';

export const WrapperDiv = styled.div`
  color: #fff;
  background-color: #1a1a1a;
  border-color: #1a1a1a;
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  border: 1px solid rgba(0, 0, 0, 0.125);

  h4 {
    color: #fff;
  }
`;

export const TextDiv = styled.div`
  margin-top: 0.7rem;

  align-items: center !important;
  justify-content: space-between !important;
  display: flex !important;
  max-width: 100%;

  & + & {
    margin: 0.5rem 0;
  }
`;

export const Button = styled.button`
  margin-top: 1.5rem;
  cursor: pointer;
  border-width: 2px;
  border-style: solid;
  font-size: 0.765625rem;
  text-transform: uppercase;
  display: inline-block;
  width: 100%;
  color: #4bbf73;
  border-color: #4bbf73;

  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  background-color: transparent;
  padding: 0.75rem 1.5rem;
  line-height: 1.5rem;
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  :hover {
    color: #fff;
    background-color: #4bbf73;
    border-color: #4bbf73;
  }
`;

/*!
 * Bootstrap v4.6.0 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors
 * Copyright 2011-2021 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */

import styled, { css, keyframes } from 'styled-components';

export const Row = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  ${({ justifyCenter }) =>
    justifyCenter ? 'justify-content: center !important;' : ''}
`;
export const Col = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  ${({ justifyContent }) =>
    justifyContent
      ? `justify-content: ${justifyContent};`
      : 'justify-content: center;'}
  ${({ alignItems }) =>
    alignItems ? `align-items: ${alignItems};` : 'align-items: center;'}
${({ flexDirection }) =>
  flexDirection ? `flex-direction: ${flexDirection};` : ''}

  ${({ sm }) =>
    sm
      ? css`
          @media (min-width: 576px) {
            flex: 0 0 100%;
            max-width: 100%;
          }
        `
      : ''}

      ${({ md }) =>
        md
          ? css`
              @media (min-width: 768px) {
                flex: 0 0 50%;
                max-width: 50%;
              }
            `
          : ''}

      ${({ lg }) =>
        lg
          ? css`
              @media (min-width: 992px) {
                flex: 0 0 33.333333%;
                max-width: 33.333333%;
              }
            `
          : ''}

  ${({ xl }) =>
    xl
      ? css`
          @media (min-width: 1200px) {
            flex: 0 0 25%;
            max-width: 25%;
          }
        `
      : ''}
`;
export const ButtonPrimary = styled.button`
  cursor: pointer;
  width: 100%;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 0 solid transparent;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  color: #fff;
  background-color: #1a1a1a;
  border-color: #1a1a1a;

  :hover {
    color: #fff;
    background-color: #070707;
    border-color: #010101;
  }

  :focus {
    outline: 0;
    color: #fff;
    background-color: #070707;
    border-color: #010101;
    box-shadow: 0 0 0 0.2rem rgb(60 60 60 / 50%);
  }
`;
export const ButtonOutlineSecondary = styled(ButtonPrimary)`
  letter-spacing: 1px;
  border-width: 2px;
  text-transform: uppercase;
  background-color: transparent;
  border-color: #919aa1;
  color: #919aa1;
  padding: 0.5rem 1rem;
  border-radius: 0;
  font-size: 10px;

  :hover {
    background-color: #ced4da;
    border-color: #ced4da;
    color: #fff;
  }
`;
export const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
`;

export const ListGroupItemHeader = styled.div`
  margin: -0.75rem -1.25rem;
  padding: 0.75rem 1.25rem;
  margin-bottom: 0.75rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  & > * {
    margin: 0;
  }
`;
export const ListGroupItem = styled.div`
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  ${({ noBorder }) =>
    noBorder ? '' : 'border: 1px solid rgba(0, 0, 0, 0.125)'};

  & + & {
    border-top: 0;
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  width: 100%;
`;

export const CardHeader = styled.div`
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;

export const CardBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;

const spinnerBorder = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100px;
  min-width: 100px;
  margin: 2rem 0;

  ::before {
    content: '';
    animation: 0.75s linear infinite ${spinnerBorder};
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 50%;
    border: 0.2rem solid currentColor;
    border-left-color: transparent;
    border-radius: 50%;
  }
`;

export const Alert = styled.div`
  display: block;
  width: 100%;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin: auto;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  transition: opacity 0.15s linear;

  color: ${({ variant }) => variant[0]};
  background-color: ${({ variant }) => variant[1]};
  border-color: ${({ variant }) => variant[1]};
`;

export const TableSMStripedBordered = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  color: #55595c;
  border: 0;

  tbody {
    tr:nth-of-type(odd) {
      background-color: rgba(0, 0, 0, 0.05);
    }
    tr:hover {
      color: #55595c;
      background-color: rgba(0, 0, 0, 0.075);
    }
    td {
      padding: 0.75rem;
      border: 1px solid rgba(0, 0, 0, 0.05);
    }
  }

  th {
    border-bottom-width: 2px;
    vertical-align: bottom;
    border-bottom: 2px solid rgba(0, 0, 0, 0.05);
    padding: 0.75rem;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
`;

export const StyledButton = styled.button`
  border: 0;
  width: ${({ width }) => (width ? width : '100%')};
  cursor: pointer;
  color: ${({ fontColor }) => (fontColor ? `#${fontColor}` : '#fff')};
  display: block;
  padding: 9px 16px;
  font-size: 0.8125rem;
  border-radius: 5px;
  background-color: ${({ bgColor }) => (bgColor ? `#${bgColor}` : '#fe696a')};
  transition-property: background, color;
  transition-duration: 0.25s;
  &:hover {
    background-color: ${({ bgHover }) => (bgHover ? `#${bgHover}` : '#fe3638')};
  }
`;

export const Hr = styled.hr`
  width: 75%;
  border: 1px solid #e6e6e6;
  margin: ${({ marginTop }) => (marginTop ? `${marginTop}rem` : '0.25rem')} auto;
`;

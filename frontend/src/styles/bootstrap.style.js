import styled, { css } from 'styled-components';

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
export const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
`;

export const ListGroupItem = styled.div`
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
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

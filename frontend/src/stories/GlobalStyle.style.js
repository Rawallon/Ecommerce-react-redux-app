import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  *{
  font-family: 'Rubik', sans-serif;
 margin: 0;
 padding: 0;
 box-sizing: border-box;
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

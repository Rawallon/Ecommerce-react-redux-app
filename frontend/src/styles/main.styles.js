import styled from 'styled-components';

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

  main > *:first-child {
    margin-top: 2rem !important;
  }
  main > div {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;

export const HeaderText = styled.h1`
  ${({ textAlign }) => (textAlign ? `text-align: ${textAlign};` : '')}

  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.2;
  color: #1a1a1a;
  margin-top: 0;
`;

export const SubheaderText = styled.h2`
  ${({ textAlign }) => (textAlign ? `text-align: ${textAlign};` : '')}
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.2;
  color: #1a1a1a;
  margin-top: 0;
`;

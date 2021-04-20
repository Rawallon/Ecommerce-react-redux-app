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

  & > *:first-child {
    margin-top: 2rem !important;
  }
  & > div {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

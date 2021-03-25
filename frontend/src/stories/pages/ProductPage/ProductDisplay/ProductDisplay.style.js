import styled, { css, keyframes } from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
  @media (max-width: 576px) {
    grid-template-rows: 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

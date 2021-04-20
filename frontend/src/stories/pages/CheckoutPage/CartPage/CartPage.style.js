import styled from 'styled-components';

export const WrapperCart = styled.div`
  display: grid;
  grid-gap: 2rem;

  @media (min-width: 992px) {
    grid-template-columns: 2fr 1fr;
  }
`;

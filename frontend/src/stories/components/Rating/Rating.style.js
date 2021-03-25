import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => (align ? align : 'center')};
  width: max-content;

  i {
    font-size: 1rem;
  }
  span {
    margin-left: 0.5rem;
  }
`;

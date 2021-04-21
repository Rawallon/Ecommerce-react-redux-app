import styled from 'styled-components';

export const ListGroupItem = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;
  flex-direction: column;
`;
export const CartItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 2rem;
  > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
  }
`;

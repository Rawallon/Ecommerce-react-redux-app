import styled from 'styled-components';

export const ItemDisplay = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  padding: 0.5rem;
`;

export const ItemName = styled.div`
  max-width: 250px;
  margin-bottom: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ItemImage = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  position: relative;
  margin-right: 2rem;

  img {
    position: absolute;
    width: auto;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translate(-50%);
  }
`;

export const ItemDetails = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  button {
    text-align: left;
    width: auto;
    border: 0;
    margin: 0;
    padding: 0;
    background: transparent;
    font-size: 0.75rem;
    color: #999;
    font-weight: 400;
  }
  button:hover {
    text-decoration: underline;
  }
`;

export const ItemAlign = styled.div`
  color: #4c4c4c;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
  align-items: ${({ align }) => (align ? align : 'center')};
  padding-right: 0.5rem;
`;

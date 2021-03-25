import styled from 'styled-components';

export const CartWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  cursor: default;
  width: 500px;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 2fr;
  border-bottom: 1px solid #e6e6e6;
  background: #f2f2f2;
  padding: 1rem;
`;

export const ItemCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    display: inline-block;
    margin: 0;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 5px;
    color: #9a9a9a;
  }
  h3 {
    color: #262626;
    font-size: 1rem;
    font-weight: 600;
  }
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;

  span {
    float: right;
    margin-right: 10px;
    line-height: 40px;
    font-size: 16px;
    font-weight: 700;
    color: #4c4c4c;
  }
`;

export const CardButton = styled.button`
  border: 0;
  width: 100%;
  cursor: pointer;
  color: #fff;
  display: block;
  padding: 9px 16px;
  font-size: 0.8125rem;
  border-radius: 5px;
  background-color: #fe696a;
  transition-property: background, color;
  transition-duration: 0.25s;
  &:hover {
    background-color: #fe3638;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  div:hover {
    background: #f2f2f2;
  }
`;

export const ItemDisplay = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  padding: 0.5rem;
`;

export const ItemDetails = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  a {
    font-size: 0.75rem;
    color: #999;
    font-weight: 400;
  }
  :hover a {
    text-decoration: underline;
  }
`;

export const ItemName = styled.div`
  max-width: 250px;
  margin-bottom: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ItemAlign = styled.div`
  color: #4c4c4c;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
  align-items: ${({ align }) => (align ? align : 'center')};
  padding-right: 0.5rem;
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

export const ItemData = styled.div`
  font-size: 14px;
  color: #1a1a1a;
  span {
    max-width: 250px;
    margin-bottom: 5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const EmptyCart = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  span {
    font-weight: 400;
    margin-bottom: 5px;
    color: #9a9a9a;
  }
  h3 {
    color: #262626;
    font-size: 1rem;
    font-weight: 600;
  }

  hr {
    width: 75%;
    border: 1px solid #e6e6e6;
    margin: 0.85rem auto;
  }
`;

import styled from 'styled-components';

export const ListItem = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 2rem;
`;
export const ItemImage = styled.div`
  text-align: center;
  img {
    max-height: 161px;
    max-width: 100%;
    height: auto;
  }
`;

export const ItemFlex = styled.div`
  display: flex;
  ${({ column }) =>
    column ? 'flex-direction: column' : 'flex-direction: row'};
  justify-content: space-evenly;
`;

export const ItemCenterText = styled(ItemFlex)`
  align-items: center;
  justify-content: center;
`;

export const FlexGrow = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const SelectQty = styled.select`
  display: block;
  width: 100%;
  height: calc(1.5em + 1.5rem);
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #55595c;
  background-color: #f7f7f9;
  background-clip: padding-box;
  border: 0 solid #ced4da;
  border-radius: 0;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  :focus {
    border-color: #5a5a5a;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(26, 26, 26, 0.25);
  }
`;

import styled from 'styled-components';

export const Paginate = styled.ul`
  margin-top: 1rem !important;
  align-items: center !important;
  justify-content: flex-end !important;
  display: flex;
  padding-left: 0;
  list-style: none;

  span {
    color: #919aa1 !important;
    margin-right: 1.5rem !important;
  }
`;

export const PaginateNumber = styled.li`
  a {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #1a1a1a;
    background-color: #fff;
    border: 1px solid transparent;
    text-decoration: none;

    :hover {
      z-index: 2;
      color: black;
      text-decoration: none;
      background-color: #f7f7f9;
      border-color: transparent;
    }

    ${({ active }) =>
      active &&
      `{
      z-index: 3;
      color: #fff;
      background-color: #1a1a1a;
      border-color: #1a1a1a;
    }`}
  }
`;

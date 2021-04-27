import styled from 'styled-components';
export const Nav = styled.nav`
  display: flex;
  ${({ center }) => (center ? 'justify-content: center' : '')};
`;

export const Ol = styled.ol`
  display: flex;
  flex-wrap: wrap;
  padding: 0 1rem;
  margin: 0;
  list-style: none;
  background-color: transparent;
`;

export const Li = styled.li`
  user-select: none;
  letter-spacing: 2px;
  color: ${({ active }) => (active ? '#919aa1;' : '#1a1a1a;')};

  & + & {
    padding-left: 0.5rem;
  }
  & + &::before {
    float: left;
    padding-right: 0.5rem;
    color: #919aa1;
    content: '/';
  }
  a {
    color: ${({ active }) => (active ? '#919aa1;' : '#1a1a1a;')};
    text-decoration: none;
    background-color: transparent;
  }
`;

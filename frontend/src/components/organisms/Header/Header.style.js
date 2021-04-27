import styled, { keyframes } from 'styled-components';
import { Container } from '../../../styles/main.styles';

export const Header = styled.div`
  width: 100%;
  background: #f7f8fa;
  height: 70px;
  padding: 1rem;
  position: relative;
  z-index: 3;

  @media (max-width: 576px) {
    padding: 1.5rem;
  }
`;

export const SubHeader = styled.div`
  width: 100%;
  background: #fff;
  height: 32px;
  position: relative;
  z-index: 2;
  box-shadow: 0 6px 12px 0 rgb(0 0 0 / 4%);

  @media (max-width: 576px) {
    display: none;
  }
`;
export const ContHead = styled(Container)`
  display: flex;

  @media (max-width: 1200px) {
    padding: 0;
    margin: 0;
  }
`;

export const NavHeader = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;
export const NavCol = styled.div`
  height: inherit;
  /* position: relative; */
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => (align ? align : 'center')};
  transition: top 0.2s, opacity 0.1s;

  ${({ hideAt }) =>
    hideAt
      ? `  @media (max-width: ${hideAt}px) {
    display:none;
  }`
      : null};
`;
export const NavMouseOver = styled.div`
  cursor: pointer;
  color: black;
  padding: 0 1rem;
  z-index: 1;
  position: relative;

  @media (max-width: 576px) {
    position: inherit;
    svg {
      width: 16px;
      height: 16px;
    }
  }

  ::before {
    box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
    z-index: -1;
    content: '';
    position: absolute;
    top: -11rem;
    left: 0;
    width: 100%;
    height: 400%;
    background: #fff;
    transition: top 0.15s;

    @media (max-width: 576px) {
      display: none;
      background: #000;
    }
  }

  &:hover::before {
    top: -4.8rem;
  }
`;
const activeAnim = keyframes`
    from {
        opacity: 0;
        transform: translateY(-100px);
    }
    to {
        opacity: 1;
        transform: translateY(0px);
    }
`;
export const NavDropDown = styled.div`
  animation-duration: 0.2s;
  animation-name: ${({ active }) => (active ? activeAnim : '')};
  animation-fill-mode: forwards;
  display: ${({ active }) => (active ? 'block' : 'none')};
  position: absolute;
  top: 160%;
  right: 0%;
  color: #212529;
  text-align: left;
  background-color: #fff;
  border: 1px solid black;
  min-width: 1rem;

  ul:first-of-type {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    li {
      color: #000;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0;
    color: #00000099;

    li:hover {
      color: #000;
    }
  }

  @media (max-width: 576px) {
    z-index: 3;
    top: 140%;
    left: -1.75rem;
    width: 100vw;
    height: calc(100vh - 70px);
  }
`;

const fadeUpShow = keyframes`
    from {
        opacity: 0;
        transform: translateY(25px);
    }
    to {
        opacity: 1;
        transform: translateY(0px);
    }
`;
export const CatDropDown = styled(NavDropDown)`
  animation-name: ${({ active }) => (active ? fadeUpShow : '')};
  left: 0;
  right: auto;
`;

export const CatDetailsWrapper = styled(NavDropDown)`
  animation-name: '';
  left: 152%;
  right: auto;
  overflow: hidden;

  @media (max-width: 768px) {
    left: 0%;
  }
`;
export const LogoImg = styled.div`
  width: auto;
  max-width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: block;
  img {
    display: block;
    width: auto;
    height: 100%;
  }
`;

export const CatLink = styled.a`
  cursor: pointer;
  display: block;
  position: relative;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ color }) => (color ? `#${color}` : '#222')};
  text-transform: capitalize;
  white-space: nowrap;
  padding: 0 0.5rem;
  text-decoration: none;

  & + & {
    margin-left: 0.5rem;
  }

  ::before {
    content: '';
    position: absolute;
    bottom: -0.7rem;
    left: 15%;
    width: 70%;
    height: 2px;
    background: ${({ color }) => (color ? `#${color}` : '#222')};
    transition-property: bottom, opacity;
    transition-duration: 0.25s;
    opacity: 0;
  }
  &:hover::before {
    bottom: -0.6rem;
    opacity: 1;
  }
`;

export const CatSub = styled.div`
  cursor: pointer;
  display: block;
  position: relative;
  font-size: 0.75rem;
  font-weight: 700;
  color: #f7f8fa;
  text-transform: capitalize;
  white-space: nowrap;
  padding-left: 1rem;
  padding-right: 3rem;
  margin-right: 2rem;
  z-index: 0;
  svg {
    margin-right: 0.5rem;
  }
  ::before {
    content: '';
    content: '';
    position: absolute;
    top: -70%;
    left: 0;
    width: 100%;
    height: 240%;
    background: #000;
    z-index: -1;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 12px;
  padding-right: 66px;

  :focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.9);
  }
`;

export const SearchButton = styled.button`
  height: 100%;
  width: 40px;
  cursor: pointer;
  background: ${({ noBg }) => (noBg ? 'transparent' : '#222')};
  border: 1px solid transparent;
  color: ${({ noBg }) => (noBg ? '#000' : '#fff')};
  :hover {
    filter: brightness(180%);
  }
`;

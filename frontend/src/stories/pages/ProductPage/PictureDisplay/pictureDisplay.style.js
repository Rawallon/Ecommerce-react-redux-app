import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: grid;
  user-select: none;
  position: relative;

  @media (max-width: 992px) {
    grid-template-rows: auto 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: auto 1fr;
  }
`;

export const ThumbWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;

  @media (max-width: 992px) {
    flex-direction: row;
  }
  @media (min-width: 992px) {
    flex-direction: column;
  }
`;

export const ImgThumb = styled.div`
  width: 5rem;
  height: 5rem;
  background: #000;
  border: 3px solid #f3f5f9;
  margin-bottom: 1rem;
  overflow: hidden;
  position: relative;
  :hover {
    border-color: #d1d9e8;
  }

  img {
    width: 150%;
    height: auto;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
`;

export const ImgDisplay = styled.div`
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50% -50%);
  }
`;

export const Counter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
`;

export const CounterDot = styled.div`
  width: 12px;
  height: 12px;
  border: 2px solid ${({ active }) => (active ? '#000' : '#fff')};
  background: ${({ active }) => (active ? '#fff' : 'transparent')};
  border-radius: 50%;
  margin: 0.5rem;
  opacity: ${({ active }) => (active ? '1' : '0.7')};
  transition: all 0.2s ease;
`;

export const Button = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ isLeft }) => (isLeft ? 'left: 0;' : 'right: 0;')}
  z-index: 2;

  div {
    transition: opacity 0.2s;
    opacity: ${({ show }) => (show ? '1' : '0')};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    ${({ isLeft }) => (isLeft ? 'margin-left: 16px;' : 'margin-right: 16px;')}
    background: transparent;
    box-shadow: inset 0 0 0 1px black;
    transition-property: background, box-shadow;
    transition-duration: 0.5s;

    :hover {
      background: #000;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      i {
        color: white;
      }
    }
  }

  i {
    font-size: 16px;
    color: black;
    transition: color 0.5s;
  }
`;

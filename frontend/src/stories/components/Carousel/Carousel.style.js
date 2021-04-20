import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin: auto;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 460px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 30%);
  max-width: 1320px;
  border-radius: 20px;
  overflow: hidden;
  background: #000;
  user-select: none;
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
    background: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

export const SlideItem = styled.div`
  flex: 0 0 auto;
  /* opacity: ${({ active }) => (active ? 1 : 0)}; */
  background: ${({ color }) => (color ? `#${color}` : '#000')};
  transition: all 0.2s ease;
  width: 100%;
  position: relative;

  img {
    background: #000;
  }
`;

export const Slides = styled.div`
  position: relative;
  display: flex;
  ${({ currentSlide }) =>
    currentSlide &&
    css`
      transform: translateX(-${currentSlide * 100}%);
    `};
  transition: all 0.5s ease;
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
  border: 2px solid #fff;
  background: ${({ active }) => (active ? '#fff' : 'transparent')};
  border-radius: 50%;
  margin: 0.5rem;
  opacity: ${({ active }) => (active ? '1' : '0.7')};
  transition: all 0.5s ease;
`;

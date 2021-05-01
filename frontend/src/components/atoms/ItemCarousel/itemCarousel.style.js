import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin: auto;
  position: relative;
  display: flex;
  width: 100%;
  height: 460px;
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
    ${Wrapper}:hover & {
      transform: scale(1);
      opacity: 1;
    }

    transition: opacity 0.2s, transform 0.3s;
    transform: scale(0.7);
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    ${({ isLeft }) => (isLeft ? 'margin-left: 16px;' : 'margin-right: 16px;')}
    background: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    :active {
      transform: scale(0.7);
    }
  }
`;

export const SlideItem = styled.div`
display: flex;
align-items:center;
  flex: 0 0 auto;
  /* opacity: ${({ active }) => (active ? 1 : 0)}; */
  background: ${({ color }) => (color ? `#${color}` : '#fff')};
  transition: all 0.2s ease;
  width: 100%;
  position: relative;
  padding: 0 100px;

  img {
    display: none;
    width: auto;
    height: 100%;
    margin: 0 auto;

  @media (min-width: 768px) {
    display: block;
    max-height: 368px;
    max-width: 461px;
  }

  }
`;
export const SlideItemText = styled.div`
  /* display: flex;
  flex-direction: column; */
`;
export const SlideItemTitle = styled.h1`
  font-size: 1.25rem;
  color: ${({ color }) => (color ? `#${color}` : '#fff')};
`;
export const SlideItemSubtitle = styled.p`
  text-align: right;
  margin-top: 8px;
  color: ${({ color }) => (color ? `#${color}` : '#fff')};
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
  width: 100%;
`;

export const SlideItemButton = styled.button`
  margin-top: 24px;
  border: 0;
  width: auto;
  cursor: pointer;
  color: #fff;
  display: block;
  padding: 9px 24px;
  font-size: 1rem;
  border-radius: 5px;
  background-color: ${({ normalColor }) =>
    normalColor ? `#${normalColor}` : '#fe696a'};
  transition-property: background, color;
  transition-duration: 0.25s;
  text-decoration: none;

  &:hover {
    background-color: ${({ hoverColor }) =>
      hoverColor ? `#${hoverColor}` : '#fe3638'};
  }
`;

export const Counter = styled.div`
  position: absolute;
  width: 100%;
  /* height: 100%; */
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
`;

export const CounterDot = styled.div`
  cursor: pointer;
  width: 12px;
  height: 12px;
  border: 2px solid #fff;
  background: ${({ active }) => (active ? '#fff' : 'transparent')};
  border-radius: 50%;
  margin: 0.5rem;
  opacity: ${({ active }) => (active ? '1' : '0.7')};
  transition: all 0.5s ease;
`;

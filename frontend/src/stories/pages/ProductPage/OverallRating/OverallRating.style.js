import styled, { keyframes } from 'styled-components';
export const RatingFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    line-height: 1.32;
    font-size: 2.333em;
    color: #333;
    text-align: center;
    font-weight: 700;
  }
  p {
    color: #333;
    font-size: 1.0833em;
    width: 100%;
    display: inline-block;
    line-height: 1.16;
    text-align: center;
  }
  small {
    font-size: 1.3rem;
  }
`;

export const RatingsWrapper = styled.div`
  display: grid;
  gap: 1rem;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: grid;
    grid-template-columns: minmax(1.25rem, 2rem) 1fr;
    span {
      margin-right: 1rem;
    }
  }
`;

const fill = keyframes`
  from {
    left:0;
  }

  to {
    left:100%;
  }
`;

export const Bar = styled.div`
  width: 100%;
  height: 1rem;
  border-radius: 3px;
  background: #fff;
  border: 2px solid #ccc;
  position: relative;
  z-index: 1;
  overflow: hidden;

  ::before {
    content: '';
    background: #fea569;
    position: absolute;
    height: 100%;
    width: ${({ width }) => (width ? `${width}%` : '0%')};
    top: 0;
    left: 0;
  }
  ::after {
    animation: ${fill} 1s ease forwards;
    animation-delay: ${({ delay }) => delay && `0.${delay}s`};
    content: '';
    background: #fff;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export const FormWrapper = styled.div`
  margin: 2rem 0;
  border: 1px solid hsla(0, 0%, 58%, 0.55);
  border-radius: 2px;
  padding: 24px 32px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 19%),
    inset 0 2px 1px 0 hsl(0deg 0% 100% / 50%);
`;

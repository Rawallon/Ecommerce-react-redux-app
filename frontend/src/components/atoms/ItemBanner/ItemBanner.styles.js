import styled, { keyframes } from 'styled-components';

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: ${({ background }) => `${background}`};
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 0.4375rem;
`;

export const BannerContent = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-left: 2rem;
  margin-top: 0;
  margin-bottom: 0;
  h4 {
    font-weight: 300;
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    color: #373f50;

    text-transform: capitalize !important;
    letter-spacing: 1px !important;
  }
  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.2;
    color: #373f50;

    text-transform: capitalize !important;
    letter-spacing: 1px !important;
  }
  button {
    font-weight: normal;
    line-height: 1.5;
    color: #fff;
    cursor: pointer;
    user-select: none;
    border: 0;
    padding: 0.425rem 1rem;
    font-size: 0.8125rem;
    border-radius: 0.25rem;
    background-color: #fe696a;
    border-color: #fe696a;
    box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(254, 105, 106, 0.5);

    :hover {
      border-color: #fe3638;
      background-color: #fe3638;
      box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(254, 105, 106, 0.9);
    }
  }
`;

// const move = keyframes`
//   0%   { transform: scale(1) translate(2rem, -1rem); }
//   38%  { transform: scale(1)  translate(1.7rem, 1rem) rotate(90deg); }
//   40%  { transform: scale(1) translate(1.7rem, 1rem) rotate(90deg); }
//   78%  { transform: scale(1.3) translate(1.5rem, -1.5rem) rotate(-20deg); }
//   80%  { transform: scale(1.3) translate(1.5rem, -1.5rem) rotate(-20deg); }
//   100% { transform: scale(1) translate(2rem, -1rem); }`;

export const BannerImage = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }

  img {
    position: absolute;
    right: 2rem;
    top: 20%;
    max-height: 170px;
    height: 70%;
    width: auto;
  }

  svg {
    transform: scale(1.3) translate(1rem, -1rem) rotate(-70deg);
    position: absolute;
    right: 0;
    top: 0;
    max-height: 200px;
    height: 200%;
    width: auto;
  }
`;

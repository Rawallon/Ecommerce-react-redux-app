import styled, { css, keyframes } from 'styled-components';

function blinkingEffect() {
  return keyframes`
   0%{
       border: 1px solid #222;
   }
   25%{
       border: 1px solid red;
   }
   50%{
       border: 1px solid #222;
   }
   75% {
       border: 1px solid red;
   }
   100% {
       border: 1px solid #222;
   }
  `;
}

function blinkingColor() {
  return keyframes`
   0%{
       color: black;
   }
   25%{
       color: red;
   }
   50%{
       color: black;
   }
   75% {
       color: red;
   }
   100% {
       color: black;
   }
  `;
}
export const Wrapper = styled.div`
  animation: ${({ warn }) =>
    warn
      ? css`
          ${blinkingEffect} 1s ease;
        `
      : ''};

  min-width: 120px;
  width: 120px;
  height: 40px;
  border: 1px solid #222;
  text-align: center;
  border-radius: 40px;
  display: inline-block;
  position: relative;
`;

export const QtyInput = styled.input`
  animation: ${({ warn }) =>
    warn
      ? css`
          ${blinkingColor} 1s ease;
        `
      : ''};
  width: 35px;
  border: 0;
  height: 38px;
  background: 0 0;
  padding: 0;
  font-weight: 600;
  font-size: 16px;
  color: #222;
  border-radius: 0;
  max-width: 100%;
  outline: 0;
  line-height: 18px;
  transition: border-color 0.5s;
  box-shadow: none;
  text-align: center;
`;

export const BtnWrapper = styled.div`
  text-align: center;
  font-size: 14px;
`;

export const Button = styled.button`
  animation: ${({ warn }) =>
    warn
      ? css`
          ${blinkingColor} 1s ease;
        `
      : ''};
  top: 0;
  width: 30px;
  height: 40px;
  line-height: 40px;
  border: 0;
  background: 0 0;
  color: #000;
  position: absolute;

  border-radius: 40px;
  font-size: 14px;
  font-weight: 600;
  min-height: 40px;
  transition: all 0.2s;

  :hover {
    color: #fe696a;
  }
  :active {
    color: #fd1d1f;
  }
`;

export const MinusButton = styled(Button)`
  left: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  padding: 0;
`;

export const PlusButton = styled(Button)`
  right: 0;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 15px;
  padding: 0;
`;

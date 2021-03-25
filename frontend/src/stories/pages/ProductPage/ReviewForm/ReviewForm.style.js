import styled from 'styled-components';

export const FormWrapper = styled.div`
  margin: 2rem 0;
  border: 1px solid hsla(0, 0%, 58%, 0.55);
  border-radius: 2px;
  padding: 24px 32px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 19%),
    inset 0 2px 1px 0 hsl(0deg 0% 100% / 50%);
`;

export const FormFlex = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
`;

export const InputField = styled.input`
  border: 1px solid #b4b4b4;
  border-radius: 3px;
  padding: 0.75rem;
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 25%);
  font-size: 14px;
`;

export const TextareaField = styled.textarea`
  border: 1px solid #b4b4b4;
  border-radius: 3px;
  padding: 0.75rem;
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 25%);
  font-size: 14px;
`;

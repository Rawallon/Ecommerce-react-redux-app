import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
  @media (max-width: 576px) {
    grid-template-rows: 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ModalStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const ModalContent = styled.div`
  border: 3px solid #f3f5f9;
  width: 70%;
  background: #fff;
  padding: 2rem;
  border-radius: 0.4rem;
`;
export const ModalBody = styled.div`
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  /* left: -300%; */
  transition: all 0.3s ease-in-out;
  z-index: 3;
`;

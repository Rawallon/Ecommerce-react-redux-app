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

  @media (max-width: 992px) {
    flex-direction: row;
    justify-content: center;
  }
  @media (min-width: 992px) {
    margin-right: 1rem;
    flex-direction: column;
  }
`;

export const ImgThumb = styled.div`
  width: 5rem;
  height: 5rem;
  background: #000;
  border: 3px solid ${({ active }) => (active ? '#797A7C' : '#f3f5f9')};
  margin-bottom: 1rem;
  overflow: hidden;
  position: relative;
  transition: border 0.3s;
  :hover {
    border-color: ${({ active }) => (active ? '#797A7C' : '#d1d9e8')};
  }

  img {
    width: 150%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ImgDisplay = styled.div`
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 508px;
    width: auto;
    height: auto;
    top: 50%;
    left: 50%;
  }
`;

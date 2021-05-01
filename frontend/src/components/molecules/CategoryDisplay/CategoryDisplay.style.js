import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

export const CategoryImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ background }) => `#${background}`};
  border-radius: 18px;

  img {
    max-height: 495px;
    width: auto;
    border-radius: 0 0 18px 18px;
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export const CategoryTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  h3 {
    margin-bottom: 0.25rem;
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.2;
    color: #373f50;
  }

  a {
    font-size: 0.9375rem;
    color: #fe696a;
    text-decoration: none;
  }
`;

export const CategoryItems = styled.div`
  gap: 0.5rem;
  display: grid;
  margin-top: 2rem;
  justify-items: center;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const CategoryImageLink = styled.a`
  margin-top: auto;
  img {
    width: 100%;
    height: auto;
    bottom: 0;
  }
`;

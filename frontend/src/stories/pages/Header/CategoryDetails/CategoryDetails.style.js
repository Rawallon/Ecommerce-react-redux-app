import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  position: relative;
  z-index: auto;
  /* left: 100%; */
  top: 0;
  width: 716px;
  height: 100%;
  min-height: 469px;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  padding: 1.6rem 3rem;
  font-weight: 400;
  vertical-align: middle;
  transition: background-image 0.8s ease-in-out;
  height: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    padding: 1.6rem 0.875rem;
  }
`;

export const Title = styled.p`
  margin-top: 0;
  margin-bottom: 17px;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.8);
`;

export const RowWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Column = styled.div`
  display: block;
  margin: 10px;
`;

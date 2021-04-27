import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;

  & + & {
    margin-top: 2rem;
  }
`;

export const Content = styled.section``;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  border-bottom: 1px solid #bfbfbf;
  margin-bottom: 20px;

  span {
    position: relative;
    padding: 16px 0;
    line-height: 12px;
    border-bottom: 1px solid;
    margin-bottom: -1px;
  }
`;

export const Text = styled.div`
  margin-top: 0.5em;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;
export const ReviewWrapper = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: auto;
  grid-gap: 1rem;
  margin-top: 1rem;
`;
export const ReviewCard = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  min-height: 125px;
  color: #333;
  padding: 0 15px 12px;
`;

export const CardTitle = styled.div`
  margin: 0 -15px;
  padding: 0.2rem 1rem;
  background: #ccc;
  color: white;
  display: flex;
  justify-content: space-between;
`;

export const ReviewTitle = styled.div`
  color: black;
  font-weight: 700;
  font-size: 1.1em;

  span {
    text-transform: capitalize;
  }
`;

export const ReviewContent = styled.div``;

export const ReviewTime = styled.div`
  display: block;
  width: max-content;
  max-width: 100%;
`;

export const RatingWrapper = styled.div``;
export const RatingTitle = styled.div`
  margin: 0.5rem 0;

  display: grid;
  gap: 0.5rem;
  align-items: center;
  @media (min-width: 576px) {
    grid-template-columns: auto 1fr;
  }
`;

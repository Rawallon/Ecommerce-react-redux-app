import React, { useEffect, useState } from 'react';
import {
  Bar,
  BarWrapper,
  RatingsWrapper,
  RatingFlex,
  PageWrapper,
  FormWrapper,
} from './OverallRating.style';
import Rating from '../../../components/Rating';
import { StyledButton } from '../../../GlobalStyle.style';
import ReviewForm from '../ReviewForm';

export default function OverallRating({ isUserLogged, product }) {
  const [overallRating, setOverallRating] = useState(0);
  const [isReviewing, setIsReviewing] = useState(false);

  useEffect(() => {
    const allRatings = product.reviews.reduce((ac, cv) => ac + +cv.rating, 0);
    setOverallRating(Number(allRatings) / Number(product.reviews.length) || 0);
  }, [product]);

  const BarRatingRender = () =>
    [...Array(5)].map((_, index) => (
      <div>
        <span>{index + 1}</span>
        <Bar
          delay={index}
          width={
            (product.reviews.filter(
              (r) => Number(r.rating) === Number(index + 1),
            ).length /
              product.reviews.length) *
            100
          }
        />
      </div>
    ));
  return (
    <PageWrapper>
      <RatingsWrapper>
        <RatingFlex>
          {isUserLogged ? (
            <StyledButton onClick={() => setIsReviewing(true)}>
              Add your review
            </StyledButton>
          ) : (
            <StyledButton fontColor="4b566b" bgColor="f3f5f9" bgHover="d1d9e8">
              Login to your review
            </StyledButton>
          )}
        </RatingFlex>
        <RatingFlex>
          <p>Average</p>
          <span>
            {Number(overallRating).toFixed(1)}
            <small>/5</small>
          </span>
          <Rating rating={overallRating} />
        </RatingFlex>
        <BarWrapper>{BarRatingRender()}</BarWrapper>
      </RatingsWrapper>
      <FormWrapper display={isReviewing}>
        <ReviewForm setIsReviewing={setIsReviewing} />
      </FormWrapper>
    </PageWrapper>
  );
}

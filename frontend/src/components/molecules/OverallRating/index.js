import React, { useEffect, useState } from 'react';

import {
  Bar,
  BarWrapper,
  RatingsWrapper,
  RatingFlex,
  PageWrapper,
  FormWrapper,
} from './OverallRating.style';
import { StyledButton } from '../../../styles/bootstrap.style';

import Rating from '../../atoms/Rating';
import ReviewForm from '../ReviewForm';

export default function OverallRating({ isUserLogged, product, reviewCreate }) {
  const [overallRating, setOverallRating] = useState(0);
  const [isReviewing, setIsReviewing] = useState(false);

  useEffect(() => {
    const allRatings = product.reviews.reduce((ac, cv) => ac + +cv.rating, 0);
    setOverallRating(Number(allRatings) / Number(product.reviews.length) || 0);
  }, [product]);

  const BarRatingRender = () =>
    // Creating an empty array so i don't have to manually type it.
    // Note: could be used later to expand the rating amount
    Array(5)
      .fill()
      .map((_, index) => (
        <div key={index}>
          <span>{index + 1}</span>
          <Bar
            delay={index}
            // To calculate width/percentage:
            // Loops through all the ratings and then filters the ones with the index
            // then it divides by the total amount of reviews or returns 0, since it returns NaN otherwise
            width={
              (product.reviews.filter(
                (r) => Number(r.rating) === Number(index + 1),
              ).length /
                product.reviews.length) *
                100 || 0
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
      {isReviewing && (
        <>
          <FormWrapper>
            <ReviewForm
              setIsReviewing={setIsReviewing}
              reviewCreate={reviewCreate}
            />
          </FormWrapper>
        </>
      )}
    </PageWrapper>
  );
}

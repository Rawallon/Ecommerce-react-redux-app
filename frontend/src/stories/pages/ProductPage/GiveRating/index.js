import React from 'react';
import { Wrapper } from './Rating.style';
import { BsStar, BsStarFill } from 'react-icons/bs';

export default function GiveRating({
  color = '#fea569',
  currentRating,
  setCurrentRating,
}) {
  function returnIcon(value, compare) {
    if (value >= compare)
      return (
        <BsStarFill onClick={() => setCurrentRating(compare)} color={color} />
      );
    else
      return <BsStar onClick={() => setCurrentRating(compare)} color={color} />;
  }

  return (
    <Wrapper>
      {returnIcon(currentRating, 1)}
      {returnIcon(currentRating, 2)}
      {returnIcon(currentRating, 3)}
      {returnIcon(currentRating, 4)}
      {returnIcon(currentRating, 5)}
    </Wrapper>
  );
}

import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

import { Wrapper } from './Rating.style';

export default function GiveRating({
  color = '#fea569',
  currentRating,
  setCurrentRating,
}) {
  function returnIcon(value, compare) {
    if (value >= compare)
      return (
        <BsStarFill
          key={value}
          onClick={() => setCurrentRating(compare)}
          color={color}
        />
      );
    else
      return (
        <BsStar
          key={value}
          onClick={() => setCurrentRating(compare)}
          color={color}
        />
      );
  }

  // Creates an empty array then loops through it rendering returnIcon
  // Maybe using a propper loop would be more performatic (< 0.1ms?)
  return (
    <Wrapper>
      {Array(5)
        .fill()
        .map((_, index) => returnIcon(currentRating, index + 1))}
      {/* Maybe?
      {returnIcon(currentRating, 1)}
      {returnIcon(currentRating, 2)}
      {returnIcon(currentRating, 3)}
      {returnIcon(currentRating, 4)}
      {returnIcon(currentRating, 5)}         */}
    </Wrapper>
  );
}

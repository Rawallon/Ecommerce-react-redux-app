import React from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

import { Wrapper } from './Rating.style';

export default function Rating({ rating, count, color = '#fea569' }) {
  function returnIcon(value, compare) {
    if (value >= compare) return <BsStarFill color={color} />;
    else if (Math.round(value) >= compare) return <BsStarHalf color={color} />;
    else return <BsStar color={color} />;
  }

  // Creates an empty array then loops through it rendering returnIcon
  return (
    <Wrapper>
      {Array(5)
        .fill()
        .map((_, index) => returnIcon(rating, index + 1))}
      {count && <span>({count})</span>}
    </Wrapper>
  );
}

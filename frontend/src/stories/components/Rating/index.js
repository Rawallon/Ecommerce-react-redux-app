import React from 'react';
import { Wrapper } from './Rating.style';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

export default function Rating({
  rating,
  count,
  color = '#fea569',
  align,
  bsIcon = true,
}) {
  function returnStarIcon(value, compare) {
    if (value >= compare) return 'fas fa-star fa-xs';
    else if (Math.round(value) >= compare) return 'fas fa-star-half-alt fa-xs';
    else return 'far fa-star fa-xs';
  }

  function returnIcon(value, compare) {
    if (value >= compare) return <BsStarFill color={color} />;
    else if (Math.round(value) >= compare) return <BsStarHalf color={color} />;
    else return <BsStar color={color} />;
  }

  if (bsIcon) {
    return (
      <Wrapper>
        {returnIcon(rating, 1)}
        {returnIcon(rating, 2)}
        {returnIcon(rating, 3)}
        {returnIcon(rating, 4)}
        {returnIcon(rating, 5)}
        {count && <span>({count})</span>}
      </Wrapper>
    );
  } else {
    return (
      <Wrapper align={align}>
        <i style={{ color: color }} className={returnStarIcon(rating, 1)}></i>
        <i style={{ color: color }} className={returnStarIcon(rating, 2)}></i>
        <i style={{ color: color }} className={returnStarIcon(rating, 3)}></i>
        <i style={{ color: color }} className={returnStarIcon(rating, 4)}></i>
        <i style={{ color: color }} className={returnStarIcon(rating, 5)}></i>
        {count && <span>({count})</span>}
      </Wrapper>
    );
  }
}

import React from 'react';
import propTypes from 'prop-types';

export default function Rating({ rating, count, color = 'yellow' }) {
  function returnStarIcon(value, compare) {
    if (value >= compare) return 'fas fa-star';
    else if (value - 0.5) return 'fas fa-star-half-alt';
    else return 'far fa-star';
  }
  return (
    <div className="rating">
      <i style={{ color: color }} className={returnStarIcon(rating, 1)}></i>
      <i style={{ color: color }} className={returnStarIcon(rating, 2)}></i>
      <i style={{ color: color }} className={returnStarIcon(rating, 3)}></i>
      <i style={{ color: color }} className={returnStarIcon(rating, 4)}></i>
      <i style={{ color: color }} className={returnStarIcon(rating, 5)}></i>
      {count && <span className="ml-2">({count})</span>}
    </div>
  );
}

Rating.propTypes = {
  rating: propTypes.number,
  count: propTypes.number,
  color: propTypes.string,
};

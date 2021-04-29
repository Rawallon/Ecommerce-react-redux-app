import React from 'react';

import { Alert } from '../../../styles/bootstrap.style';

export default function Message({ variant = 'info', children }) {
  function chosenColor(variant) {
    switch (variant) {
      default:
      case 'info':
        return ['#10516c', '#d2ebf5'];
      case 'danger':
        return ['#712b29', '#f7dddc'];
      case 'success':
        return ['#27633c', '#dbf2e3'];
      case 'warning':
        return ['#7d5a29', '#fcefdc'];
    }
  }
  return <Alert variant={chosenColor(variant)}>{children}</Alert>;
}

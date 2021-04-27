import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

import {
  BtnWrapper,
  MinusButton,
  PlusButton,
  QtyInput,
  Wrapper,
} from './quantity.style';

export default function Quantity({ qty, setQty, numInStock }) {
  const [warn, setWarn] = useState(false);

  const changeQty = (action) => {
    if (action === 'add') {
      if (qty + 1 <= numInStock) {
        setQty((prevVal) => prevVal + 1);
      } else {
        setWarn(true);
      }
    } else {
      if (qty - 1 > 0) setQty((prevVal) => prevVal - 1);
      else {
        setWarn(true);
      }
    }
  };

  // This is used to allow "blink" animation to happen
  useEffect(() => {
    if (warn)
      setTimeout(() => {
        setWarn(false);
      }, 1000);
  }, [warn]);

  return (
    <Wrapper warn={warn}>
      <QtyInput
        warn={warn}
        max={numInStock}
        value={qty}
        onChange={() => setQty(qty)}></QtyInput>
      <BtnWrapper>
        <MinusButton warn={warn} onClick={() => changeQty('rem')}>
          <FaMinus />
        </MinusButton>
        <PlusButton warn={warn} onClick={() => changeQty('add')}>
          <FaPlus />
        </PlusButton>
      </BtnWrapper>
    </Wrapper>
  );
}

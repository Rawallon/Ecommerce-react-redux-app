import React, { useEffect, useState } from 'react';
import {
  BtnWrapper,
  MinusButton,
  PlusButton,
  QtyInput,
  Wrapper,
} from './quantity.style';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function Quantity({ numInStock }) {
  const [state, setState] = useState(1);
  const [warn, setWarn] = useState(false);

  const changeQty = (action) => {
    if (action === 'add') {
      if (state + 1 <= numInStock) {
        setState((prevVal) => prevVal + 1);
      } else {
        setWarn(true);
      }
    } else {
      if (state - 1 > 0) setState((prevVal) => prevVal - 1);
      else {
        setWarn(true);
      }
    }
  };

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
        value={state}
        onChange={(e) => setState(state)}></QtyInput>
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

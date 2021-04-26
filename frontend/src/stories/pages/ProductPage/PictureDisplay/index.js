import React, { useState } from 'react';
import {
  ImgDisplay,
  ImgThumb,
  PageWrapper,
  ThumbWrapper,
  Button,
  Counter,
  CounterDot,
} from './pictureDisplay.style';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function PictureDisplay({ images, slider = false }) {
  const [state, setState] = useState(0);
  const [mouseX, setMouseX] = useState(null);

  const changeImage = (param) => {
    if (param === 'prev') {
      if (state - 1 >= 0) {
        setState(state - 1);
      } else {
        setState(images.length - 1);
      }
    } else {
      if (state + 1 < images.length) {
        setState(state + 1);
      } else {
        setState(0);
      }
    }
  };

  const mouseDown = (e) => {
    if (mouseX && e.clientX !== mouseX) {
      if (e.clientX > mouseX) {
        changeImage('prev');
      } else {
        changeImage('next');
      }
    }
  };
  return (
    <PageWrapper>
      {!slider && (
        <ThumbWrapper>
          {images.map((img, index) => (
            <ImgThumb
              active={state === index}
              key={index}
              onMouseEnter={() => setState(index)}>
              <img src={img} alt="" draggable="false" />
            </ImgThumb>
          ))}
        </ThumbWrapper>
      )}
      <ImgDisplay
        onMouseDown={(e) => setMouseX(e.clientX)}
        onMouseUp={(e) => mouseDown(e)}>
        {slider && (
          <>
            <Counter>
              {images.map((s, i) => (
                <CounterDot key={i} active={state === i}>
                  {' '}
                </CounterDot>
              ))}
            </Counter>
            <Button show={true} onClick={() => changeImage('prev')} isLeft>
              <div>
                <FaChevronLeft />
              </div>
            </Button>
          </>
        )}
        <img src={images[state]} alt="" draggable="false" />
        {slider && (
          <Button show={true} onClick={() => changeImage('next')}>
            <div>
              <FaChevronRight />
            </div>
          </Button>
        )}
      </ImgDisplay>
    </PageWrapper>
  );
}

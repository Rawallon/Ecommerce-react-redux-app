import React, { useState } from 'react';

import {
  ImgDisplay,
  ImgThumb,
  PageWrapper,
  ThumbWrapper,
} from './pictureDisplay.style';

export default function PictureDisplay({ images }) {
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
      <ImgDisplay
        onMouseDown={(e) => setMouseX(e.clientX)}
        onMouseUp={(e) => mouseDown(e)}>
        <img src={images[state]} alt="" draggable="false" />
      </ImgDisplay>
    </PageWrapper>
  );
}

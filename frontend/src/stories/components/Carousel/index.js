import React, { useState, useEffect } from 'react';
import {
  Button,
  Wrapper,
  SlideItem,
  Slides,
  Counter,
  CounterDot,
} from './Carousel.style';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Carousel(slides) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [intName, setIntName] = useState(null);
  const [mouseX, setMouseX] = useState(null);

  const changeImage = (param) => {
    if (param === 'prev') {
      if (currentImage - 1 >= 0) {
        setCurrentImage(currentImage - 1);
      } else {
        setCurrentImage(Object.keys(slides).length - 1);
      }
    } else {
      if (currentImage + 1 < Object.keys(slides).length) {
        setCurrentImage(currentImage + 1);
      } else {
        setCurrentImage(0);
      }
    }
  };

  const clearInt = () => {
    if (intName) {
      clearInterval(intName);
    }
    let newIntName = setTimeout(() => {
      changeImage('next');
    }, 2000);
    setIntName(newIntName);
    return;
  };

  useEffect(() => {
    if (currentImage) clearInt();
    return () => {
      clearInt();
    };
  }, [currentImage]);

  const renderImages = () => {
    return Object.values(slides).map((slide, index) => (
      <SlideItem
        onMouseDown={(e) => setMouseX(e.clientX)}
        onMouseUp={(e) => mouseDown(e)}
        active={currentImage === index}
        color={slide.color}
        key={slide._id}>
        <img src={slide.img} alt="" draggable="false" />
      </SlideItem>
    ));
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
    <Wrapper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <Counter>
        {Object.keys(slides).map((s, i) => (
          <CounterDot key={i} active={currentImage === i}></CounterDot>
        ))}
      </Counter>
      <Button show={isHover} onClick={() => changeImage('prev')} isLeft>
        <div>
          <FaChevronLeft />
        </div>
      </Button>
      <Slides currentSlide={currentImage}>{renderImages()}</Slides>
      <Button show={isHover} onClick={() => changeImage('next')}>
        <div>
          <FaChevronRight />
        </div>
      </Button>
    </Wrapper>
  );
}

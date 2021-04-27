import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import {
  Button,
  Wrapper,
  SlideItem,
  Slides,
  Counter,
  CounterDot,
  SlideItemTitle,
  SlideItemSubtitle,
  SlideItemButton,
  SlideItemText,
} from './itemCarousel.style';

export default function Carousel({ productList, duration }) {
  const { loading, products } = productList;
  const [currentImage, setCurrentImage] = useState(0);
  const [mouseX, setMouseX] = useState(null);

  const changeImage = useCallback(
    (param) => {
      if (param === 'prev') {
        if (currentImage - 1 >= 0) {
          setCurrentImage(currentImage - 1);
        } else {
          setCurrentImage(Object.keys(products).length - 1);
        }
      } else {
        if (currentImage + 1 < Object.keys(products).length) {
          setCurrentImage(currentImage + 1);
        } else {
          setCurrentImage(0);
        }
      }
    },
    [currentImage, products],
  );

  useEffect(() => {
    let timer1 = setTimeout(() => {
      changeImage('next');
    }, duration);

    return () => {
      clearTimeout(timer1);
    };
  }, [changeImage, currentImage, duration]);

  const handleMouseDown = (e) => {
    if (mouseX && e.clientX !== mouseX) {
      if (e.clientX > mouseX) {
        changeImage('prev');
      } else {
        changeImage('next');
      }
    }
  };

  if (loading) return null;

  return (
    <Wrapper>
      <Counter>
        {Object.keys(products).map((s, i) => (
          <CounterDot
            key={i}
            active={currentImage === i}
            onClick={() => setCurrentImage(i)}
          />
        ))}
      </Counter>
      <Button onClick={() => changeImage('prev')} isLeft>
        <div>
          <FaChevronLeft />
        </div>
      </Button>
      <Slides currentSlide={currentImage}>
        {Object.values(products).map((item, index) => (
          <SlideItem
            onMouseDown={(e) => setMouseX(e.clientX)}
            onMouseUp={(e) => handleMouseDown(e)}
            active={currentImage === index}
            color={item.bgColor}
            key={item._id}>
            <Link to={`/product/${item._id}`}>
              <SlideItemText>
                <SlideItemTitle color={item.nameColor}>
                  {item.name}
                </SlideItemTitle>
                <SlideItemSubtitle color={item.nameColor}>
                  For only $ {item.price}
                </SlideItemSubtitle>
                <SlideItemButton>Shop now!</SlideItemButton>
              </SlideItemText>
            </Link>
            <img src={item.image} alt="" draggable="false" />
          </SlideItem>
        ))}
      </Slides>
      <Button onClick={() => changeImage('next')}>
        <div>
          <FaChevronRight />
        </div>
      </Button>
    </Wrapper>
  );
}

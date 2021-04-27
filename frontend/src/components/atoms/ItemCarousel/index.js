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
  const [isHover, setIsHover] = useState(false);
  const [mouseX, setMouseX] = useState(null);
  const [clearTO, setClearTO] = useState(false);

  const changeImage = useCallback(
    (param) => {
      if (loading) return;
      if (param === 'prev') {
        if (currentImage - 1 >= 0) {
          setCurrentImage((prevVal) => setCurrentImage(prevVal - 1));
        } else {
          setCurrentImage(Object.keys(productList.products).length - 1);
        }
      } else {
        if (currentImage + 1 < Object.keys(productList.products).length) {
          setCurrentImage((prevVal) => setCurrentImage(prevVal + 1));
        } else {
          setCurrentImage(0);
        }
      }
    },
    [currentImage, loading, productList],
  );

  function handleUserChange(dir) {
    changeImage(dir);
    setClearTO(true);
  }

  useEffect(() => {
    let timer1 = setTimeout(() => {
      changeImage('next');
    }, duration);
    if (clearTO) {
      clearTimeout(timer1);
      timer1 = setTimeout(() => {
        changeImage('next');
      }, duration);
      setClearTO(!clearTO);
    }
    return () => {
      clearTimeout(timer1);
    };
  }, [changeImage, clearTO, currentImage, duration]);

  const renderImages = () => {
    return Object.values(products).map((item, index) => (
      <SlideItem
        onMouseDown={(e) => setMouseX(e.clientX)}
        onMouseUp={(e) => mouseDown(e)}
        active={currentImage === index}
        color={item.bgColor}
        key={item._id}>
        <Link to={`/product/${item._id}`}>
          <SlideItemText>
            <SlideItemTitle color={item.nameColor}>{item.name}</SlideItemTitle>
            <SlideItemSubtitle color={item.nameColor}>
              For only $ {item.price}
            </SlideItemSubtitle>
            <SlideItemButton>Shop now!</SlideItemButton>
          </SlideItemText>
        </Link>
        <img src={item.image} alt="" draggable="false" />
      </SlideItem>
    ));
  };

  const mouseDown = (e) => {
    if (mouseX && e.clientX !== mouseX) {
      if (e.clientX > mouseX) {
        handleUserChange('prev');
      } else {
        handleUserChange('next');
      }
    }
  };
  if (loading) return null;
  else
    return (
      <Wrapper
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}>
        <Counter>
          {Object.keys(products).map((s, i) => (
            <CounterDot
              key={i}
              active={currentImage === i}
              onClick={() => setCurrentImage(i)}
            />
          ))}
        </Counter>
        <Button show={isHover} onClick={() => handleUserChange('prev')} isLeft>
          <div>
            <FaChevronLeft />
          </div>
        </Button>
        <Slides currentSlide={currentImage}>{renderImages()}</Slides>
        <Button show={isHover} onClick={() => handleUserChange('next')}>
          <div>
            <FaChevronRight />
          </div>
        </Button>
      </Wrapper>
    );
}

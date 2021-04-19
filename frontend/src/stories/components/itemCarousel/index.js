import React, { useState, useEffect } from 'react';
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
  const [intName, setIntName] = useState(null);
  const [mouseX, setMouseX] = useState(null);

  const changeImage = (param) => {
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
  };

  const clearInt = () => {
    if (intName) {
      clearInterval(intName);
    }
    let newIntName = setTimeout(() => {
      changeImage('next');
    }, duration);
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
    return Object.values(products).map((item, index) => (
      <SlideItem
        onMouseDown={(e) => setMouseX(e.clientX)}
        onMouseUp={(e) => mouseDown(e)}
        active={currentImage === index}
        color={item.bgColor}
        key={item._id}>
        <SlideItemText>
          <SlideItemTitle color={item.nameColor}>{item.name}</SlideItemTitle>
          <SlideItemSubtitle color={item.nameColor}>
            For only $ {item.price}
          </SlideItemSubtitle>
          <Link to={`/product/${item._id}`}>
            <SlideItemButton>Shop now!</SlideItemButton>
          </Link>
        </SlideItemText>
        <img src={item.image} alt="" draggable="false" />
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
  if (loading) return null;
  else
    return (
      <Wrapper
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}>
        <Counter>
          {Object.keys(products).map((s, i) => (
            <CounterDot key={i} active={currentImage === i}>
              {' '}
            </CounterDot>
          ))}
        </Counter>
        <Button show={isHover} onClick={() => changeImage('prev')} isLeft>
          <div>
            <i className="fas fa-chevron-left"></i>
          </div>
        </Button>
        <Slides currentSlide={currentImage}>{renderImages()}</Slides>
        <Button show={isHover} onClick={() => changeImage('next')}>
          <div>
            <i className="fas fa-chevron-right"></i>
          </div>
        </Button>
      </Wrapper>
    );
}

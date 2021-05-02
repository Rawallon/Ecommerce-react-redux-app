import React from 'react';
import { Link } from 'react-router-dom';

import { StyledButton } from '../../../styles/bootstrap.style';
import { Banner, BannerContent, BannerImage } from './ItemBanner.styles';

export default function itemBanner({ loading, featuredMessage }) {
  const {
    messageTitle,
    messageSubtitle,
    messageColor,
    messageLink,
    messageButton,
    messageImage,
  } = featuredMessage;

  if (loading) return null;

  return (
    <Banner background={'#' + messageColor}>
      <BannerContent>
        <h4>{messageSubtitle}</h4>
        <h3>{messageTitle}</h3>
        <Link to={messageLink}>
          <StyledButton width="auto">{messageButton}</StyledButton>
        </Link>
      </BannerContent>
      <BannerImage>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#fe696a"
            d="M38.8,-14C43.9,3,37.2,22.4,20.6,36.4C4,50.4,-22.5,58.9,-37.3,48.8C-52.1,38.7,-55.2,9.9,-47,-11.4C-38.8,-32.7,-19.4,-46.5,-1.3,-46.1C16.9,-45.7,33.7,-31.1,38.8,-14Z"
            transform="translate(100 100)"
          />
        </svg>
        <img src={messageImage} alt="" />
      </BannerImage>
    </Banner>
  );
}

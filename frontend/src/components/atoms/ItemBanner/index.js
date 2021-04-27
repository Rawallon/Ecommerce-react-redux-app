import React from 'react';
import { Link } from 'react-router-dom';

import { StyledButton } from '../../../styles/bootstrap.style';
import { Banner, BannerContent } from './ItemBanner.styles';

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
      <img src={messageImage} alt="" />
    </Banner>
  );
}

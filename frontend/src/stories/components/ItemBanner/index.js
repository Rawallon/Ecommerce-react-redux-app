import React from 'react';
import { StyledButton } from '../../GlobalStyle.style';
import { Banner, BannerContent } from './ItemBanner.styles';

export default function itemBanner({
  background = '#f6f9fc',
  sub,
  title,
  image,
  button = 'Shop Now',
}) {
  return (
    <Banner background={background}>
      <BannerContent>
        <h4>{sub}</h4>
        <h3>{title}</h3>
        <StyledButton width="auto">{button}</StyledButton>
      </BannerContent>
      <img src={image} alt="" />
    </Banner>
  );
}

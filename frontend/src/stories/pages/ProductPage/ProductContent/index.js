import React from 'react';
import {
  CardTitle,
  RatingTitle,
  RatingWrapper,
  ReviewCard,
  ReviewContent,
  ReviewTime,
  ReviewTitle,
  ReviewWrapper,
  Text,
  Title,
  Wrapper,
} from './ProductContent.style';
import { Container } from '../../../GlobalStyle.style';
import Rating from '../../../components/Rating';
import OverallRating from '../OverallRating';
export default function ProductContent({
  isUserLogged,
  product,
  reviewCreate,
}) {
  return (
    <Container>
      <Wrapper>
        <Title>
          <span>Description</span>
        </Title>
        <Text>{product.description}</Text>
      </Wrapper>
      <Wrapper>
        <Title>
          <span>User reviews</span>
        </Title>
        <OverallRating
          reviewCreate={reviewCreate}
          isUserLogged={isUserLogged}
          product={product}
        />
        <ReviewWrapper>
          {product.reviews.map((review) => {
            var d = new Date(review.createdAt);
            return (
              <ReviewCard key={review.title}>
                <CardTitle>
                  <span>{review.name}</span>
                  <ReviewTime>
                    {d.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </ReviewTime>
                </CardTitle>
                <RatingTitle>
                  <RatingWrapper>
                    <Rating rating={review.rating} align="flex-start" />
                  </RatingWrapper>
                  <ReviewTitle>{review.title}</ReviewTitle>
                </RatingTitle>
                <ReviewContent>{review.comment}</ReviewContent>
              </ReviewCard>
            );
          })}
        </ReviewWrapper>
      </Wrapper>
    </Container>
  );
}

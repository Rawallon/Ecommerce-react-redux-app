import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Product from '../stories/components/CategoryProduct/';
import {
  listFeaturedProducts,
  listProducts,
  listTopProducts,
} from '../actions/productActions';
import Meta from '../components/Meta';
import Carousel from '../stories/components/itemCarousel';
import ItemBanner from '../stories/components/ItemBanner';
import CategoryDisplay from '../stories/components/CategoryDisplay';
import {
  listFeaturedMessage,
  listFeaturedCategory,
} from '../actions/shopActions';

const Row = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
const Col = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 992px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
`;

export function Home({
  listProducts,
  listTopProducts,
  productTopRated,
  listFeaturedProducts,
  featuredMessage,
  featuredCategory,
  productFeatured,
  listFeaturedMessage,
  listFeaturedCategory,
}) {
  useEffect(() => {
    listFeaturedMessage();
    listFeaturedCategory();
    listFeaturedProducts();
    listTopProducts();
    listProducts('', 1);
  }, [
    listProducts,
    listTopProducts,
    listFeaturedProducts,
    listFeaturedMessage,
    listFeaturedCategory,
  ]);
  return (
    <>
      <Meta title="Home" />
      <Carousel productList={productFeatured} duration={20000} />
      <h1>Our top rated products</h1>
      <Row>
        {!productTopRated.loading &&
          productTopRated.products?.slice(0, 3).map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
              <Product {...product} />
            </Col>
          ))}

        <ItemBanner {...featuredMessage} />
        <CategoryDisplay {...featuredCategory} />
      </Row>
    </>
  );
}
//
const mapStateToProps = (state) => ({
  productFeatured: state.productFeatured,
  productTopRated: state.productTopRated,
  featuredMessage: state.featuredMessage,
  featuredCategory: state.featuredCategory,
});

const mapDispatchToProps = {
  listProducts,
  listTopProducts,
  listFeaturedMessage,
  listFeaturedCategory,
  listFeaturedProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

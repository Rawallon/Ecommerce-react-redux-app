import React, { useEffect } from 'react';
import { connect } from 'react-redux';

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
import { Col, Row } from '../styles/bootstrap.style';
import { HeaderText } from '../styles/main.styles';

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
      <HeaderText textAlign={'center'}>Our top rated products</HeaderText>
      <Row>
        {!productTopRated.loading &&
          productTopRated.products?.slice(0, 3).map((product) => (
            <Col key={product._id} sm md lg>
              <Product {...product} />
            </Col>
          ))}
      </Row>
      <ItemBanner {...featuredMessage} />
      <CategoryDisplay {...featuredCategory} />
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

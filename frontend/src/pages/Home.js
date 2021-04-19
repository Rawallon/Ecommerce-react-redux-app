import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../stories/components/CategoryProduct/';
import {
  listFeaturedProducts,
  listProducts,
  listTopProducts,
} from '../actions/productActions';
import Meta from '../components/Meta';
import Prefetch from '../components/Prefetch';
import Carousel from '../stories/components/itemCarousel';
import ItemBanner from '../stories/components/ItemBanner';
import CategoryDisplay from '../stories/components/CategoryDisplay';
import {
  listFeaturedMessage,
  listFeaturedCategory,
} from '../actions/shopActions';

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

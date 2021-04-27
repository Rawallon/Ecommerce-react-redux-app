import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  listFeaturedProducts,
  listProducts,
  listTopProducts,
} from '../actions/productActions';
import {
  listFeaturedMessage,
  listFeaturedCategory,
} from '../actions/shopActions';
import ItemBanner from '../components/atoms/ItemBanner';
import Carousel from '../components/atoms/ItemCarousel';
import Meta from '../components/atoms/Meta';
import CategoryDisplay from '../components/molecules/CategoryDisplay';
import TopRatedProducts from '../components/molecules/TopRatedProducts';

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
      <Carousel productList={productFeatured} duration={5000} />
      <TopRatedProducts productTopRated={productTopRated} />
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

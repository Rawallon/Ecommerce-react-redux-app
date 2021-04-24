import React, { useEffect } from 'react';
import { connect } from 'react-redux';

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
import TopRatedProducts from '../stories/components/TopRatedProducts';

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

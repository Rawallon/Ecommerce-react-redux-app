import React, { useEffect } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { listTopProducts } from '../actions/productActions';
import Prefetch from './Prefetch';

export const ProductCarousel = ({ productTopRated, listTopProducts }) => {
  useEffect(() => {
    // On component mount fetch items
    listTopProducts();
    // Might be worth making a "clear" function if it displayed
    // more than one array, eg: FeaturedList,TopList,etc.
  }, [listTopProducts]);

  if (productTopRated.loading || productTopRated.error)
    return (
      <Prefetch
        error={productTopRated.error}
        loading={productTopRated.loading}
      />
    );
  else
    return (
      <Carousel pause="hover" className="bg-dark">
        {productTopRated.products.map((product) => (
          <Carousel.Item key={product._id}>
            <Link to={`/product/${product._id}`}>
              <Image src={product.image} alt={product.name} fluid />
              <Carousel.Caption className="carousel-caption">
                <h2>
                  {product.name} (${product.price})
                </h2>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    );
};

const mapStateToProps = (state) => ({
  productTopRated: state.productTopRated,
});

const mapDispatchToProps = {
  listTopProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCarousel);

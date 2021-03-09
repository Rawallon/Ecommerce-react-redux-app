import React, { useEffect } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { listTopProducts } from '../actions/productActions';
import Loader from './Loader';
import Message from './Message';

export const ProductCarousel = ({ productTopRated, listTopProducts }) => {
  //const { loading, error, products } = productTopRated;
  useEffect(() => {
    listTopProducts();
  }, [listTopProducts]);

  function renderPrefetch() {
    if (productTopRated.error)
      return <Message variant="danger">{productTopRated.error}</Message>;
    if (productTopRated.loading) return <Loader />;
  }
  if (productTopRated.loading) return renderPrefetch();
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

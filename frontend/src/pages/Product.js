import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../actions/cartActions';
import {
  clearProductDetails,
  createProductReview,
  listProductDetails,
} from '../actions/productActions';
import Breadcrumb from '../components/atoms/Breadcrumb/Breadcrumb';
import Meta from '../components/atoms/Meta';
import Prefetch from '../components/molecules/Prefetch';
import ProductContent from '../components/molecules/ProductContent';
import ProductDisplay from '../components/molecules/ProductDisplay';

export function Product({
  productDetails,
  match,
  listProductDetails,
  clearProductDetails,
  addToCart,
  history,
  createProductReview,
  isUserLogged,
}) {
  const { error, loading, product } = productDetails;

  function reviewCreateHandler(title, comment, rating) {
    if (rating > 5 || rating <= 0 || !isUserLogged) return;
    createProductReview(match.params.id, { title, rating, comment });
  }

  useEffect(() => {
    // This hook gets called two time, it's seperate to avoid useless call
    if (error) history.push('/404');
  }, [error, history]);

  useEffect(() => {
    listProductDetails(match.params.id);
    return () => {
      clearProductDetails();
    };
  }, [listProductDetails, clearProductDetails, match]);

  function addToCartHandler(pId, qty = 1) {
    if (product && qty <= product.countInStock) {
      addToCart(pId, qty);
      history.push('/cart');
    } else {
      history.push('/404');
    }
  }

  return (
    <>
      <Prefetch loading={loading} error={error} />
      {product && (
        <>
          <Meta title={product.name} />
          <Breadcrumb
            links={[
              { name: 'Home', link: '/' },
              { name: product.category, link: '/category/' + product.category },
              { name: product.name, link: product.name, active: true },
            ]}
          />

          <ProductDisplay
            images={Array(3).fill(product.image)}
            product={product}
            addToCart={addToCartHandler}
          />
          <ProductContent
            isUserLogged={isUserLogged}
            product={product}
            reviewCreate={reviewCreateHandler}
          />
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  productDetails: state.productDetails,
  isUserLogged: state.userLogin.userInfo,
});

const mapDispatchToProps = {
  listProductDetails,
  clearProductDetails,
  addToCart,
  createProductReview,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

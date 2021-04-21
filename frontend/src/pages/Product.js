import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  clearProductDetails,
  clearProductReview,
  createProductReview,
  listProductDetails,
} from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import Meta from '../components/Meta';
import Prefetch from '../components/Prefetch';
import ProductDisplay from '../stories/pages/ProductPage/ProductDisplay';
import ProductContent from '../stories/pages/ProductPage/ProductContent';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

export function Product({
  productDetails,
  match,
  listProductDetails,
  clearProductDetails,
  addToCart,
  history,
  createProductReview,
  clearProductReview,
  productReviewCreate,
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
  productReviewCreate: state.productReviewCreate,
  isUserLogged: state.userLogin.userInfo,
});

const mapDispatchToProps = {
  listProductDetails,
  clearProductDetails,
  addToCart,
  createProductReview,
  clearProductReview,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

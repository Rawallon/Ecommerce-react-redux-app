import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Form,
  Image,
  ListGroup,
  Row,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import {
  clearProductDetails,
  clearProductReview,
  createProductReview,
  listProductDetails,
} from '../actions/productActions';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import Prefetch from '../components/Prefetch';
import ProductDisplay from '../stories/pages/ProductPage/ProductDisplay';
import ProductContent from '../stories/pages/ProductPage/ProductContent';

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
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const {
    loading: revLoad,
    error: revError,
    success: revSucc,
  } = productReviewCreate;
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
    if (revSucc) {
      alert('Review posted successfully');
      setRating(0);
      setComment('');
      clearProductReview();
    }
    listProductDetails(match.params.id);
    return () => {
      clearProductDetails();
    };
  }, [
    listProductDetails,
    clearProductDetails,
    match,
    revSucc,
    clearProductReview,
  ]);

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
          <Breadcrumb>
            <LinkContainer to="/">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </LinkContainer>
            <LinkContainer to={`/category/${product.category}`}>
              <Breadcrumb.Item>{product.category}</Breadcrumb.Item>
            </LinkContainer>
            <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
          </Breadcrumb>
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

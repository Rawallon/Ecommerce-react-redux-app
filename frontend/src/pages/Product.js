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
import Loader from '../components/Loader';
import { addToCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';

export function Product({
  match,
  isLoading = true,
  error = '',
  product = [],
  listProductDetails,
  clearProductDetails,
  addToCart,
  history,
  createProductReview,
  clearProductReview,
  productReviewCreate,
  loggedUser,
}) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const {
    loading: revLoad,
    error: revError,
    success: revSucc,
  } = productReviewCreate;
  function reviewCreateHandler(e) {
    //loggedUser;
    e.preventDefault();
    createProductReview(match.params.id, { rating, comment });
  }

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
  }, [listProductDetails, clearProductDetails, match, revSucc]);

  function addToCartHandler(pId) {
    addToCart(pId);
    history.push('/cart');
  }

  function renderPrefetch() {
    if (error) return <Message variant="danger">{error}</Message>;
    if (isLoading) return <Loader />;
  }
  return (
    <>
      {renderPrefetch()}
      {!isLoading && !error && (
        <>
          <Breadcrumb>
            <LinkContainer to="/">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </LinkContainer>
            <LinkContainer to={`/category/${product.category}`}>
              <Breadcrumb.Item>{product.category}</Breadcrumb.Item>
            </LinkContainer>
            <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>{product.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating rating={product.rating} count={product.numReviews} />
                </ListGroup.Item>
                <ListGroup.Item>Price ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Satus:</Col>
                      <Col>
                        <strong>
                          {product.countInStock > 0
                            ? 'In Stock'
                            : 'Out of Stock'}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      onClick={() => addToCartHandler(product._id)}
                      className="btn-block"
                      disabled={product.countInStock === 0}>
                      Add to cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {revError && <Message variant="danger">{revError}</Message>}
              {product.reviews.length === 0 && <Message>No reviews</Message>}
              <ListGroup variant="flush">
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating rating={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  {loggedUser ? (
                    <Form onSubmit={reviewCreateHandler}>
                      <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}>
                          <option value="">Select...</option>
                          <option value="1">1 - Poor</option>
                          <option value="2">2 - Fair</option>
                          <option value="3">3 - Good</option>
                          <option value="4">4 - Very Good</option>
                          <option value="5">5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="comment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          row="3"
                          value={comment}
                          onChange={(e) =>
                            setComment(e.target.value)
                          }></Form.Control>
                      </Form.Group>
                      <Button
                        disabled={revLoad}
                        type="submit"
                        variant="primary">
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to="/login">sign in</Link> to write a review{' '}
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  product: state.productDetails.product,
  isLoading: state.productDetails.loading,
  error: state.productDetails.error,
  productReviewCreate: state.productReviewCreate,
  loggedUser: state.userLogin.userInfo,
});

const mapDispatchToProps = {
  listProductDetails,
  clearProductDetails,
  addToCart,
  createProductReview,
  clearProductReview,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

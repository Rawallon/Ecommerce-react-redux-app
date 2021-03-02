import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import Rating from '../components/Rating';
import {
  clearProductDetails,
  listProductDetails,
} from '../actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

export function Product({
  match,
  isLoading = true,
  error = '',
  product = [],
  listProductDetails,
  clearProductDetails,
}) {
  useEffect(() => {
    listProductDetails(match.params.id);
    return () => {
      clearProductDetails();
    };
  }, []);

  function renderPrefetch() {
    if (error) return <Message variant="danger">{error}</Message>;
    if (isLoading) return <Loader />;
  }
  return (
    <>
      {renderPrefetch()}
      {!isLoading && !error && (
        <>
          <Link className="btn btn-light my-3" to="/">
            <i className="fas fa-home"></i>
          </Link>
          <span className="btn">/</span>
          <Link
            to={`/category/${product.category}`}
            className="btn btn-light my-3">
            {product.category}
          </Link>
          <span className="btn">/</span>
          <div className="btn my-3">{product.name}</div>
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
                      className="btn-block"
                      disabled={product.countInStock === 0}>
                      Add to cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
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
});

const mapDispatchToProps = {
  listProductDetails,
  clearProductDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

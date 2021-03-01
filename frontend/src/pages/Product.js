import products from '../products';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import Rating from '../components/Rating';

export default function Product({ match }) {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <>
      <Link classname="btn btn-light my-3" to="/">
        Back
      </Link>
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
            <ListGroup.Item>Description ${product.description}</ListGroup.Item>
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
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
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
  );
}

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { listCategoryProducts } from '../actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Meta from '../components/Meta';

export function Category({
  match,
  isLoading = true,
  error = '',
  products = [],
  listCategoryProducts,
}) {
  useEffect(() => {
    listCategoryProducts(match.params.cat);
  }, [listCategoryProducts, match]);

  function renderPrefetch() {
    if (error) return <Message variant="danger">{error}</Message>;
    if (isLoading) return <Loader />;
  }

  return (
    <>
      <Meta title={match.params.cat} />
      <Breadcrumb>
        <LinkContainer to="/">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </LinkContainer>
        <LinkContainer to={`/category/${match.params.cat}`}>
          <Breadcrumb.Item active>{match.params.cat}</Breadcrumb.Item>
        </LinkContainer>
      </Breadcrumb>
      <Row>
        {renderPrefetch()}
        {!isLoading &&
          !error &&
          products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
      </Row>
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.productList.products,
  isLoading: state.productList.loading,
  error: state.productList.error,
});

const mapDispatchToProps = {
  listCategoryProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);

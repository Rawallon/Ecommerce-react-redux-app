import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { listCategoryProducts } from '../actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

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
      <Link className="btn btn-light my-3" to="/">
        <i className="fas fa-home"></i>
      </Link>
      <span className="btn">/</span>
      <div className="btn my-3">{match.params.cat}</div>
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

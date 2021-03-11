import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import PageSelect from '../components/PageSelect';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import Prefetch from '../components/Prefetch';

export function Home({ productList, listProducts, match }) {
  const { error, loading, products } = productList;
  const pageNumber = match.params.pageNumber || 1;

  useEffect(() => {
    listProducts('', pageNumber);
  }, [listProducts, pageNumber]);

  return (
    <>
      <Meta title="Home" />
      <ProductCarousel />
      <h1>Latest Products</h1>
      <Prefetch error={error} loading={loading} />
      <Row>
        {products?.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      <PageSelect pages={productList.pages} page={productList.page} />
    </>
  );
}

const mapStateToProps = (state) => ({
  productList: state.productList,
});

const mapDispatchToProps = {
  listProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

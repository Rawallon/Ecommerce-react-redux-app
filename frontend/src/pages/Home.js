import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Pageinate } from '../components/Pageinate';

export function Home({ productList, products = [], listProducts, match }) {
  const { error, loading } = productList;
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  useEffect(() => {
    listProducts(keyword, pageNumber);
  }, [listProducts, keyword, pageNumber]);

  function renderPrefetch() {
    if (error) return <Message variant="danger">{error}</Message>;
    if (loading) return <Loader />;
  }

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {renderPrefetch()}
        {!loading &&
          !error &&
          products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
      </Row>
      <Pageinate
        pages={productList.pages}
        page={productList.page}
        keyword={keyword}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  productList: state.productList,
  products: state.productList.products,
});

const mapDispatchToProps = {
  listProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

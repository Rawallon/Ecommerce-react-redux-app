import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../stories/components/CategoryProduct/';
import { listProducts, listTopProducts } from '../actions/productActions';
import PageSelect from '../components/PageSelect';
import Meta from '../components/Meta';
import Prefetch from '../components/Prefetch';

export function Home({ productList, listProducts, listTopProducts, match }) {
  const { error, loading, products } = productList;
  const pageNumber = match.params.pageNumber || 1;

  useEffect(() => {
    listTopProducts();
    listProducts('', pageNumber);
  }, [listProducts, pageNumber]);
  return (
    <>
      <Meta title="Home" />
      <h1>Latest Releases</h1>
      <Prefetch error={error} loading={loading} />
      <Row>
        {products?.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product {...product} />
          </Col>
        ))}
      </Row>
      <PageSelect
        urlLink="new-releases"
        pages={productList.pages}
        page={productList.page}
      />
    </>
  );
}
//
const mapStateToProps = (state) => ({
  productList: state.productList,
});

const mapDispatchToProps = {
  listProducts,
  listTopProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

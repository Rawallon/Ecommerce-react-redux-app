import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../stories/components/CategoryProduct/';
import { listCategoryProducts } from '../actions/productActions';
import { LinkContainer } from 'react-router-bootstrap';
import Meta from '../components/Meta';
import Prefetch from '../components/Prefetch';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

export function Category({
  history,
  match,
  productList,
  listCategoryProducts,
}) {
  const { error, loading, products } = productList;

  useEffect(() => {
    if (error) history.push('/404');
    listCategoryProducts(match.params.cat);
  }, [history, listCategoryProducts, match, error]);

  return (
    <>
      <Meta title={match.params.cat} />
      <Breadcrumb
        links={[
          { name: 'Home', link: '/' },
          {
            name: match.params.cat,
            link: '/category/' + match.params.cat,
            active: true,
          },
        ]}
      />

      <Row>
        <Prefetch loading={loading} />
        {products?.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product {...product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

const mapStateToProps = (state) => ({
  productList: state.productList,
});

const mapDispatchToProps = {
  listCategoryProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);

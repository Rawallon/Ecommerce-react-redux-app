import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { listCategoryProducts } from '../actions/productActions';
import Product from '../stories/components/CategoryProduct/';
import Meta from '../components/Meta';
import Prefetch from '../components/Prefetch';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { Col, Row } from '../styles/bootstrap.style';

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
          <Col key={product._id} sm md lg xl>
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

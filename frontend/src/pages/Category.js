import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { listCategoryProducts } from '../actions/productActions';
import Product from '../stories/components/CategoryProduct/';
import Meta from '../components/Meta';
import Prefetch from '../components/Prefetch';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const Row = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
const Col = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 992px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  @media (min-width: 1200px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;

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

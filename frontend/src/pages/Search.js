import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { listProducts } from '../actions/productActions';
import Breadcrumb from '../components/atoms/Breadcrumb/Breadcrumb';
import CategoryProduct from '../components/atoms/CategoryProduct';
import Meta from '../components/atoms/Meta';
import Pagination from '../components/atoms/Pagination';
import Prefetch from '../components/molecules/Prefetch';

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

export function Search({ productList, listProducts, match }) {
  const { error, loading, products } = productList;
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  useEffect(() => {
    listProducts(keyword, pageNumber);
  }, [listProducts, keyword, pageNumber]);

  return (
    <>
      <Meta title={`Searching: ${keyword}`} />
      <Breadcrumb
        links={[
          { name: 'Home', link: '/' },
          { name: keyword, link: '/search/' + keyword, active: true },
        ]}
      />

      <Row>
        <Prefetch loading={loading} error={error} />
        {products &&
          products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <CategoryProduct {...product} />
            </Col>
          ))}
      </Row>
      <Pagination
        pages={productList.pages}
        page={productList.page}
        keyword={keyword}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  productList: state.productList,
});

const mapDispatchToProps = {
  listProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

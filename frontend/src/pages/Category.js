import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { listCategoryProducts } from '../actions/productActions';
import { Col, Row } from '../styles/bootstrap.style';
import Breadcrumb from '../components/atoms/Breadcrumb/Breadcrumb';
import CategoryProduct from '../components/atoms/CategoryProduct';
import Meta from '../components/atoms/Meta';
import Prefetch from '../components/molecules/Prefetch';
import Pagination from '../components/atoms/Pagination';

export function Category({
  history,
  match,
  productList,
  listCategoryProducts,
}) {
  const pageNumber = match.params.pageNumber || 1;
  const { error, loading, products } = productList;

  useEffect(() => {
    listCategoryProducts(match.params.cat, pageNumber);
  }, [history, listCategoryProducts, match, error, pageNumber]);

  if (error) {
    return <div>{history.push('/404')}</div>;
  }

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
        {products.map((product) => (
          <Col key={product._id} sm md lg xl>
            <CategoryProduct {...product} />
          </Col>
        ))}
      </Row>

      <Pagination
        pages={productList.pages}
        page={productList.page}
        urlLink={`/category/${match.params.cat}/`}
      />
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

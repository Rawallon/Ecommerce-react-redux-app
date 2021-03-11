import React from 'react';
import { connect } from 'react-redux';
import { Button, Table } from 'react-bootstrap';
import { deleteProductAdmin, listProducts } from '../../actions/productActions';
import Message from '../../components/Message';
import { LinkContainer } from 'react-router-bootstrap';
import PageSelect from '../../components/PageSelect';
import Loader from '../../components/Loader';

export const ListProducts = ({
  userInfo,
  productList,
  history,
  listProducts,
  deleteProductAdmin,
  match,
}) => {
  const pageNumber = match.params.pageNumber || 1;

  React.useEffect(() => {
    if (!userInfo?._id) history.push('/login');
    if (!userInfo?.isAdmin) history.push('/profile');
    listProducts('', pageNumber);
  }, [history, listProducts, userInfo, pageNumber]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      deleteProductAdmin(id);
    }
  };

  function renderProducts() {
    if (productList.loading)
      return (
        <tr>
          <td>
            <Loader />
          </td>
        </tr>
      );
    if (productList.error) return;
    <tr>
      <td>
        <Message variant="danger">{productList.error}</Message>
      </td>
    </tr>;

    if (!productList.products) {
      return (
        <tr>
          <td>No Products</td>
          <td>No Products</td>
          <td>No Products</td>
          <td>No Products</td>
          <td>No Products</td>
          <td>No Products</td>
        </tr>
      );
    } else {
      return productList.products.map((product) => (
        <tr key={product._id}>
          <td>{product._id}</td>
          <td>{product.name}</td>
          <td>${product.price}</td>
          <td>{product.category}</td>
          <td>{product.brand}</td>
          <td>
            <LinkContainer to={`/admin/products/edit/${product._id}`}>
              <Button variant="light" className="btn-sm w-50">
                <i className="fas fa-edit"></i>
              </Button>
            </LinkContainer>
            <Button
              variant="danger"
              className="btn-sm w-50"
              onClick={() => deleteHandler(product._id)}>
              <i className="fas fa-trash"></i>
            </Button>
          </td>
        </tr>
      ));
    }
  }
  return (
    <>
      <Table striped bordered responsive className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>BRAND</th>
            <th>
              <LinkContainer to={`/admin/products/create`}>
                <Button variant="outline-secondary" className="btn-sm " block>
                  Create
                </Button>
              </LinkContainer>
            </th>
          </tr>
        </thead>
        <tbody>{renderProducts()}</tbody>
      </Table>
      <PageSelect
        pages={productList.pages}
        page={productList.page}
        isAdmin="products"
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  productList: state.productList,
  userInfo: state.userLogin.userInfo,
});

const mapDispatchToProps = {
  listProducts,
  deleteProductAdmin,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);

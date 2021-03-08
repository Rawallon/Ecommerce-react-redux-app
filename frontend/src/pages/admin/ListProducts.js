import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row, Spinner, Table } from 'react-bootstrap';
import { deleteProductAdmin, listProducts } from '../../actions/productActions';
import Message from '../../components/Message';
import EditUser from './EditUser';
import { LinkContainer } from 'react-router-bootstrap';

export const ListProducts = ({
  userInfo,
  productList,
  history,
  listProducts,
  deleteProductAdmin,
}) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [listingIndex, setListingIndex] = useState(1);
  const [arrPaginated, setArrPaginated] = useState([]);
  React.useEffect(() => {
    if (!userInfo?._id) history.push('/login');
    if (!userInfo?.isAdmin) history.push('/profile');
    listProducts();
  }, [history, listProducts, userInfo]);

  React.useEffect(() => {
    if (productList?.products) {
      setArrPaginated(
        productList.products.slice(listingIndex * 10 - 10, listingIndex * 10),
      );
    }
  }, [productList, listingIndex]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      deleteProductAdmin(id);
    }
  };

  const createProductHandler = () => {
    //dispatch(createProduct());
  };

  function renderProducts() {
    if (productList.loading)
      return (
        <tr>
          <td>
            <Spinner />
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
        </tr>
      );
    } else {
      return arrPaginated.map((product) => (
        <tr key={product._id}>
          <td>{product._id}</td>
          <td>{product.name}</td>
          <td>${product.price}</td>
          <td>{product.category}</td>
          <td>{product.brand}</td>
          <td>
            <LinkContainer to={`/admin/products/${product._id}`}>
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
    <div>
      {!selectedUser && (
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
                    <Button
                      variant="outline-secondary"
                      className="btn-sm "
                      block>
                      Create
                    </Button>
                  </LinkContainer>
                </th>
              </tr>
            </thead>
            <tbody>{renderProducts()}</tbody>
          </Table>
          {arrPaginated.length >= 10 && (
            <Row>
              <Col>
                <Button
                  variant="outline-primary"
                  onClick={() => setListingIndex(listingIndex - 1)}
                  disabled={!(listingIndex > 1)}>
                  &#171; Previous Page
                </Button>
              </Col>
              <Col className="d-flex justify-content-end">
                <Button
                  variant="outline-primary"
                  disabled={arrPaginated.length === listingIndex}
                  onClick={() => setListingIndex(listingIndex + 1)}>
                  Next Page &#187;
                </Button>
              </Col>
            </Row>
          )}
        </>
      )}

      {selectedUser && (
        <EditUser
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    </div>
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

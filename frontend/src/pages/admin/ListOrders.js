import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row, Spinner, Table } from 'react-bootstrap';
import { listProducts } from '../../actions/productActions';
import Message from '../../components/Message';
import EditUser from './EditUser';
import {
  clearOrderList,
  getAllOrdersListAdmin,
} from '../../actions/orderAction';
import { LinkContainer } from 'react-router-bootstrap';

export const ListOrders = ({
  userInfo,
  history,
  getAllOrdersListAdmin,
  orderList,
  clearOrderList,
}) => {
  const [listingIndex, setListingIndex] = useState(1);
  const [arrPaginated, setArrPaginated] = useState([]);
  console.log(orderList.orders);
  React.useEffect(() => {
    if (!userInfo?._id) history.push('/login');
    if (!userInfo?.isAdmin) history.push('/profile');
    getAllOrdersListAdmin();
    return () => {
      clearOrderList();
    };
  }, [history, userInfo]);

  React.useEffect(() => {
    if (orderList?.orders) {
      setArrPaginated(
        orderList.orders.slice(listingIndex * 10 - 10, listingIndex * 10),
      );
    }
  }, [orderList, listingIndex]);

  function renderUsers() {
    if (orderList.loading)
      return (
        <tr>
          <td>
            <Spinner />
          </td>
        </tr>
      );
    if (orderList.error) return;
    <tr>
      <td>
        <Message variant="danger">{orderList.error}</Message>
      </td>
    </tr>;

    if (!orderList.orders) {
      return (
        <tr>
          <td>No orders</td>
        </tr>
      );
    } else {
      return arrPaginated.map((order) => (
        <tr key={order._id}>
          <td>{order._id}</td>
          <td>{order.user && order.user.name}</td>
          <td>{order.createdAt.substring(0, 10)}</td>
          <td>${order.totalPrice}</td>
          <td>
            {order.isPaid ? (
              order.paidAt.substring(0, 10)
            ) : (
              <i className="fas fa-times" style={{ color: 'red' }}></i>
            )}
          </td>
          <td>
            {order.isDelivered ? (
              order.deliveredAt.substring(0, 10)
            ) : (
              <i className="fas fa-times" style={{ color: 'red' }}></i>
            )}
          </td>
          <td>
            <LinkContainer to={`/order/${order._id}`}>
              <Button variant="light" className="btn-sm">
                Details
              </Button>
            </LinkContainer>
          </td>
        </tr>
      ));
    }
  }
  return (
    <div>
      {orderList && (
        <>
          <Table striped bordered responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>USER</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{renderUsers()}</tbody>
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userLogin.userInfo,
  orderList: state.orderList,
});

const mapDispatchToProps = {
  getAllOrdersListAdmin,
  clearOrderList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOrders);

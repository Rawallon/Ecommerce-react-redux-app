import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { clearListUsersAdmin, listUsersAdmin } from '../../actions/userAction';
import Message from '../../components/Message';
import { LinkContainer } from 'react-router-bootstrap';
import Loader from '../../components/Loader';

export const ListUsers = ({
  match,
  userInfo,
  userList,
  history,
  listUsersAdmin,
  clearListUsersAdmin,
}) => {
  const [listingIndex, setListingIndex] = useState(1);
  const [arrPaginated, setArrPaginated] = useState([]);
  const userId = match?.params?.id;

  React.useEffect(() => {
    if (!userInfo?._id) history.push('/login');
    if (!userInfo?.isAdmin) history.push('/profile');
    listUsersAdmin();
    return () => {
      clearListUsersAdmin();
    };
  }, [clearListUsersAdmin, history, listUsersAdmin, userInfo]);

  React.useEffect(() => {
    if (userList?.users && !userId) {
      setArrPaginated(
        userList.users.slice(listingIndex * 10 - 10, listingIndex * 10),
      );
    }
  }, [userId, userList, listingIndex]);

  function renderUsers() {
    if (userList.loading)
      return (
        <tr>
          <td>
            <Loader />
          </td>
        </tr>
      );
    if (userList.error) return;
    <tr>
      <td>
        <Message variant="danger">{userList.error}</Message>
      </td>
    </tr>;

    if (!userList.users) {
      return (
        <tr>
          <td>No users</td>
        </tr>
      );
    } else {
      return arrPaginated.map((user) => (
        <tr key={user._id} className={user.isAdmin ? 'text-info' : ''}>
          <td>{user._id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <LinkContainer to={`/admin/users/${user._id}`}>
              <Button variant="primary" className="btn-sm w-100">
                Edit
              </Button>
            </LinkContainer>
          </td>
        </tr>
      ));
    }
  }
  return (
    <div>
      <>
        <Table striped bordered responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>EDIT</th>
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userLogin.userInfo,
  userList: state.userList,
});

const mapDispatchToProps = {
  clearListUsersAdmin,
  listUsersAdmin,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);

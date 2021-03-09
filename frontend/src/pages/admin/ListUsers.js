import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { clearListUsersAdmin, listUsersAdmin } from '../../actions/userAction';
import Message from '../../components/Message';
import { LinkContainer } from 'react-router-bootstrap';
import Loader from '../../components/Loader';
import { Pageinate } from '../../components/Pageinate';

export const ListUsers = ({
  match,
  userInfo,
  userList,
  history,
  listUsersAdmin,
  clearListUsersAdmin,
}) => {
  const pageNumber = match.params.pageNumber || 1;

  React.useEffect(() => {
    if (!userInfo?._id) history.push('/login');
    if (!userInfo?.isAdmin) history.push('/profile');
    listUsersAdmin(pageNumber);
    return () => {
      clearListUsersAdmin();
    };
  }, [clearListUsersAdmin, history, listUsersAdmin, userInfo, pageNumber]);

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
      return userList.users.map((user) => (
        <tr key={user._id} className={user.isAdmin ? 'text-info' : ''}>
          <td>{user._id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <LinkContainer to={`/admin/users/edit/${user._id}`}>
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
        <Pageinate
          pages={userList.pages}
          page={userList.page}
          isAdmin="users"
        />
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

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Col, Row } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/FormLoader';
import FormGroup from '../../components/FormGroup';
import {
  listUserByIdAdmin,
  updateUserProfileAdmin,
} from '../../actions/userAction';
import { LinkContainer } from 'react-router-bootstrap';

export function EditUser({
  match,
  userInfo,
  userList,
  history,
  updateUserProfileAdmin,
  listUserByIdAdmin,
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState({});
  const userId = match.params.id;

  useEffect(() => {
    if (userId) {
      listUserByIdAdmin(userId);
    }
  }, []);

  useEffect(() => {
    if (!userInfo?._id) history.push('/login');
    if (!userInfo?.isAdmin) history.push('/profile');
    if (!userId) history.push('./');

    if (userList.users && userId) fillFields();
  }, [history, userInfo, userList, userId]);
  const { error, loading } = userList;

  function fillFields() {
    const selUSer = userList.users.filter((user) => user._id === userId)[0];
    setName(selUSer.name);
    setEmail(selUSer.email);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (name.length === 0 && email.length === 0) {
      setMessage({
        name: name.length === 0,
        email: email.length === 0,
      });
      return;
    }

    updateUserProfileAdmin({
      _id: userId,
      name,
      email,
    });
  }

  return (
    <Row>
      <Col>
        <h2>Edit User</h2>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <FormGroup name="name" type="text" value={name} onChange={setName} />
          <FormGroup
            name="email"
            type="email"
            value={email}
            isInvalid={!!message['email']}
            onChange={setEmail}
          />
          <Row>
            <Col>
              <LinkContainer to="./">
                <Button type="submit" variant="outline-secondary" block>
                  Back
                </Button>
              </LinkContainer>
            </Col>
            <Col>
              <Button type="submit" variant="outline-success" block>
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.userLogin.userInfo,
  userList: state.userList,
});

const mapDispatchToProps = { updateUserProfileAdmin, listUserByIdAdmin };

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userAction';
import SearchBox from './SearchBox';
import { Route } from 'react-router';

export function Header({ userInfo, logout }) {
  const [showDropdown, setShowDropdown] = useState(false);
  function logoutHandler() {
    logout();
  }

  return (
    <header>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        className="p-0 px-5 justify-content-between"
        collapseOnSelect>
        <Container>
          {/* //Since the search its embeded it doesn't have a history */}
          <Route render={({ history }) => <SearchBox history={history} />} />
          <LinkContainer to="/" className="mx-auto">
            <Navbar.Brand className="py-4">
              <img
                src="/images/title.svg"
                height="32px"
                className="d-inline-block align-top"
                alt="Shopify"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="flex-grow-0" id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart" className="mr-2">
                <Nav.Link>
                  <i className="fas fa-shopping-cart fa-2x py-4"></i>
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown
                  title={
                    <>
                      <i className="fas fa-user fa-2x py-4"></i>
                    </>
                  }
                  id="username"
                  show={showDropdown}
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}>
                  <LinkContainer to="/profile">
                    <NavDropdown.Item> {userInfo.name}</NavDropdown.Item>
                  </LinkContainer>
                  {userInfo && userInfo.isAdmin && (
                    <>
                      <NavDropdown.Divider />
                      <LinkContainer to="/admin/users">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/products">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/orders">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                    </>
                  )}
                  <NavDropdown.Divider />

                  <LinkContainer to="/profile">
                    <NavDropdown.Item> Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/Login">
                  <Nav.Link href="#link">
                    <i className="fas fa-user fa-2x py-4"></i>
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.userLogin.userInfo,
});

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);

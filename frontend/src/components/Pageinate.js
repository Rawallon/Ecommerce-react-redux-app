import React from 'react';
import { Col, Pagination, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

export const Pageinate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  function linkTo(n) {
    if (isAdmin) {
      if (keyword) return `/search/${keyword}/page/${n + 1}`;
      else return `/admin/${isAdmin}/${n + 1}`;
    } else {
      if (keyword) return `/search/${keyword}/page/${n + 1}`;
      else return `/page/${n + 1}`;
    }
  }
  return (
    <Row>
      <Col>
        <Pagination className="align-items-center justify-content-end mt-3">
          <span className="mr-4 text-muted">Total of {pages} pages</span>
          <LinkContainer to={linkTo(page - 2)}>
            <Pagination.Item disabled={1 === page}>
              <i className="fas fa-chevron-left"></i>
            </Pagination.Item>
          </LinkContainer>
          {[...Array(pages).keys()].map((n) => (
            <LinkContainer key={n + 1} to={linkTo(n)}>
              <Pagination.Item active={n + 1 === page}>{n + 1}</Pagination.Item>
            </LinkContainer>
          ))}
          <LinkContainer to={linkTo(page)}>
            <Pagination.Item disabled={pages === page}>
              <i className="fas fa-chevron-right"></i>
            </Pagination.Item>
          </LinkContainer>
        </Pagination>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pageinate);

import React from 'react';
import { Link } from 'react-router-dom';

import { Col, Row } from '../../../styles/bootstrap.style';
import { Paginate, PaginateNumber } from './Pagination.style';

export default function Pagination({
  urlLink = 'page',
  pages,
  page,
  isAdmin = null,
  keyword = '',
}) {
  function linkTo(n) {
    if (isAdmin) {
      if (keyword) return `/search/${keyword}/page/${n + 1}`;
      else return `/admin/${isAdmin}/${n + 1}`;
    } else {
      if (keyword) return `/search/${keyword}/${urlLink}/${n + 1}`;
      else return `${urlLink}${n + 1}`;
    }
  }
  return (
    <Row>
      <Col justifyContent="flex-end">
        <Paginate>
          <span>Total of {pages} pages</span>
          {
            // This has a weird semantic, but it fills an array with *pages* element
            [...Array(pages).keys()].map((n) => (
              <PaginateNumber key={n + 1} active={n + 1 === page}>
                <Link to={linkTo(n)}>{n + 1}</Link>
              </PaginateNumber>
            ))
          }
        </Paginate>
      </Col>
    </Row>
  );
}

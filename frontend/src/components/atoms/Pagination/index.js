import React from 'react';
import { Link } from 'react-router-dom';

import { Col, Row } from '../../../styles/bootstrap.style';
import { Paginate, PaginateNumber } from './Pagination.style';

export default function Pagination({ urlLink, pages, page }) {
  return (
    <Row>
      <Col justifyContent="flex-end">
        <Paginate>
          <span>Total of {pages} pages</span>
          {
            // Creates an empty array then loops through it rendering a link
            Array(pages)
              .fill()
              .map((_, index) => (
                <PaginateNumber key={index + 1} active={index + 1 === page}>
                  <Link to={`${urlLink}${index + 1}`}>{index + 1}</Link>
                </PaginateNumber>
              ))
          }
        </Paginate>
      </Col>
    </Row>
  );
}

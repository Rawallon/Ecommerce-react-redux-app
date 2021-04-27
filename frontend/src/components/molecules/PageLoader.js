import React from 'react';
import { Col, Row, Spinner } from '../../styles/bootstrap.style';

export default function PageLoader() {
  return (
    <Row>
      <Col>
        <Spinner role="status">
          <span className="sr-only">Loading!</span>
        </Spinner>
      </Col>
    </Row>
  );
}

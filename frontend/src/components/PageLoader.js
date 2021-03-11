import React from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';

export default function PageLoader() {
  return (
    <Row>
      <Col className="d-flex justify-content-center">
        <Spinner
          animation="border"
          role="status"
          style={{
            width: '100px',
            height: '100px',
          }}>
          <span className="sr-only">Loading!</span>
        </Spinner>
      </Col>
    </Row>
  );
}

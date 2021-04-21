import React from 'react';
import { Col, Row } from '../styles/bootstrap.style';
import { Container } from '../styles/main.styles';

export default function Footer() {
  return (
    <div>
      <Container>
        <Row>
          <Col alignItems="center">Copyright &copy; Shopay</Col>
        </Row>
      </Container>
    </div>
  );
}

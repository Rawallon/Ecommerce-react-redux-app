import React from 'react';
import { Col, Row } from '../../styles/bootstrap.style';
import { Container } from '../../styles/main.styles';

export default function Footer() {
  return (
    <div style={{ background: '#f7f8fa' }}>
      <Container>
        <Row style={{ margin: '0', padding: '2rem 0' }}>
          <Col alignItems="center" justifyContent="space-evenly">
            <span>
              <a href="https://github.com/Rawallon">Made with &#129505;</a>
            </span>
            <span>
              <a
                href="https://github.com/Rawallon/Ecommerce-react-redux-app"
                style={{ textAlign: 'right' }}>
                Go to the repo{' '}
                <img src="/gh-logo.png" alt="" width="24" height="24" />
              </a>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Meta from '../components/Meta';

const Jumbotron = styled.div`
  border-radius: 16px;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  padding: 4rem 2rem;
  background-color: #f7f7f9;
`;

export default function MissingPage() {
  return (
    <>
      <Meta title="Wrong place" />
      <Jumbotron
        className="d-flex flex-column align-items-center justify-content-center mt-4"
        style={{ borderRadius: '16px' }}>
        <h1
          className="missing p-3 rounded"
          style={{ fontSize: '6rem', background: '#1a1a1a', color: '#fff' }}>
          <span>O</span>
          <span>O</span>
          <span>P</span>
          <span>S</span>
          <span>!</span>
        </h1>
        <p className="text-muted mt-4" style={{ fontSize: '2rem' }}>
          You're in the wrong place, <Link to="/">go back</Link>
        </p>{' '}
      </Jumbotron>
    </>
  );
}

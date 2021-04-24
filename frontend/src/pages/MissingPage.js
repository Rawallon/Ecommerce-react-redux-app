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

const MutedText = styled.p`
  color: #919aa1 !important;
  margin-top: 1.5rem !important;
  font-size: 2rem;

  a {
    color: black;
  }
`;

const Oops = styled.h1`
  font-size: 6rem;
  background: rgb(26, 26, 26);
  color: rgb(255, 255, 255);
  padding: 1rem !important;
  border-radius: 0.25rem !important;
  margin: 0.67em 0;
  text-transform: uppercase;
  letter-spacing: 3px;
`;
export default function MissingPage() {
  return (
    <>
      <Meta title="Wrong place" />
      <Jumbotron>
        <Oops>
          <span>O</span>
          <span>O</span>
          <span>P</span>
          <span>S</span>
          <span>!</span>
        </Oops>
        <MutedText>
          You're in the wrong place, <Link to="/">go back</Link>
        </MutedText>
      </Jumbotron>
    </>
  );
}

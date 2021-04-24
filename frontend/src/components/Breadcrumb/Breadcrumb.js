import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Li, Ol } from './Breadcrumb.style';

export default function Breadcrumb({ links, center = false }) {
  return (
    <Nav center={center} aria-label="breadcrumb">
      <Ol>
        {links.map((link, i) => (
          <Li key={i} active={link.active}>
            {!link.active ? (
              <Link to={link.link}>{link.name}</Link>
            ) : (
              <>{link.name}</>
            )}
          </Li>
        ))}
      </Ol>
    </Nav>
  );
}

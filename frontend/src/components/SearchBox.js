import React, { useRef, useState } from 'react';
import { Button, Form, Nav } from 'react-bootstrap';

// history is being passed as a renderprop from Route
export default function SearchBox({ history }) {
  const [showField, setShowField] = useState(false);
  const refSearch = useRef(null);
  const [searchField, setSearchField] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    if (searchField.trim()) {
      history.push(`/search/${searchField.trim()}`);
    } else {
      history.push(`/`);
    }
  }

  function openSearch() {
    setShowField(true);
    refSearch.current.focus();
  }
  return (
    <nav className="position-relative">
      <Nav.Link onClick={openSearch}>
        <i className="fas fa-search fa-lg" style={{ color: 'white' }}></i>
      </Nav.Link>
      <Form
        inline
        onSubmit={submitHandler}
        className={`search-show ${!showField && 'search-hide'}`}>
        <Form.Control
          type="text"
          placeholder="Search"
          className="mr-sm-2 rounded"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
          ref={refSearch}
        />
        <Button
          className="rounded-right search-btn"
          variant="secondary"
          type="submit">
          <i className="fas fa-search"></i>
        </Button>
      </Form>
    </nav>
  );
}

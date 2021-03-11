import React from 'react';
import { Form } from 'react-bootstrap';

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

// This is a general use form group since I'm using bootstrap
export default function FormGroup({
  name,
  type = 'text',
  value = '',
  label,
  onChange,
  isInvalid,
  required = false,
  disabled = false,
  placeholder,
  asField,
}) {
  // To make sure it always has a label/placeholder, even if I don't explicitly set it
  let lbl = label || placeholder || name;
  let phd = placeholder || lbl;
  return (
    <Form.Group controlId={name}>
      <Form.Label>{capitalize(lbl)}:</Form.Label>
      <Form.Control
        isInvalid={isInvalid}
        type={type}
        disabled={disabled}
        placeholder={capitalize(phd)}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        as={asField ? asField : 'input'}
      />
      {/* 
      Since the forms are pretty simple I decided not to include this
      <Form.Control.Feedback type="invalid">
        ErrorMessage
      </Form.Control.Feedback> */}
    </Form.Group>
  );
}

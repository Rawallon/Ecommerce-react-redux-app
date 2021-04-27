import React, { useEffect, useState } from 'react';

import { InputLabel, InputText, InputWrapper } from './FormInput.style';

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};
export default function FormInput({
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
  autocomplete = 'no',
}) {
  const [invalid, setInvalid] = useState(isInvalid);
  useEffect(() => {
    setInvalid(isInvalid);
  }, [isInvalid]);

  function handleOnBlur() {
    if (value.toString().length === 0) {
      setInvalid(true);
    }
    if (type !== 'email') return;
    const isEmail = value.match(/.+@.+\..+/gi);
    if (!isEmail || value.toString().length === 0) {
      setInvalid(true);
    }
  }
  // To make sure it always has a label/placeholder, even if I don't explicitly set it
  let lbl = label || placeholder || name;
  let phd = placeholder || lbl;
  return (
    <InputWrapper controlId={name}>
      <InputLabel>{capitalize(lbl)}:</InputLabel>
      <InputText
        isInvalid={invalid}
        type={type}
        disabled={disabled}
        placeholder={capitalize(phd)}
        value={value}
        onBlur={handleOnBlur}
        required={required}
        onChange={(e) => {
          setInvalid(false);
          return onChange(e.target.value);
        }}
        as={asField ? asField : 'input'}
        autoComplete={autocomplete}
      />
    </InputWrapper>
  );
}

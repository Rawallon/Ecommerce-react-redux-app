import React from 'react';
import { FormCheck, FormInput, FormLabel } from './FormRadio.style';
export default function FormRadio({
  labelText,
  radioValue,
  name,
  checked,
  onChange,
}) {
  return (
    <FormCheck>
      <FormInput
        type="radio"
        id={radioValue}
        name={name}
        value={radioValue}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
      />
      <FormLabel onClick={() => onChange(radioValue)}>{labelText}</FormLabel>
    </FormCheck>
  );
}

import React from 'react';

import { Container } from './styles';

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  error
}) {
  return (
    <Container>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span> {error} </span>
    </Container>
  );
}

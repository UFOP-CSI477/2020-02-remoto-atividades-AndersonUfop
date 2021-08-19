import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Checkbox: React.FC<CheckBoxProps> = ({ name, label, ...rest }) => {
  return (
    <Container>
      <input type="checkbox" id={name} name={name} {...rest} />
      <label htmlFor={label}>{label}</label>
    </Container>
  );
};

export default Checkbox;

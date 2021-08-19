import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const InputNumber: React.FC<InputProps> = ({ name, ...rest }) => {
  return (
    <Container>
      <input name={name} type="number" {...rest} />
    </Container>
  );
};

export default InputNumber;

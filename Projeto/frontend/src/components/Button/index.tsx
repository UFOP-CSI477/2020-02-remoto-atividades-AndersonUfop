import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonContainer } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: string;
  children?: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ name, type, children }) => {
  return <ButtonContainer type={type}>{children}</ButtonContainer>;
};

export default Button;

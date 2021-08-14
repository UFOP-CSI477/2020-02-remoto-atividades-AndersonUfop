import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonContainer } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: string;
  children?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ name, type, children}) => (
  <ButtonContainer type={type}>
    { children }
  </ButtonContainer>
)
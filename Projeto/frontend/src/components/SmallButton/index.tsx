import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonContainer } from './styles';

type SmallButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: string;
  children?: ReactNode;
};

const SmallButton: React.FC<SmallButtonProps> = ({ type, children }) => {
  return <ButtonContainer type={type}>{children}</ButtonContainer>;
};

export default SmallButton;

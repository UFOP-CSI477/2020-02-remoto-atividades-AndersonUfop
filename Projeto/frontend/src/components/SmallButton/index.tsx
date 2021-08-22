import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonContainer } from './styles';

type SmallButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: string;
  children?: ReactNode;
  disabled?: boolean;
};

const SmallButton: React.FC<SmallButtonProps> = ({
  type,
  disabled,
  children,
}) => {
  return (
    <ButtonContainer type={type} disabled={disabled}>
      {children}
    </ButtonContainer>
  );
};

export default SmallButton;

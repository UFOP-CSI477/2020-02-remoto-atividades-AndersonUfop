import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { Container } from './styles';

interface BackProps {
  to: string;
}

const Back: React.FC<BackProps> = ({ to }) => {
  return (
    <Container>
      <Link to={to}>
        <MdKeyboardArrowLeft size={24} />
        <span>Voltar</span>
      </Link>
    </Container>
  );
};

export default Back;

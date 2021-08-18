import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/login">
        <span className="login">
          Login
        </span>
      </Link>
      <Link to="/">
        <div className="back">
          <FaArrowLeft size={24} />
          <span>Voltar</span>
        </div>
      </Link>
    </Container>
  )
}

export default Header;


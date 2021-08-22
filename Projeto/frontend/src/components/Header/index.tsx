import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiExit } from 'react-icons/bi';

import { Container, UserContainer } from './styles';
import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  const [exit, setExit] = useState(false);

  function openExit() {
    setExit(!exit);
  }
  return (
    <Container>
      <UserContainer onClick={openExit}>
        <span className="login">{user ? user.name : 'Login'}</span>
      </UserContainer>

      <Link to="/">
        <div className="exit" onClick={signOut}>
          <BiExit size={24} />
          <span>Sair</span>
        </div>
      </Link>
    </Container>
  );
};

export default Header;

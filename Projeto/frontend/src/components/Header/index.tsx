import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { Container, UserContainer, UserLogOut } from './styles';
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
        <span className="login">
          {user ? user.name : 'Login'}
          <MdKeyboardArrowDown />
        </span>
        {exit && <UserLogOut onClick={signOut}>Sair</UserLogOut>}
      </UserContainer>

      <Link to="/">
        <div className="back">
          <FaArrowLeft size={24} />
          <span>Voltar</span>
        </div>
      </Link>
    </Container>
  );
};

export default Header;

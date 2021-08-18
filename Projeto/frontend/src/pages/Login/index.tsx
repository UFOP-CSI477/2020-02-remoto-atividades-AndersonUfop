import React, { useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Input from '../../components/Input';

import { Container, FormContainer, Legend, ButtonContainer } from './styles';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  return (
    <Container>
      <FormContainer>
        <Form ref={formRef} onSubmit={() => { }}>
          <h1>Faça login ou cadastre</h1>

          <Legend>E-mail</Legend>
          <Input name="email" type="email" />

          <Legend>Senha</Legend>
          <Input name="password" type="password" />

          <ButtonContainer>
            <Button type="submit">
              <span>ENTRAR</span>
            </Button>
          </ButtonContainer>

        </Form>

        <Link to="/new-user">
          <span>Cadastrar</span>
        </Link>

      </FormContainer>



    </Container>
  );
}

export default Login;
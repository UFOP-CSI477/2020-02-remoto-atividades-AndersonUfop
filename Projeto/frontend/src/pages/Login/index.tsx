import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';

import getValidationErrors from '../../utils/getValidateErrors';

import Button from '../../components/Button';

import { Container, FormContainer, Legend, ButtonContainer } from './styles';

interface signInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: signInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        toast.error('Erro ao realizar login, verifique as suas credenciais!');
      }
    },

    [history, signIn],
  );

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça login ou cadastre</h1>

          <Legend>E-mail</Legend>
          <Input name="email" />

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
};

export default Login;

import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidateErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, FormContainer, Legend, ButtonContainer } from './styles';

interface NewUserFormData {
  name: string;
  email: string;
  password: string;
}

const NewUser: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const messageSuccess = useCallback(() => {
    Swal.fire('Mensagem', 'Usuário cadastrado com sucesso', 'success');
  }, []);

  const handleSubmit = useCallback(
    async (data: NewUserFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/login');

        messageSuccess();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        toast.error('Erro ao realizar o cadastro!');
      }
    },

    [toast, history],
  );

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />

      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Novo Cadastro</h1>

          <Legend>Nome</Legend>
          <Input name="name" type="text" />

          <Legend>E-mail</Legend>
          <Input name="email" type="email" />

          <Legend>Senha</Legend>
          <Input name="password" type="password" />

          <ButtonContainer>
            <Button type="submit">
              <span>SALVAR</span>
            </Button>
          </ButtonContainer>

          <Link to="/login">
            <span>
              <AiOutlineArrowLeft />
              Voltar
            </span>
          </Link>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default NewUser;

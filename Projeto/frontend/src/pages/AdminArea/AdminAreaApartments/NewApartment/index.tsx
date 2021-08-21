import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef } from 'react';

import { Link } from 'react-router-dom';
import Header from '../../../../components/Header';
import SmallButton from '../../../../components/SmallButton';
import Input from '../../../../components/Input';

import { Container, Content, Title, InputContainer, FormInput } from './styles';
import Checkbox from '../../../../components/Checkbox';

const NewApartment: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit() {
    console.log('a');
  }

  return (
    <Container>
      <Header />
      <Content>
        <Title>
          <p>Cadastrar apartamento</p>
          <span>Por favor preencha as informações solicitadas.</span>
        </Title>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputContainer>
            <FormInput>
              <p>Número do apartamento:</p>
              <Input name="bedroomNumber" type="text" />
            </FormInput>

            <FormInput>
              <p>Tipo:</p>
              <Input name="type" type="text" />
            </FormInput>

            <FormInput>
              <p>Preço:</p>
              <Input name="price" type="text" />
            </FormInput>
          </InputContainer>

          <InputContainer>
            <p>Itens:</p>
            <Checkbox name="suite" label="Suíte" />
            <Checkbox name="tv" label="TV" />
            <Checkbox name="air_conditioning" label="Ar condicionado" />
          </InputContainer>
        </Form>

        <SmallButton type="button">Cadastrar apartamento</SmallButton>
      </Content>
    </Container>
  );
};

export default NewApartment;

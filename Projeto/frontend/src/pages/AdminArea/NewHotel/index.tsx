import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef } from 'react';

import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import SmallButton from '../../../components/SmallButton';
import Input from '../../../components/Input';

import { Container, Content, Title, InputContainer, FormInput } from './styles';
import Checkbox from '../../../components/Checkbox';

const NewHotel: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit() {
    console.log('a');
  }

  return (
    <Container>
      <Header />
      <Content>
        <Title>
          <p>Cadastrar hotel</p>
          <span>Por favor preencha as informações solicitadas.</span>
        </Title>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputContainer>
            <FormInput>
              <p>Nome do hotel:</p>
              <Input name="name" type="text" />
            </FormInput>

            <FormInput>
              <p>Localização</p>
              <Input name="localization" type="text" />
            </FormInput>

            <FormInput>
              <p>Quantidade de quartos:</p>
              <Input name="bedrooms" type="text" />
            </FormInput>
          </InputContainer>

          <InputContainer>
            <FormInput>
              <p>Latitude:</p>
              <Input name="latitude" type="text" />
            </FormInput>
            <FormInput>
              <p>Longitude:</p>
              <Input name="longitude" type="text" />
            </FormInput>
          </InputContainer>

          <InputContainer>
            <FormInput>
              <p>Proprietário:</p>
              <Input name="owner" type="text" />
            </FormInput>
            <FormInput>
              <p>E-mail do hotel:</p>
              <Input name="email" type="email" />
            </FormInput>
            <FormInput>
              <p>Telefone do hotel:</p>
              <Input name="telephone" type="text" />
            </FormInput>
          </InputContainer>

          <InputContainer>
            <p>Adicionais:</p>
            <Checkbox name="pool" label="Piscina" />
            <Checkbox name="breakfast" label="Café da manhã" />
            <Checkbox name="parking" label="Estacionamento" />
            <Checkbox name="Wifi" label="Wi-fi" />
          </InputContainer>
        </Form>

        <SmallButton type="button">Cadastrar hotel</SmallButton>
      </Content>
    </Container>
  );
};

export default NewHotel;

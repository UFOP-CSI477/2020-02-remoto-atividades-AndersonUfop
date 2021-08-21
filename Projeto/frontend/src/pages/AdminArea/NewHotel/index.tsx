import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import SmallButton from '../../../components/SmallButton';
import Input from '../../../components/Input';

import { Container, Content, Title, InputContainer, FormInput } from './styles';
import Checkbox from '../../../components/Checkbox';
import api from '../../../services/api';
import Select from '../../../components/Select';
import { useAuth } from '../../../hooks/auth';

interface NewHotelFormData {
  name_hotel: string;
  latitude: string;
  longitude: number;
  rooms_number: number;
  pool: boolean;
  wifi: boolean;
  parking: boolean;
  breakfast: boolean;
  owner_id: string;
}

interface Users {
  id: string;
  name: string;
}

const NewHotel: React.FC = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [pool, setPool] = useState(false);
  const [parking, setParking] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [breakfast, setBreakfast] = useState(false);

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    api.get('users').then(response => {
      setUsers(response.data);
    });
  }, []);

  function handleSelectPull() {
    setPool(!!pool);
  }

  function handleSelectBreakfast() {
    setBreakfast(!!breakfast);
  }

  function handleSelectParking() {
    setParking(!!parking);
  }

  function handleSelectWifi() {
    setWifi(!!wifi);
  }

  const handleSubmit = useCallback(async (data: NewHotelFormData) => {
    console.log('oi');
    try {
      formRef.current?.setErrors({});
      console.log(data);
      const schema = Yup.object().shape({
        name_hotel: Yup.string().required('Nome do hotel obrigatório'),
        rooms_number: Yup.string().required(
          'Quantidade de quartos obrigatória',
        ),
        latitude: Yup.string().required('Latitude obrigatória'),
        longitude: Yup.string().required('Longitude obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/hotels', {
        name_hotel: data.name_hotel,
        latitude: data.latitude,
        longitude: data.longitude,
        rooms_number: data.rooms_number,
        pool,
        wifi,
        parking,
        breakfast,
      });
    } catch (err) {
      console.log(err.message);
    }
  }, []);

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
              <Input name="name_hotel" type="text" />
            </FormInput>

            <FormInput>
              <p>Localização</p>
              <Input name="localization" type="text" />
            </FormInput>

            <FormInput>
              <p>Quantidade de quartos:</p>
              <Input name="rooms_number" type="text" />
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
            <Checkbox name="pool" label="Piscina" onChange={handleSelectPull} />
            <Checkbox
              name="breakfast"
              label="Café da manhã"
              onChange={handleSelectBreakfast}
            />

            <Checkbox
              name="parking"
              label="Estacionamento"
              onChange={handleSelectParking}
            />
            <Checkbox name="wifi" label="Wi-fi" onChange={handleSelectWifi} />
          </InputContainer>

          <SmallButton type="submit">Cadastrar hotel</SmallButton>
        </Form>
      </Content>
    </Container>
  );
};

export default NewHotel;

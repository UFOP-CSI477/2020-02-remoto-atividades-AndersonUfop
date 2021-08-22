import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';

import Back from '../../../components/Back';
import Checkbox from '../../../components/Checkbox';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import SmallButton from '../../../components/SmallButton';

import {
  Container,
  Content,
  Title,
  InputContainer,
  FormInput,
  ButtonContainer,
} from './styles';

import api from '../../../services/api';
import { useAuth } from '../../../hooks/auth';
import getValidationErrors from '../../../utils/getValidateErrors';

interface NewHotelFormData {
  name_hotel: string;
  latitude: string;
  longitude: number;
  localization: string;
  telephone: string;
  email: string;
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

  const [userId, setUserId] = useState('');

  const history = useHistory();

  const { user } = useAuth();

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    api.get('users').then(response => {
      setUsers(response.data);
    });
  }, []);

  useEffect(() => {
    users.map(us => {
      return us.name === user.name && setUserId(us.id);
    });
  });

  const messageSuccess = useCallback(() => {
    Swal.fire('Mensagem', 'Hotel cadastrado com sucesso', 'success');
  }, []);

  const handleSubmit = useCallback(
    async (data: NewHotelFormData) => {
      try {
        formRef.current?.setErrors({});
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
          localization: data.localization,
          telephone: data.telephone,
          email: data.email,
          rooms_number: data.rooms_number,
          pool,
          wifi,
          parking,
          breakfast,
          owner_id: userId,
        });

        messageSuccess();

        history.push('/admin');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        toast.error('Erro ao realizar o cadastro!');
      }
    },
    [breakfast, history, messageSuccess, parking, pool, userId, wifi],
  );

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <Back to="/admin" />
      <Content>
        <Title>
          <p>Cadastrar hotel</p>
          <span>Por favor preencha as informações solicitadas.</span>
        </Title>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputContainer>
            <FormInput>
              <p>Nome do hotel:</p>
              <Input
                name="name_hotel"
                type="text"
                placeholder="Digite o nome do hotel"
              />
            </FormInput>

            <FormInput>
              <p>Localização</p>
              <Input
                name="localization"
                type="text"
                placeholder="Digite o nome da cidade do hotel"
              />
            </FormInput>

            <FormInput>
              <p>Quantidade de quartos:</p>
              <Input name="rooms_number" type="number" />
            </FormInput>
          </InputContainer>

          <InputContainer>
            <FormInput>
              <p>Latitude:</p>
              <Input
                name="latitude"
                type="text"
                placeholder="Digite a latitude"
              />
            </FormInput>
            <FormInput>
              <p>Longitude:</p>
              <Input
                name="longitude"
                type="text"
                placeholder="Digite a longitude"
              />
            </FormInput>
          </InputContainer>

          <InputContainer>
            <FormInput>
              <p>E-mail do hotel:</p>
              <Input
                name="email"
                type="email"
                placeholder="Digite o e-mail do hotel"
              />
            </FormInput>
            <FormInput>
              <p>Telefone do hotel:</p>
              <Input
                name="telephone"
                type="text"
                placeholder="Digite o telefone do hotel"
              />
            </FormInput>
          </InputContainer>

          <InputContainer>
            <p>Adicionais:</p>
            <Checkbox
              name="pool"
              label="Piscina"
              onChange={() => setPool(true)}
            />
            <Checkbox
              name="breakfast"
              label="Café da manhã"
              onChange={() => setBreakfast(true)}
            />

            <Checkbox
              name="parking"
              label="Estacionamento"
              onChange={() => setParking(true)}
            />
            <Checkbox
              name="wifi"
              label="Wi-fi"
              onChange={() => setWifi(true)}
            />
          </InputContainer>
          <ButtonContainer>
            <SmallButton type="submit">Cadastrar hotel</SmallButton>
          </ButtonContainer>
        </Form>
      </Content>
    </Container>
  );
};

export default NewHotel;

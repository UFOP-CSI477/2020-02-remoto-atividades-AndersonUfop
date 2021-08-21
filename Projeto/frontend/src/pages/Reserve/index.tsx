import React, { useCallback, useEffect, useRef, useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import Header from '../../components/Header';
import Input from '../../components/Input';
import SmallButton from '../../components/SmallButton';

import {
  Container,
  Title,
  Content,
  DescriptionReserve,
  Legend,
  InfoHotel,
  InfoReserve,
  DateInfo,
  DateContainer,
  GeneralInfos,
  TextInfo,
  DescriptionApartment,
  TypeApartment,
  ValueTotal,
  ButtonContainer,
  Button,
  Divisor,
  IdentificationContainer,
  IdentificationTitle,
  IdentificationButtonContainer,
} from './styles';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

interface Hotel {
  id: string;
  name_hotel: string;
  latitude: number;
  longitude: number;
}

interface Apartment {
  hotel_id: string;
  room_number: string;
  room_type: string;
  price: number;
}

interface ApartmentsParams {
  apartment_id: string;
}

interface ReserveFormData {
  apartment_id: string;
  user_id: string;
  cpf: string;
  birth_date: Date;
  date_checkin: Date;
  date_checkout: Date;
}

const Reserve: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [checkinDate, setCheckinDate] = useState<Date>(new Date());
  const [checkoutDate, setCheckoutDate] = useState<Date>(new Date());
  const [birthDate, setBirthDate] = useState<Date>(new Date());

  const params = useParams<ApartmentsParams>();
  const [apartment, setApartment] = useState<Apartment>();
  const [hotel, setHotel] = useState<Hotel>();

  const { user } = useAuth();

  useEffect(() => {
    api.get(`apartments/${params.apartment_id}`).then(response => {
      setApartment(response.data);
    });
  }, [params.apartment_id]);

  useEffect(() => {
    api.get(`hotels/${apartment?.hotel_id}`).then(response => {
      setHotel(response.data);
    });
  }, [apartment?.hotel_id]);

  function selectCheckInDate(e: Date) {
    setCheckinDate(e);
    console.log(checkinDate);
  }

  function selectCheckOutDate(e: Date) {
    setCheckoutDate(e);
    console.log(checkoutDate);
  }

  function selectBirthDate(e: Date) {
    setBirthDate(e);
    console.log(birthDate);
  }

  const handleSubmit = useCallback(async (data: ReserveFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        cpf: Yup.string().required('CPF obrigatório'),
        date_checkin: Yup.string().required('Data de nascimento obrigatória'),
        date_checkout: Yup.string().required('Data de nascimento obrigatória'),
        birth_date: Yup.string().required('Data de nascimento obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.post('/reserves', data);

      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  if (!apartment) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Header />
      <Title>Finalizar reserva</Title>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <DescriptionReserve>
            <Legend>
              <p>Informações sobre a reserva</p>
            </Legend>
            <GeneralInfos>
              <InfoHotel>
                <span>{hotel?.name_hotel}</span>
                <p>
                  {hotel?.latitude} , {hotel?.longitude}
                </p>
                <p>Telefone: (31) 3035-1235</p>
                <p>E-mail: hotel@gmail.com</p>
              </InfoHotel>
              <InfoReserve>
                <DateInfo>
                  <DateContainer>
                    <p>Data de check-in:</p>
                    <Input name="date_checkin" type="date" />
                  </DateContainer>
                  <DateContainer>
                    <p>Data de check-out:</p>
                    <Input name="date_checkout" type="date" />
                  </DateContainer>
                </DateInfo>
                <TextInfo>
                  <DescriptionApartment>
                    Apartamento Nº {apartment.room_number}
                  </DescriptionApartment>
                  <TypeApartment>Tipo: {apartment.room_type}</TypeApartment>
                  <ValueTotal>
                    <span>Preço:</span>
                    <p>{apartment.price}</p>
                  </ValueTotal>
                </TextInfo>
              </InfoReserve>
            </GeneralInfos>
            <ButtonContainer>
              <Button type="button">Editar</Button>
            </ButtonContainer>
          </DescriptionReserve>
          <Divisor />

          <IdentificationContainer>
            <IdentificationTitle>Identifique-se</IdentificationTitle>

            <p>Nome:</p>
            <Input name="name" type="text" value={user.name} />
            <p>E-mail:</p>
            <Input name="email" type="email" value={user.email} />
            <p>CPF:</p>
            <Input name="cpf" type="text" placeholder="Digite o seu CPF" />
            <p>Data de nascimento:</p>
            <Input name="birth_date" type="date" />

            <IdentificationButtonContainer>
              <SmallButton type="submit">CONFIRMAR</SmallButton>
            </IdentificationButtonContainer>
          </IdentificationContainer>
        </Form>
      </Content>
    </Container>
  );
};

export default Reserve;

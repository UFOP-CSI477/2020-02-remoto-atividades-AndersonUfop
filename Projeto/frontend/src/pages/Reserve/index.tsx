import React, { useEffect, useRef, useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useParams } from 'react-router-dom';
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

interface HotelProps {
  id: string;
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

const Reserve: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [birthDate, setBirthDate] = useState<Date>(new Date());

  const params = useParams<ApartmentsParams>();
  console.log(params.apartment_id);
  const [apartment, setApartment] = useState<Apartment>();

  useEffect(() => {
    api.get(`apartments/${params.apartment_id}`).then(response => {
      setApartment(response.data);
    });
  }, [params.apartment_id]);

  function handleSubmit() {
    console.log('test');
  }

  if (!apartment) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Header />
      <Title>Finalizar reserva</Title>
      <Content>
        <DescriptionReserve>
          <Legend>
            <p>Informações sobre a reserva</p>
          </Legend>
          <GeneralInfos>
            <InfoHotel>
              <span>Hotel Maravilhas</span>
              <p>Rua Jardim, Bairro Liberdade, Belo Horizonte - MG</p>
              <p>Telefone: (31) 3035-1235</p>
              <p>E-mail: hotel@gmail.com</p>
            </InfoHotel>
            <InfoReserve>
              <DateInfo>
                <DateContainer>
                  <p>Data de check-in:</p>
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                  />
                </DateContainer>
                <DateContainer>
                  <p>Data de check-out:</p>
                  <DatePicker
                    selected={endDate}
                    onChange={(date: Date) => setEndDate(date)}
                  />
                </DateContainer>
              </DateInfo>
              <TextInfo>
                <DescriptionApartment>
                  Apartamento {apartment.room_number}
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
        <Form ref={formRef} onSubmit={handleSubmit}>
          <IdentificationContainer>
            <IdentificationTitle>Identifique-se</IdentificationTitle>

            <p>Nome:</p>
            <Input name="name" type="text" placeholder="Digite o seu nome" />
            <p>E-mail:</p>
            <Input name="email" type="email" placeholder="Digite o seu email" />
            <p>CPF:</p>
            <Input name="cpf" type="text" placeholder="Digite o seu CPF" />
            <p>Data de nascimento:</p>
            <DatePicker
              className="datepicker"
              selected={birthDate}
              onChange={(date: Date) => setBirthDate(date)}
            />

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

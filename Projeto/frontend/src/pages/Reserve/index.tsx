import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';

import Back from '../../components/Back';
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
import getValidationErrors from '../../utils/getValidateErrors';

interface Hotel {
  id: string;
  name_hotel: string;
  localization: string;
  telephone: string;
  email: string;
}

interface Apartment {
  hotel_id: string;
  room_number: string;
  description: string;
  room_type: string;
  price: number;
  availability: boolean;
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

interface Users {
  id: string;
  name: string;
}

const Reserve: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const params = useParams<ApartmentsParams>();
  const [apartment, setApartment] = useState<Apartment>();
  const [hotel, setHotel] = useState<Hotel>();
  const [users, setUsers] = useState<Users[]>([]);

  const history = useHistory();

  const [userId, setUserId] = useState('');

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
    Swal.fire('Mensagem', 'Reserva realizada com sucesso', 'success');
  }, []);

  const handleSubmit = useCallback(
    async (data: ReserveFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          cpf: Yup.string().required('CPF obrigatório'),
          date_checkin: Yup.string().required('Data de nascimento obrigatória'),
          date_checkout: Yup.string().required(
            'Data de nascimento obrigatória',
          ),
          birth_date: Yup.string().required('Data de nascimento obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/reserves', {
          apartment_id: params.apartment_id,
          user_id: userId,
          cpf: data.cpf,
          birth_date: data.birth_date,
          date_checkin: data.date_checkin,
          date_checkout: data.date_checkout,
        });

        history.push('/');

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
    [history, messageSuccess, params.apartment_id, userId],
  );

  if (!apartment) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <Back to={`/apartments/${apartment?.hotel_id}`} />
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
                <p>{hotel?.localization}</p>
                <p>Telefone: {hotel?.telephone}</p>
                <p>E-mail: {hotel?.email}</p>
              </InfoHotel>
              <InfoReserve>
                <DateInfo>
                  <DateContainer>
                    <p>Data de check-in:</p>
                    <Input name="date_checkin" type="date" value="01/08/2018" />
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
                  <TypeApartment>Tipo: {apartment.description}</TypeApartment>
                  <ValueTotal>
                    <span>Preço:</span>
                    <p>R$ {apartment.price}</p>
                  </ValueTotal>
                </TextInfo>
              </InfoReserve>
            </GeneralInfos>
            <Link to={`/apartments/${apartment?.hotel_id}`}>
              <ButtonContainer>
                <Button type="button">Editar</Button>
              </ButtonContainer>
            </Link>
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

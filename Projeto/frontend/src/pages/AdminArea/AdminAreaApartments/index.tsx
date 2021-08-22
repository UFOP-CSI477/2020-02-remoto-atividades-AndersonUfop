import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import Back from '../../../components/Back';
import Header from '../../../components/Header';
import SmallButton from '../../../components/SmallButton';
import api from '../../../services/api';

import {
  Container,
  Content,
  Title,
  Table,
  THead,
  TBody,
  Td,
  Th,
  Tr,
  LimiteRoomsContainer,
} from './styles';

interface Hotel {
  rooms_number: string;
}

interface ApartmentProps {
  id: string;
  room_number: string;
  price: number;
  suite: boolean;
  tv: boolean;
  air_conditioning: boolean;
  room_type: string;
  availability: boolean;
  images: Array<{
    id: string;
    image_name: string;
  }>;
}

interface HotelParams {
  hotel_id: string;
}

const AdminAreaApartments: React.FC = () => {
  const params = useParams<HotelParams>();
  const [apartments, setApartments] = useState<ApartmentProps[]>([]);
  const [hotel, setHotel] = useState<Hotel>();

  useEffect(() => {
    api.get(`apartments/hotel/${params.hotel_id}`).then(response => {
      setApartments(response.data);
    });
  }, [params.hotel_id]);

  useEffect(() => {
    api.get(`hotels/${params?.hotel_id}`).then(response => {
      setHotel(response.data);
    });
  }, [params?.hotel_id]);

  return (
    <Container>
      <Header />
      <Back to="/admin" />
      <Content>
        <Title>Apartamentos</Title>

        <Link to={`/admin/apartments/${params.hotel_id}/new`}>
          <SmallButton type="button">Cadastrar apartamentos</SmallButton>
        </Link>
        <LimiteRoomsContainer>
          Limite de quartos: {hotel?.rooms_number}
        </LimiteRoomsContainer>
        <Table>
          <THead>
            <Th>Número</Th>
            <Th>Preço</Th>
            <Th>Tipo</Th>
            <Th>Disponibilidade</Th>
          </THead>
          <TBody>
            {apartments.map(apartment => {
              return (
                <Tr key={apartment.id}>
                  <Td>{apartment.room_number}</Td>
                  <Td>{apartment.price}</Td>
                  <Td>{apartment.room_type}</Td>

                  <Td>
                    {apartment.availability ? 'Disponível' : 'Indisponível'}
                  </Td>
                </Tr>
              );
            })}
          </TBody>
        </Table>
      </Content>
    </Container>
  );
};

export default AdminAreaApartments;

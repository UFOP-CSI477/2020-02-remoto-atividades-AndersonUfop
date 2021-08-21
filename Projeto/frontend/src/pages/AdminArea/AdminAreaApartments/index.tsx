import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
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
} from './styles';

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

  useEffect(() => {
    api.get(`apartments/hotel/${params.hotel_id}`).then(response => {
      setApartments(response.data);
    });
  }, [params.hotel_id]);

  return (
    <Container>
      <Header />
      <Content>
        <Title>Apartamentos</Title>
        <Link to="/admin/apartments/new">
          <SmallButton type="button">Cadastrar apartamentos</SmallButton>
        </Link>
        <Table>
          <THead>
            <Th>Número</Th>
            <Th>Preço</Th>
            <Th>Tipo</Th>
            <Th>Disponibilidade</Th>
          </THead>
          <TBody>
            {apartments.map(apartment => {
              console.log(apartment);
              return (
                <Tr key={apartment.id}>
                  <Td>{apartment.room_number}</Td>
                  <Td>{apartment.room_type}</Td>
                  <Td>{apartment.price}</Td>
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

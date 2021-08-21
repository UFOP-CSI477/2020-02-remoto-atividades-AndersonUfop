import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import SmallButton from '../../components/SmallButton';
import api from '../../services/api';

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

interface Hotels {
  id: string;
  latitude: number;
  longitude: number;
  name_hotel: string;
  rooms_number: string;
}

const AdminArea: React.FC = () => {
  const [hotels, setHotels] = useState<Hotels[]>([]);

  useEffect(() => {
    api.get('hotels').then(response => {
      setHotels(response.data);
    });
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Title>Hóteis</Title>
        <Link to="/admin/hotels/new">
          <SmallButton type="button">Cadastrar hotel</SmallButton>
        </Link>
        <Table>
          <THead>
            <Th>Nome</Th>
            <Th>Localização</Th>
            <Th>Quantidade de quartos</Th>
          </THead>
          <TBody>
            {hotels.map(hotel => {
              return (
                <Link to={`admin/apartments/${hotel.id}`}>
                  <Tr key={hotel.id}>
                    <Td>{hotel.name_hotel}</Td>
                    <Td>
                      {hotel.latitude}, {hotel.longitude}
                    </Td>
                    <Td>{hotel.rooms_number}</Td>
                  </Tr>
                </Link>
              );
            })}
          </TBody>
        </Table>
      </Content>
    </Container>
  );
};

export default AdminArea;

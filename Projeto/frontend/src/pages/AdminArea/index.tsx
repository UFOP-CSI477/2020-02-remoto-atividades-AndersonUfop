import React from 'react';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import SmallButton from '../../components/SmallButton';

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

const AdminArea: React.FC = () => {
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
            <Th>ID</Th>
            <Th>Nome</Th>
            <Th>Localização</Th>
            <Th>Quantidade de quartos</Th>
          </THead>
          <TBody>
            <Link to="/">
              <Tr>
                <Td>2</Td>
                <Td>Hotel Maravilha</Td>
                <Td>Sítio do Eden</Td>
                <Td>20</Td>
              </Tr>
            </Link>
            <Tr>
              <Td>2</Td>
              <Td>Hotel Maravilha</Td>
              <Td>Sítio do Eden</Td>
              <Td>20</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Hotel Maravilha</Td>
              <Td>Sítio do Eden</Td>
              <Td>20</Td>
            </Tr>
          </TBody>
        </Table>
      </Content>
    </Container>
  );
};

export default AdminArea;

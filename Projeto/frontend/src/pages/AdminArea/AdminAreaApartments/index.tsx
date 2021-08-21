import React from 'react';

import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import SmallButton from '../../../components/SmallButton';

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

const AdminAreaApartments: React.FC = () => {
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
            <Th>ID</Th>
            <Th>Número</Th>
            <Th>Preço</Th>
            <Th>Tipo</Th>
            <Th>Disponibilidade</Th>
          </THead>
          <TBody>
            <Link to="/">
              <Tr>
                <Td>1</Td>
                <Td>1</Td>
                <Td>R$ 115,00</Td>
                <Td>Casal</Td>
                <Td>Livre</Td>
              </Tr>
            </Link>
            <Tr>
              <Td>1</Td>
              <Td>1</Td>
              <Td>R$ 115,00</Td>
              <Td>Casal</Td>
              <Td>Livre</Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>1</Td>
              <Td>R$ 115,00</Td>
              <Td>Casal</Td>
              <Td>Livre</Td>
            </Tr>
          </TBody>
        </Table>
      </Content>
    </Container>
  );
};

export default AdminAreaApartments;

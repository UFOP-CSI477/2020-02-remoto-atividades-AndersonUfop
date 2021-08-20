import React, { useRef, useState, useEffect, ChangeEvent } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Select from '../../components/Select';
import Input from '../../components/InputNumber';
import Checkbox from '../../components/Checkbox';
import SmallButton from '../../components/SmallButton';

import BedRoomImage from '../../assets/bedroom.jpg';

import api from '../../services/api';

import AirConditioningImg from '../../assets/air-conditioner.svg';
import BathImg from '../../assets/bath.svg';
import BedImg from '../../assets/bed.svg';
import TvImg from '../../assets/tv.svg';

import {
  Container,
  Title,
  Search,
  Content,
  ColumnContainer,
  Legend,
  AdditionalContainer,
  ButtonContainer,
  Divisor,
  Results,
  ItemsContainer,
  Item,
  HotelImageContainer,
  IconsHotelContainer,
  InfoApartment,
  NameApartment,
  PriceApartment,
  Description,
} from './styles';
import Button from '../../components/Button';

interface ApartmentProps {
  id: string;
  room_number: string;
  price: number;
  suite: boolean;
  tv: boolean;
  air_conditioning: boolean;
  room_type: string;
  available: boolean;
  images: Array<{
    id: string;
    image_name: string;
  }>;
}

interface HotelParams {
  hotel_id: string;
}

const Apartments: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [selectedType, setSelectedType] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const [quantityPeople, setQuantityPeople] = useState(0);

  const params = useParams<HotelParams>();
  const [apartments, setApartments] = useState<ApartmentProps[]>([]);

  useEffect(() => {
    api.get(`apartments/${params.hotel_id}`).then(response => {
      setApartments(response.data);
    });
  }, [params.hotel_id]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const quantity = event.target.value;

    setQuantityPeople(Number(quantity));
  }

  function handleSelectedPrice(event: ChangeEvent<HTMLSelectElement>) {
    const price = event.target.value;

    setSelectedPrice(price);
  }

  function handleSelectedType(event: ChangeEvent<HTMLSelectElement>) {
    const type = event.target.value;

    setSelectedType(type);
  }

  async function handleSubmit() {
    const { hotel_id } = params;
    const quantity = quantityPeople;
    const type = selectedType;
    const price = selectedPrice;

    const response = await api.get('apartments/find', {
      params: {
        hotel_id,
        room_type: type,
      },
    });

    setApartments(response.data);
  }

  if (!apartments) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Header />
      <Title>
        <h1>Reservar quarto</h1>

        <span>Primeiramente escolha o seu quarto</span>
      </Title>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Search>
            <ColumnContainer>
              <Legend>Tipo de Quarto</Legend>
              <Select
                name="type"
                value={selectedType}
                onChange={handleSelectedType}
                options={[
                  { value: 'Casal', label: 'Casal' },
                  { value: 'Solteiro', label: 'Solteiro' },
                  { value: 'Solteiro Duplo', label: 'Solteiro Duplo' },
                  { value: 'Solteiro Triplo', label: 'Solteiro Triplo' },
                  { value: 'Casal + Solteiro', label: 'Casal + Solteiro' },
                ]}
              />
            </ColumnContainer>
            <ColumnContainer>
              <Legend>Quantidade de pessoas</Legend>
              <Input name="quantity" onChange={handleInputChange} />
            </ColumnContainer>

            <ColumnContainer>
              <Legend>Faixa de preço</Legend>
              <Select
                name="price"
                value={selectedPrice}
                onChange={handleSelectedPrice}
                options={[
                  { value: 'Abaixo de 100', label: 'Abaixo de 100' },
                  { value: 'Entre 100 e 200', label: 'Entre 100 e 200' },
                  { value: 'Entre 200 e 300', label: 'Entre 200 e 300' },
                  { value: 'Entre 300 e 400', label: 'Entre 300 e 400' },
                  { value: 'Acima de 500', label: 'Acima de 500' },
                ]}
              />
            </ColumnContainer>
            <ColumnContainer>
              <Legend>Serviços adicionais</Legend>
              <AdditionalContainer>
                <Checkbox name="tv" label="TV" />
                <Checkbox name="suite" label="Suíte" />
                <Checkbox name="air_conditioning" label="Ar Condicionado" />
              </AdditionalContainer>
            </ColumnContainer>
          </Search>

          <ButtonContainer>
            <Button type="submit">Buscar</Button>
          </ButtonContainer>
        </Form>
        <Divisor />
        <Results>{apartments.length} resultados encontrados</Results>
        <ItemsContainer>
          {apartments.map(apartment => {
            return (
              <Item key={apartment.id}>
                <HotelImageContainer>
                  <img src={BedRoomImage} alt="Hotel" />
                  <IconsHotelContainer>
                    {apartment.room_type === 'Casal' && (
                      <img src={BedImg} alt="" />
                    )}
                    {apartment.suite && <img src={BathImg} alt="" />}
                    {apartment.tv && <img src={TvImg} alt="" />}
                    {apartment.air_conditioning && (
                      <img src={AirConditioningImg} alt="" />
                    )}
                  </IconsHotelContainer>
                </HotelImageContainer>

                <InfoApartment>
                  <NameApartment>
                    Apartamento Nº {apartment.room_number}
                  </NameApartment>
                  <PriceApartment>R$ {apartment.price}</PriceApartment>
                  <Description>{apartment.room_type}</Description>

                  <SmallButton type="button">
                    <Link to={`/apartments/reserve/${apartment.id}`}>
                      RESERVAR
                    </Link>
                  </SmallButton>
                </InfoApartment>
              </Item>
            );
          })}
        </ItemsContainer>
      </Content>
    </Container>
  );
};

export default Apartments;

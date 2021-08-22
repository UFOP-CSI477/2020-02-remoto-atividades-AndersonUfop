import React, {
  useRef,
  useState,
  useEffect,
  ChangeEvent,
  useCallback,
} from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useParams } from 'react-router-dom';

import Back from '../../components/Back';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Header from '../../components/Header';
import Select from '../../components/Select';
import SmallButton from '../../components/SmallButton';

import api from '../../services/api';

import BedRoomImage from '../../assets/bedroom.jpg';
import AirConditioningImg from '../../assets/air-conditioner.svg';
import BathImg from '../../assets/bath.svg';
import BedImg from '../../assets/bed.svg';
import TvImg from '../../assets/tv.svg';

import {
  Container,
  Title,
  Search,
  Content,
  ApartmentsContainer,
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

interface ApartmentProps {
  id: string;
  room_number: string;
  description: string;
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

const Apartments: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [selectedType, setSelectedType] = useState('');
  const [selectedTV, setSelectedTV] = useState(false);
  const [selectedSuite, setSelectedSuite] = useState(false);
  const [selectedAirConditioning, setSelectedAirConditioning] = useState(false);

  const params = useParams<HotelParams>();
  const [apartments, setApartments] = useState<ApartmentProps[]>([]);

  useEffect(() => {
    api.get(`apartments/hotel/${params.hotel_id}`).then(response => {
      setApartments(response.data);
    });
  }, [params.hotel_id]);

  function handleSelectedType(event: ChangeEvent<HTMLSelectElement>) {
    const type = event.target.value;

    setSelectedType(type);
  }

  const handleSubmit = useCallback(async () => {
    const { hotel_id } = params;
    const type = selectedType;

    const response = await api.get('apartments/find', {
      params: {
        suite: selectedSuite,
        tv: selectedTV,
        air_conditioning: selectedAirConditioning,
        room_type: type,
        hotel_id,
      },
    });

    setApartments(response.data);
  }, [
    params,
    selectedType,
    selectedAirConditioning,
    selectedSuite,
    selectedTV,
  ]);

  if (!apartments) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Header />
      <Back to={`/hotel/${params.hotel_id}`} />
      <Title>
        <h1>Reservar quarto</h1>

        <span>Primeiramente escolha o seu quarto</span>
      </Title>
      <Content>
        <ApartmentsContainer>
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
                    { value: 'Duplo', label: 'Solteiro Duplo' },
                    { value: 'Solteiro Triplo', label: 'Solteiro Triplo' },
                    { value: 'Casal + Solteiro', label: 'Casal + Solteiro' },
                  ]}
                />
              </ColumnContainer>

              <ColumnContainer>
                <Legend>Serviços </Legend>
                <AdditionalContainer>
                  <Checkbox
                    name="tv"
                    label="TV"
                    onChange={() => setSelectedTV(true)}
                  />
                  <Checkbox
                    name="suite"
                    label="Suíte"
                    onChange={() => setSelectedSuite(true)}
                  />
                  <Checkbox
                    name="air_conditioning"
                    label="Ar Condicionado"
                    onChange={() => setSelectedAirConditioning(true)}
                  />
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
                    <Description>{apartment.description}</Description>

                    <SmallButton
                      type="button"
                      className={apartment.availability ? 'btn-reserved' : ''}
                      disabled={!apartment.availability}
                    >
                      <Link to={`/apartments/reserve/${apartment.id}`}>
                        {apartment.availability ? 'RESERVAR' : 'RESERVADO'}
                      </Link>
                    </SmallButton>
                  </InfoApartment>
                </Item>
              );
            })}
          </ItemsContainer>
        </ApartmentsContainer>
      </Content>
    </Container>
  );
};

export default Apartments;

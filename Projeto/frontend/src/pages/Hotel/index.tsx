import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import Back from '../../components/Back';
import Button from '../../components/Button';
import Header from '../../components/Header';

import api from '../../services/api';

import PoolImg from '../../assets/pool.svg';
import CarImg from '../../assets/car.svg';
import WifiImg from '../../assets/wifi.svg';
import CoffeeImg from '../../assets/coffee.svg';
import LocalizationImg from '../../assets/localization.svg';
import PhoneImg from '../../assets/phone.svg';
import MailImg from '../../assets/mail.svg';

import {
  Container,
  ImagesContainer,
  Content,
  Details,
  Items,
  ContactContainer,
  Contact,
} from './styles';

interface HotelProps {
  name_hotel: string;
  latitude: number;
  longitude: number;
  localization: string;
  telephone: string;
  email: string;
  pool: boolean;
  wifi: boolean;
  parking: boolean;
  breakfast: boolean;
  images: Array<{
    id: string;
    image_name: string;
  }>;
}

interface HotelParams {
  id: string;
}

export const Hotel: React.FC = () => {
  const params = useParams<HotelParams>();
  const [hotel, setHotel] = useState<HotelProps>();

  useEffect(() => {
    api.get(`hotels/${params.id}`).then(response => {
      setHotel(response.data);
    });
  }, [params.id]);

  if (!hotel) {
    return <p>Carregando ..</p>;
  }

  return (
    <Container>
      <Header />
      <Back to="/" />
      <Content>
        <ImagesContainer>
          {hotel.images.map(image => {
            return <img src={image.image_name} alt="" />;
          })}
        </ImagesContainer>

        <Details>
          <h1>{hotel.name_hotel}</h1>
          <Items>
            {hotel.pool && (
              <div className="item">
                <img src={PoolImg} alt="Piscina" />
                <span>Piscina</span>
              </div>
            )}
            {hotel.parking && (
              <div className="item">
                <img src={CarImg} alt="Estacionamento" />
                <span>Estacionamento</span>
              </div>
            )}
            {hotel.wifi && (
              <div className="item">
                <img src={WifiImg} alt="Wi-fi" />
                <span>Wifi</span>
              </div>
            )}
            {hotel.breakfast && (
              <div className="item">
                <img src={CoffeeImg} alt="Café da manhã" />
                <span>Café da manhã</span>
              </div>
            )}
          </Items>
          <ContactContainer>
            <Contact>
              <img src={LocalizationImg} alt="Localização" />
              <p>{hotel.localization}</p>
            </Contact>
            <Contact>
              <img src={PhoneImg} alt="Telefone" />
              <p>{hotel.telephone}</p>
            </Contact>
            <Contact>
              <img src={MailImg} alt="E-mail" />
              <p>{hotel.email}</p>
            </Contact>
          </ContactContainer>

          <div className="btn-reserve">
            <Link to={`/apartments/${params.id}`}>
              <Button type="button">Reservar agora</Button>
            </Link>
          </div>
        </Details>
      </Content>
    </Container>
  );
};

export default Hotel;

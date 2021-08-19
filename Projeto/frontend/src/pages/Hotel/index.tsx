import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SimpleImageSlider from 'react-simple-image-slider';
import api from '../../services/api';

import Button from '../../components/Button';

import HotelImg from '../../assets/hotelImg.png';

import { ReactComponent as PoolImg } from '../../assets/pool.svg';
import { ReactComponent as CarImg } from '../../assets/car.svg';
import { ReactComponent as WifiImg } from '../../assets/wifi.svg';
import { ReactComponent as CoffeeImg } from '../../assets/coffee.svg';
import { ReactComponent as LocalizationImg } from '../../assets/localization.svg';

import Img1 from '../../assets/hotel1.jpg';
import Img2 from '../../assets/hotel2.jpg';
import Img3 from '../../assets/hotel3.jpg';

import { Container, Content, Details, Items, Address } from './styles';
import Header from '../../components/Header';

interface HotelProps {
  name_hotel: string;
  latitude: number;
  longitude: number;
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

const images = [{ url: HotelImg }, { url: Img3 }, { url: Img1 }, { url: Img2 }];

export const Hotel: React.FC = () => {
  const params = useParams<HotelParams>();
  const [hotel, setHotel] = useState<HotelProps>();

  useEffect(() => {
    api.get(`hotels/images/${params.id}`).then(response => {
      setHotel(response.data);
    });
  }, [params.id]);

  if (!hotel) {
    return <p>Carregando ..</p>;
  }

  return (
    <Container>
      <Header />
      <Content>
        <div className="images-hotel">
          {hotel.images.map(image => {
            return <img src={image.image_name} alt="" />;
          })}
        </div>
        {/* <img src={HotelImg} alt="Imagem do hotel" /> */}

        <Details>
          <h1>{hotel.name_hotel}</h1>
          <Items>
            {hotel.pool && (
              <div className="item">
                <PoolImg />
                <span>Piscina</span>
              </div>
            )}
            {hotel.parking && (
              <div className="item">
                <CarImg />
                <span>Estacionamento</span>
              </div>
            )}
            {hotel.wifi && (
              <div className="item">
                <WifiImg />
                <span>Wifi</span>
              </div>
            )}
            {hotel.breakfast && (
              <div className="item">
                <CoffeeImg />
                <span>Café da manhã</span>
              </div>
            )}
          </Items>
          <Address>
            <LocalizationImg />
            <p>
              Latitude: {hotel.latitude} , Longitude: {hotel.longitude}
            </p>
          </Address>

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

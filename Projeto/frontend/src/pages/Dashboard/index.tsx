import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapIcon from '../../utils/mapIcon';
import HotelImage from '../../assets/hotel.png';

import { Container, Aside } from './styles';

import api from '../../services/api';

interface Hotels {
  id: string;
  latitude: number;
  longitude: number;
  name_hotel: string;
}

const Dashboard: React.FC = () => {
  const [hotels, setHotels] = useState<Hotels[]>([]);

  useEffect(() => {
    api.get('hotels').then(response => {
      setHotels(response.data);
    });
  }, []);

  return (
    <Container>
      <Aside>
        <header>
          <img src={HotelImage} alt="" />

          <h2>Escolha um hotel no mapa</h2>
          <p>
            Encontre o melhor serviço de hospedagem para você curtir as férias
          </p>
        </header>
      </Aside>

      <MapContainer
        className="leaflet-container"
        center={[-19.6250058, -43.2214424]}
        zoom={13}
        scrollWheelZoom
        styles={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {hotels.map(hotel => {
          return (
            <Marker
              icon={mapIcon}
              position={[hotel.latitude, hotel.longitude]}
              key={hotel.id}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                <span>{hotel.name_hotel}</span>
                <Link to={`/hotel/${hotel.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </Container>
  );
};

export default Dashboard;

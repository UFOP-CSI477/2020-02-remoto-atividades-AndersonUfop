import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import mapIcon from '../../utils/mapIcon';


import './styles.css';

import HotelImage from '../../assets/hotel.png';
import MarkerHotel from '../../assets/MarkerHotel.png';


const Dashboard: React.FC = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={HotelImage} alt="" />

          <h2>Escolha um hotel no mapa</h2>
          <p>Encontre o melhor serviço de hospedagem para você curtir as férias</p>
        </header>
      </aside>



      <MapContainer
        className="leaflet-container"
        center={[-19.4530787, -43.1068537]}
        zoom={13}
        scrollWheelZoom={false}
        styles={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={mapIcon}
          position={[-19.4530787, -43.1068537]}
        >
          <Popup minWidth={60}>
            <span>
              Nome do hotel
            </span>
          </Popup>

        </Marker>
      </MapContainer>
    </div>
  );
}

export default Dashboard;
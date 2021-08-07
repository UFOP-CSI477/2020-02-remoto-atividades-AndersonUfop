import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import  api  from '../../services/api';

interface Hotel {
  id: string;
  name_hotel: string;
  address: string;
  city: string;
  state: string;
  pool: boolean;
  wifi: boolean;
  parking: boolean;
  breakfast: boolean;
  images_hotel: Array<{
    id: string;
    image_name: string;
  }>;
}

const Dashboard: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);


  useEffect(() => {
    api.get('hotels').then(response => {
      setHotels(response.data);
    })
    
  })


  return (
    <div>
      <h1>Hoteis</h1>
      <Link to='/details'>
        <span>Ir para próxima página</span>
      </Link>
      {hotels.map(hotel => {
        return (
          <ul key={hotel.id}> 
            <li>{hotel.name_hotel}</li>
            <li>{hotel.address}</li>
            <li>{hotel.city}</li>
            <li>{hotel.state}</li>
            { hotel.pool && <li>Piscina</li> }
            { hotel.wifi && <li>Wifi</li> }
            { hotel.parking && <li>Estacionamento</li> }
            { hotel.breakfast && <li>Café da manhã</li> }
            <hr/>

          </ul>
        )
      })}
    </div>
  );
}

export default Dashboard;
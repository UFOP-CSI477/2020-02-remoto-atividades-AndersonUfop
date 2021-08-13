import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

interface HotelProps {
  name_hotel: string;
  latitude: number;
  longitude: number;
  images: Array<{
    id: string;
    image_name: string;
  }>;
}

interface HotelParams {
  id: string;
}

const Hotel: React.FC = () => {
  const params = useParams<HotelParams>();
  const [hotel, setHotel] = useState<HotelProps>();

  useEffect(() => {
    api.get(`hotels/images/${params.id}`).then(response => {
      setHotel(response.data);
    });
  }, [params.id]);
  
  return (
    <div>
      <h1>Hotel</h1>
    </div>
  );
}

export default Hotel;
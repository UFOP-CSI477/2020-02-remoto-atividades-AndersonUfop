interface ICreateHotelDTO {
  id?: string;
  name_hotel: string;
  latitude: number;
  longitude: number;
  rooms_number: number;
  pool: boolean;
  wifi: boolean;
  parking: boolean;
  breakfast: boolean;
  owner_id: string;
}

export { ICreateHotelDTO };

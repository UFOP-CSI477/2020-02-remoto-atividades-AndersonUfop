interface ICreateHotelDTO {
  id?: string;
  name_hotel: string;
  latitude: number;
  longitude: number;
  localization: string;
  email: string;
  telephone: string;
  rooms_number: number;
  pool: boolean;
  wifi: boolean;
  parking: boolean;
  breakfast: boolean;
  owner_id?: string;
}

export { ICreateHotelDTO };

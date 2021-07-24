interface ICreateHotelDTO {
  id?: string;
  name_hotel: string;
  address: string;
  city: string;
  state: string;
  rooms_number: number;
  pool: boolean;
  wifi: boolean;
  parking: boolean;
  breakfast: boolean;
  owner_id: string;
}

export { ICreateHotelDTO };

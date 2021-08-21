interface ICreateApartmentDTO {
  id?: string;
  hotel_id: string;
  room_number: number;
  description: string;
  price: number;
  suite: boolean;
  tv: boolean;
  air_conditioning: boolean;
  room_type: string;
  availability?: boolean;
}

export { ICreateApartmentDTO };

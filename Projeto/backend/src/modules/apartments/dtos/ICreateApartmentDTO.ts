interface ICreateApartmentDTO {
  id?: string;
  hotel_id: string;
  room_number: number;
  price: number;
  suite: boolean;
  tv: boolean;
  air_conditioning: boolean;
  room_type: string;
  availability?: boolean;
}

export { ICreateApartmentDTO };

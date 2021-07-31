interface ICreateReserveDTO {
  id?: string;
  apartment_id: string;
  user_id: string;
  cpf: string;
  birth_date: Date;
  date_checkin: Date;
  date_checkout: Date;
  total: number;
}

export { ICreateReserveDTO };

import { v4 as uuidV4 } from "uuid";

class Apartment {
  id?: string;

  hotel_id: string;

  room_number: number;

  price: number;

  suite: boolean;

  tv: boolean;

  air_conditioning: string;

  room_type: string;

  availability: boolean;

  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.availability = true;
    }
  }
}

export { Apartment };

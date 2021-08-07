import { Expose } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import { Hotel } from "./Hotel";

@Entity("images_hotel")
class HotelImage {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  image_name: string;

  @ManyToOne(() => Hotel, (hotel) => hotel.images)
  @JoinColumn({ name: "hotel_id" })
  hotel: Hotel;

  @Column()
  hotel_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: "hotel_url" })
  getHotelUrl(): string {
    return `http://localhost:3333/images/hotel/${this.image_name}`;
  }
}

export { HotelImage };

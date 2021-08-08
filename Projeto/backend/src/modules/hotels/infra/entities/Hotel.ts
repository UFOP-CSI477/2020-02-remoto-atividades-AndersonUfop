import { User } from "@modules/users/infra/entities/User";
import { Expose } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import { HotelImage } from "./HotelImage";

@Entity("hotels")
class Hotel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name_hotel: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  rooms_number: number;

  @Column()
  pool: boolean;

  @Column()
  wifi: boolean;

  @Column()
  parking: boolean;

  @Column()
  breakfast: boolean;

  @ManyToOne(() => User)
  @JoinColumn({ name: "owner_id" })
  owner: User;

  @Column()
  owner_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => HotelImage, (image) => image.hotel, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "hotel_id" })
  images: HotelImage[];
}

export { Hotel };

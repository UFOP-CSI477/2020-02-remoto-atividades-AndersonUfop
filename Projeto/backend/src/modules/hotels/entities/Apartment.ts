import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Hotel } from "./Hotel";

@Entity("apartments")
class Apartment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Hotel)
  @JoinColumn({ name: "hotel_id" })
  hotel: Hotel;

  @Column()
  hotel_id: string;

  @Column()
  room_number: number;

  @Column()
  price: number;

  @Column()
  suite: boolean;

  @Column()
  tv: boolean;

  @Column()
  air_conditioning: boolean;

  @Column()
  room_type: string;

  @Column()
  availability: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Apartment };

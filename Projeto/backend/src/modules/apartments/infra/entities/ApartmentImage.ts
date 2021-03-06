import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Apartment } from "./Apartment";

@Entity("images_apartment")
class ApartmentImage {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  image_name: string;

  @ManyToOne(() => Apartment, (apartment) => apartment.images)
  @JoinColumn({ name: "apartment_id" })
  apartment: Apartment;

  @Column()
  apartment_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { ApartmentImage };

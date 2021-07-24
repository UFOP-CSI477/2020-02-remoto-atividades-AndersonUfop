import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("images_hotel")
class HotelImage {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  image_name: string;

  @Column()
  hotel_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { HotelImage };

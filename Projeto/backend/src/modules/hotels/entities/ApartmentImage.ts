import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("images_apartment")
class ApartmentImage {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  image_name: string;

  @Column()
  apartment_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { ApartmentImage };

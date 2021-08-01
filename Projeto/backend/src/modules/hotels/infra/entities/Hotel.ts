import { User } from "@modules/users/infra/entities/User";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("hotels")
class Hotel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name_hotel: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

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
}

export { Hotel };

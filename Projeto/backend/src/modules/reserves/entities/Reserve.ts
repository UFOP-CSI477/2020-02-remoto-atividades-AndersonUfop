import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Apartment } from "../../hotels/entities/Apartment";

@Entity("reserves")
class Reserve {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Apartment)
  @JoinColumn({ name: "apartment_id" })
  apartment: Apartment;

  @Column()
  apartment_id: string;

  @Column()
  user_id: string;

  @Column()
  cpf: string;

  @Column()
  birth_date: Date;

  @Column()
  date_checkin: Date;

  @Column()
  date_checkout: Date;

  @Column()
  total: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Reserve };

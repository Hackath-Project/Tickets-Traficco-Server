import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
} from 'typeorm';
import { Transaction } from './transaction.entity';

@Entity()
export class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  date: Date;

  @Column()
  time: string;

  @Column()
  price: number;

  @Column()
  origin: string;

  @Column()
  destination: string;

  @Column()
  isAvailable: boolean;
  @OneToOne(() => Transaction, (transaction) => transaction.ticket)
  transaction: Transaction;
}

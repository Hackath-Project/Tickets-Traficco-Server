import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Ticket } from './ticket.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  transactionId: number;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column('decimal')
  amount: number;

  @Column('timestamp')
  timestamp: Date;

  @Column()
  status: string;

  @ManyToOne(() => User, (user) => user.transactions)
  user: User;

  @OneToOne(() => Ticket)
  @JoinColumn()
  ticket: Ticket;
}

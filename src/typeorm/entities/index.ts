import { Ticket } from './ticket.entity';
import { Transaction } from './transaction.entity';
import { User } from './user.entity';

const entities = [User, Ticket, Transaction];
export { User, Ticket, Transaction };
export default entities;

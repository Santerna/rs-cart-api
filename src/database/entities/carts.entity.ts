import {
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CartItem } from './cartItem.entity';
import { User } from './user.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => User, (User) => User.id)
  @JoinColumn({ name: 'id' })
  userId: User['id'];

  @OneToMany(() => CartItem, (cartItem) => cartItem)
  @JoinColumn({ name: 'id', referencedColumnName: 'store_id' })
  items: CartItem[];
}

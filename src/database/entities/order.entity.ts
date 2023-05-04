import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cart } from './carts.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false })
  user_id: string;

  @Column({ type: 'json', nullable: false })
  payment: Record<string, unknown>;

  @Column({ type: 'json', nullable: false})
  delivery: Record<string, unknown>

  @Column({ type: 'text', nullable: true})
  comment: string

  @Column({ type: 'enum', nullable: false})
  status: string;

  @Column({ type: 'integer', nullable: false})
  total: number;

  @ManyToOne(() => Cart, (cart) => cart.id)
  @JoinColumn({ name: 'cart_id'})
  cart_id: Cart;
}

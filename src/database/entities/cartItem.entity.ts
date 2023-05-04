import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class CartItem {
  @Column({ type: 'integer', nullable: false })
  count: number;

  @ManyToOne(() => Product, (product) => product.id)
  @JoinColumn({ name: 'id'})
  product: Product;
}

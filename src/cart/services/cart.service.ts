import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';

// import { Cart } from '../models';

import { Cart } from '../../database/entities/carts.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly userCarts: Repository<Cart>
  ) {}
  // private userCarts: Record<string, Cart> = {};

  async findByUserId(userId: string): Promise<Cart> {
    return this.userCarts.findOneBy({ id: userId});
  }

  async createByUserId(userId: string) {
    try {
      const id = uuidv4();
      const userCart = {
        id,
        userId,
        items: [],
      } as Cart;
      await this.userCarts.insert(userCart);
      return userCart;
    } catch (error) {
      return error;
    }
  }

  async findOrCreateByUserId(userId: string): Promise<Cart> {
    const userCart = this.findByUserId(userId);

    if (userCart) {
      return userCart;
    }

    return this.createByUserId(userId);
  }

  async updateByUserId(userId: string, { items }: Cart): Promise<Cart> {
    const { id, ...rest } = await this.findOrCreateByUserId(userId);

    const updatedCart = {
      id,
      ...rest,
      items: [ ...items ],
    }
    try {
      await this.userCarts.update({ userId }, updatedCart);
    } catch (error) {
      return error;
    }
    
    return { ...updatedCart };
  }

  async removeByUserId(userId: string): Promise<void> {
    try {
      await this.userCarts.delete({ userId });
    } catch (error) {
      return error;
    }
  }
}

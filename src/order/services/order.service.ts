import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';
// import { Order } from '../models';
import { Order } from '../../database/entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orders: Repository<Order>,
  ) {}
  // private orders: Record<string, Order> = {}

  async findById(orderId: string): Promise<Order> {
    return this.orders.findOneBy({ id: orderId });
  }

  async create(data: any) {
    try {
      const id = uuidv4();
    const order = {
      ...data,
      id,
      status: 'inProgress',
    };
    this.orders.insert(order);
    return order;
    } catch (error) {
      return error;
    }
  }

  async update(orderId, data) {
    const order = await this.findById(orderId);

    if (!order) {
      throw new Error('Order does not exist.');
    }

    try {
      this.orders.update({ id: orderId }, {
        ...data,
        id: orderId,
      });
    } catch (error) {
      return error;
    }
  }
}

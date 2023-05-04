import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategy';
import { Cart } from './entities/carts.entity';
import { CartItem } from './entities/cartItem.entity';
import { Order } from './entities/order.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.CART_DATABASE_NAME,
      entities: ['dist/database/entities/*.entity{.ts,.js}'],
      /**
       * Flag to show all generated sql queries on each interaction with DB.
       * Should be omitted for production production.
       */
      logging: true,
      /**
       * This naming strategy will map field_name from database to fieldName inside application.
       */
      namingStrategy: new SnakeNamingStrategy(),
    }),
    TypeOrmModule.forFeature([Cart, Order, CartItem, User]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}

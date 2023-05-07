import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';

// import { User } from '../models';
import { User } from '../../database/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
   private readonly users: Repository<User>
  ) {}

  // private readonly users: Record<string, User>;

  async findOne(userId: string): Promise<User> {
    return await this.users.findOneBy({ id: userId });
  }

  async createOne({ name, password }: User): Promise<User> {
    try {
      const id = uuidv4();
      const newUser = { id: name || id, name, password };
  
      await this.users.insert(newUser);

      return newUser;
    } catch (error) {
      return error;
    }
  }
}

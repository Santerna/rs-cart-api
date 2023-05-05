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

  findOne(userId: string): User {
    return this.users[ userId ];
  }

  createOne({ name, password }: User): User {
    const id = uuidv4();
    const newUser = { id: name || id, name, password };

    this.users[ id ] = newUser;

    return newUser;
  }
}

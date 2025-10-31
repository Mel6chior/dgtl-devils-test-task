import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/libs/type-orm/repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
}

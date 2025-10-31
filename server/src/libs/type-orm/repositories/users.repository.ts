import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudRepository } from '.';
import { User } from '../entities/user/user';

@Injectable()
export class UsersRepository extends CrudRepository<User> {
  constructor(@InjectRepository(User) repository: Repository<User>) {
    super(repository);
  }

  async findByEmail(email: string) {
    return await this.repository.findOne({ where: { email } });
  }
}

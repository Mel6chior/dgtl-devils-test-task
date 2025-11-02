import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/libs/type-orm/repositories/users.repository';
import { UserEntity } from '../../entities/user/user';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async profile(id: string){
    return await this.usersRepository.findById(id);
  }

  async editProfile(id: string, userData: Partial<UserEntity>){
    return await this.usersRepository.update(id, userData);
  }

  async deleteProfile(id: string){
    return await this.usersRepository.delete(id);
  }
}

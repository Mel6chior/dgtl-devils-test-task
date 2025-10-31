import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { genSalt, hash } from 'bcrypt';
import { RegisterUserData } from 'src/core/entities/user/user';
import { UsersRepository } from 'src/libs/type-orm/repositories/users.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async register(input: RegisterUserData) {
    const passwordHash = await this.hashPassword(input.password);

    const { id } = await this.usersRepository.create({
      ...input,
      passwordHash,
    });
    const accessToken = await this.jwtService.signAsync({ id });

    return accessToken;
  }

  private async hashPassword(password: string) {
    const salt = await genSalt();

    return await hash(password, salt);
  }
}

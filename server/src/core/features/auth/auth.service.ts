import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, genSalt, hash } from 'bcrypt';
import { UsersRepository } from '../../../libs/type-orm/repositories/users.repository';
import { LoginUserData, RegisterUserData } from '../../entities/user/user';
import { ErrorMessage } from '../../const/error-message';

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

  async login({ email, password }: LoginUserData) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException(ErrorMessage.INVALID_EMAIL_OR_PASSWORD);
    }

    const isPasswordValid = await this.validatePassword(
      password,
      user.passwordHash,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException(ErrorMessage.INVALID_EMAIL_OR_PASSWORD);
    }
  }

  private async hashPassword(password: string) {
    const salt = await genSalt();

    return await hash(password, salt);
  }

  private async validatePassword(candidate: string, hash: string) {
    return await compare(candidate, hash);
  }
}

import { Entity, GeneralFields } from '..';

export interface UserEntity extends Entity {
  login: string;

  email: string;

  passwordHash: string;

  name?: string;
}

export interface RegisterUserData
  extends Omit<UserEntity, 'passwordHash' | GeneralFields> {
  password: string;
}

export interface LoginUserData
  extends Pick<RegisterUserData, 'email' | 'password'> {}

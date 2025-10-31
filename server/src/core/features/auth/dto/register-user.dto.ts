import { RegisterUserData } from 'src/core/entities/user/user';

export class RegisterUserDto implements RegisterUserData {
  password: string;
  login: string;
  email: string;
  name?: string | undefined;
}

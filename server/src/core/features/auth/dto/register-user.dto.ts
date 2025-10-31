import { ApiProperty } from '@nestjs/swagger';
import { RegisterUserData } from 'src/core/entities/user/user';

export class RegisterUserDto implements RegisterUserData {
  @ApiProperty()
  password: string;

  @ApiProperty()
  login: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ nullable: true })
  name?: string | undefined;
}

import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsEmail,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { RegisterUserData } from 'src/core/entities/user/user';

export class RegisterUserDto implements RegisterUserData {
  @ApiProperty()
  @IsStrongPassword({
    minLength: 8,
    minUppercase: 1,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password: string;

  @ApiProperty()
  @IsString()
  @IsAlphanumeric()
  login: string;

  @ApiProperty()
  @IsEmail()
  @IsString()
  @IsAlphanumeric()
  email: string;

  @ApiProperty({ nullable: true, type: String })
  name?: string | undefined;
}

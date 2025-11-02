import { ApiProperty } from "@nestjs/swagger";
import { GeneralFields } from "../../../entities";
import { UserEntity } from "../../../entities/user/user";

export class UpdateUserDto implements Omit<Partial<UserEntity>, GeneralFields | 'passwordHash'>{
  @ApiProperty({ nullable: true })
  login?: string;

  @ApiProperty({ nullable: true })
  email?: string;

  @ApiProperty({ nullable: true })
  name?: string;
}

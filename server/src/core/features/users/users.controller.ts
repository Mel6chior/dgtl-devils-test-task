import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CurrentUser } from '../../decorators/current-user.decorator';
import { AuthGuard } from '../../guards/auth.guard';
import type { TokenPayload } from '../../types/token-payload';
import { UsersService } from './users.service';

@Controller('user')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile')
  @UseGuards(AuthGuard)
  async profile(@CurrentUser() user: TokenPayload){
    return await this.usersService.profile(user.id);
  }
}

import { Body, Controller, Delete, Get, Patch, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { CurrentUser } from '../../decorators/current-user.decorator';
import { AuthGuard } from '../../guards/auth.guard';
import type { TokenPayload } from '../../types/token-payload';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('user')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile')
  @ApiOperation({ summary: "Get user's profile"})
  @UseGuards(AuthGuard)
  async profile(@CurrentUser() user: TokenPayload){
    return await this.usersService.profile(user.id);
  }

  @Patch()
  @ApiOperation({ summary: "Edit user's profile"})
  @UseGuards(AuthGuard)
  async editProfile(@CurrentUser() user: TokenPayload, @Body() dto: UpdateUserDto){
    return await this.usersService.editProfile(user.id, dto);
  }

  @Delete()
  @ApiOperation({ summary: "Delete user's profile"})
  @UseGuards(AuthGuard)
  async deleteProfile(@CurrentUser() user: TokenPayload){
    return await this.usersService.deleteProfile(user.id);
  }
}

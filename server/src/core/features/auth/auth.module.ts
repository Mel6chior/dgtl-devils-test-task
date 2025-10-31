import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from 'src/core/database/database.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtConfigService } from '../../../libs/jwt/jwt.config.service';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useClass: JwtConfigService,
    }),
  ],
  providers: [AuthService, JwtConfigService],
  controllers: [AuthController],
})
export class AuthModule {}

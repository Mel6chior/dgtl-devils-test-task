import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from 'src/core/database/database.module';
import { JwtConfigService } from '../../../libs/jwt/jwt.config.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

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
  exports: [JwtModule]
})
export class AuthModule {}

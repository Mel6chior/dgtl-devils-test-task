import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';
import { StringValue } from 'ms';

@Injectable()
export class JwtConfigService implements JwtOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createJwtOptions(): Promise<JwtModuleOptions> | JwtModuleOptions {
    return {
      secret: this.configService.getOrThrow<string>('JWT_SECRET'),
      signOptions: {
        expiresIn: this.configService.getOrThrow<StringValue>('JWT_EXPIRES'),
      },
    };
  }
}

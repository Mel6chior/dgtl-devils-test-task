import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { DatabaseModule } from './core/database/database.module';
import { AuthModule } from './core/features/auth/auth.module';
import { UsersModule } from './core/features/users/users.module';
import { GlobalFilter } from './core/filters/global/global.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    AuthModule,
    UsersModule
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalFilter
    }
  ]
})
export class AppModule {}

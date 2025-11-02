import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from 'src/libs/type-orm/entities';
import { UsersRepository } from 'src/libs/type-orm/repositories/users.repository';
import { TypeOrmConfigService } from '../../libs/type-orm/type-orm.config-service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useClass: TypeOrmConfigService,
    }),
    TypeOrmModule.forFeature(entities),
  ],
  providers: [UsersRepository],
  exports: [TypeOrmModule, UsersRepository],
})
export class DatabaseModule {}

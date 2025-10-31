import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from '../../libs/typeorm/typeorm-module-options';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useClass: TypeOrmConfigService,
        }),
    ],
    exports: [TypeOrmModule]
})
export class DatabaseModule {}

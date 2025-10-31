import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";
import { config } from "dotenv";
import { entities } from "../src/libs/typeorm/entities/";
import { join } from "path";

config();

const configService = new ConfigService();

export default new DataSource({
    type: 'postgres',
    host: configService.get<string>('POSTGRES_HOST'),
    port: configService.get<number>('POSTGRES_PORT'),
    database: configService.get<string>('POSTGRES_DB'),
    username: configService.get<string>('POSTGRES_USER'),
    password: configService.get<string>('POSTGRES_PASSWORD'),
    entities,
    migrations: [join(process.cwd(), 'database/migrations/*.ts')]
})
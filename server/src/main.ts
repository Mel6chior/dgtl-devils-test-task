import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.getOrThrow<number>('PORT');

  await app.listen(port ?? 3001);
}

bootstrap().catch((err) => {
  Logger.error(err);
  process.exit(1);
});

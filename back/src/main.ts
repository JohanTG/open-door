import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { AppConfigService } from './common/app-config.service';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    //new FastifyAdapter(),
    {
      cors: true,
    },
  );
  const config = app.get(AppConfigService);
  Logger.log('starting on port=' + config.appPort);
  await app.listen(3000);
}
bootstrap();

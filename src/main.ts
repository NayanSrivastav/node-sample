import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as yaml from 'yaml';
import * as fs from 'fs';
import { AppModule } from '@/app/app.module';
import { RequestMethod } from '@nestjs/common';
import {
  APP_NAME,
  MGMT,
  SWAGGER_PATH,
  SPEC_FILE,
  formEndpoint,
} from '@Model/dto/constants';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { LoggerService } from './logger/logger.service';

async function bootstrap() {
  const apiPath = 'api/v1';

  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      level: 'info',
      format: winston.format.json(),
      transports: [new winston.transports.Console()],
    }),
  });
  app.setGlobalPrefix(formEndpoint(APP_NAME, apiPath), {
    exclude: [
      {
        path: formEndpoint(APP_NAME, MGMT, '(.*)'),
        method: RequestMethod.GET,
      },
    ],
  });
  const config = new DocumentBuilder()
    .setTitle('Teams Integrator')
    .setVersion('1.0')
    .addServer('/' + formEndpoint(APP_NAME, apiPath))
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    ignoreGlobalPrefix: true,
  });
  SwaggerModule.setup(SWAGGER_PATH, app, document);
  const yamlString: string = yaml.stringify(document, {});
  fs.writeFileSync(SPEC_FILE, yamlString);

  await app.listen(3000);
}
bootstrap();

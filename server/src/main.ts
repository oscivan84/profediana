import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  // execption
  app.useGlobalFilters(new HttpExceptionFilter);

  // cors
  app.enableCors({
    origin: '*'
  })

  // documentation
  const config = new DocumentBuilder()
    .setTitle('SofSol')
    .setDescription('Api de SofSol')
    .setVersion('1.0')
    .addTag('SofSol')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3333);
}
bootstrap();

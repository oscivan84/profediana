import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  // execption
  app.useGlobalFilters(new HttpExceptionFilter);
  
  // pipe
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // cors
  app.enableCors({
    origin: '*',
    credentials: true,
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

  const { HOST, PORT } = process.env;
  await app.listen(PORT, HOST, () => {
    console.log(`Server run: ${HOST}:${PORT}`);
  });
}
bootstrap();

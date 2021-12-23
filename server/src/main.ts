import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationInputsPipe } from './common/pipes/validation-inputs.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  // execption
  app.useGlobalFilters(new HttpExceptionFilter);
  
  // pipe
  app.useGlobalPipes(new ValidationInputsPipe());

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
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const { HOST, PORT } = process.env;
  await app.listen(PORT, HOST, () => {
    console.log(`Server run: http://${HOST}:${PORT}`);
  });
}
bootstrap();

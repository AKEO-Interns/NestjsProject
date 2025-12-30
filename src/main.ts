import { NestFactory } from '@nestjs/core';

import { ValidationPipe } from '@nestjs/common';
import { BooksModule } from './books/books.module';


async function bootstrap() {

  const book = await NestFactory.create(BooksModule)
 book.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await book.listen(process.env.PORT ?? 3000);

}
bootstrap();

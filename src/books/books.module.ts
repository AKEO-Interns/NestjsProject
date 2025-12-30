import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Book } from './entities/book.entity';
import { UsersModule } from 'src/users/users/users.module';
import { AuthModule } from 'src/auth/auth.module';
import { OrdersModule } from 'src/orders/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Pg#2026',
      database: 'bookstore',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Book]),

    UsersModule,
    AuthModule,
    OrdersModule

  
  ],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}

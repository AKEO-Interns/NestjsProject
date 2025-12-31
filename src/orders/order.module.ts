// src/orders/orders.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './order.service';
import { OrdersController } from './order.controller';
import { Order } from './entities/order.entity';
import { OrderModule } from 'src/queues/order/order.module';


@Module({
  imports: [TypeOrmModule.forFeature([Order]),
OrderModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}

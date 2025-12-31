// src/queues/order/order.module.ts
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { OrderService } from './order.service';
import { OrderConsumer } from './order.processor';

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: 'localhost', // Redis host
        port: 6379,        // Redis port
      },
    }),
    BullModule.registerQueue({
      name: 'order',
    }),
  ],
  providers: [OrderService, OrderConsumer],
  exports: [OrderService],
})
export class OrderModule {}

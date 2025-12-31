// src/orders/orders.controller.ts
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { OrdersService } from './order.service';
import { OrderService } from 'src/queues/order/order.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('orders')
@UseGuards(AuthGuard('jwt'))
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly orderQueueService: OrderService, // queue service
  ) {}

  @Post()
  async create(@Body() orderData: any) {
    // Save order to DB
    const order = await this.ordersService.createOrder(orderData);

    // Trigger background job
    const job = await this.orderQueueService.createOrder(order);

    return { message: 'Order received', jobId: job.id };
  }
}


// src/orders/orders.controller.ts
import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Order } from './entities/order.entity';
import { OrdersService } from './order.service';
import { AuthGuard } from '@nestjs/passport';

@Crud({
  model: {
    type: Order,
  }
})
@UseGuards(AuthGuard('jwt')) // protect all order routes
@Controller('orders')
export class OrdersController {
  constructor(public service: OrdersService) {}
}

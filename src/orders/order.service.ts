// src/orders/orders.service.ts
import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService extends TypeOrmCrudService<Order> {
  constructor(@InjectRepository(Order) repo: Repository<Order>) {
    super(repo);
  }
    // Add a public method to create order
  async createOrder(data: Partial<Order>): Promise<Order> {
    const order = this.repo.create(data); // creates entity instance
    return this.repo.save(order); // saves to DB
  }
}

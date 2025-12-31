import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class OrderService {
  constructor(
    @InjectQueue('order') private readonly orderQueue: Queue,
  ) {}

  async createOrder(orderData: any) {
    // Add job to queue
    const job = await this.orderQueue.add(
      'book-order',
      orderData,
      {
        attempts: 3, // retry if fails
        backoff: { type: 'exponential', delay: 2000 },
        removeOnComplete: true,
        removeOnFail: 10,
      },
    );
    return job;
  }
}

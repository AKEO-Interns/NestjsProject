import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('order') // queue name
export class OrderConsumer extends WorkerHost {
  // NestJS will call this automatically for jobs in the "order" queue
  async process(job: Job<any>): Promise<any> {
    console.log('Processing order:', job.data);

    // Your order handling logic here
    return { status: 'done' };
  }
}

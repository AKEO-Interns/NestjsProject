// src/orders/entities/order.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  totalAmount: number;

  @Column({ default: 'PENDING' })
  status: 'PENDING' | 'PAID' | 'SHIPPED' | 'CANCELLED';

  @CreateDateColumn()
  createdAt: Date;
}

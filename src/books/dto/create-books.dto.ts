import { IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @Type(() => Number)   // Converts string to number
  @IsNumber()
  price: number;
}

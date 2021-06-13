import { IsArray, IsDefined, IsUUID } from 'class-validator';

export class GetOrderRequest {
  @IsUUID()
  @IsDefined()
  public readonly id!: string;
}

export class CreateOrderRequest {
  @IsArray()
  @IsDefined()
  @IsUUID('all', { each: true })
  public readonly itemIds!: string[];
}

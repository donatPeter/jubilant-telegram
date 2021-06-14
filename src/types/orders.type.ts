import { ArrayMinSize, IsArray, IsDefined, IsUUID } from 'class-validator';

export class GetOrderRequest {
  @IsUUID()
  @IsDefined()
  public readonly id!: string;
}

export class CreateOrderRequest {
  @IsUUID()
  @IsDefined()
  public readonly customerId!: string;

  @IsArray()
  @ArrayMinSize(1)
  @IsDefined()
  @IsUUID('all', { each: true })
  public readonly itemIds!: string[];
}

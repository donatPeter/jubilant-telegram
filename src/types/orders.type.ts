import { IsDefined, IsUUID } from 'class-validator';

export class GetOrderRequest {
  @IsUUID()
  @IsDefined()
  public readonly id!: string;
}

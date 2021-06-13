import {
  IsDefined,
  IsEmail,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

export class GetCustomerRequest {
  @IsUUID()
  @IsDefined()
  public readonly id!: string;
}

export class CustomerRequest {
  @IsEmail()
  @IsDefined()
  public readonly email!: string;

  @IsString()
  @IsDefined()
  @MinLength(3)
  public readonly given_name!: string;

  @IsString()
  @IsDefined()
  @MinLength(3)
  public readonly family_name!: string;
}

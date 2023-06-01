import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AuthDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;
}

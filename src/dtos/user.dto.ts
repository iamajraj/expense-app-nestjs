import { IsEmail, IsNumber, IsString } from 'class-validator';

export class UserDTO {
  @IsString()
  name: string;
  @IsNumber()
  age: number;
  @IsString()
  @IsEmail()
  email: string;
}

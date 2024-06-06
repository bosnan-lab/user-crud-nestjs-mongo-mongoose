import { IsOptional, IsInt, IsString, Min } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  age?: number;
}

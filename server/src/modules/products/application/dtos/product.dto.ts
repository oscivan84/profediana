import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
import { PaginateDto } from 'src/common/dto/paginate.dto';

export class CreateProductDto { 
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  providerId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  campusId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsAlphanumeric()
  @MaxLength(10)
  @MinLength(10)
  code: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  purchasePrice: number; 

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  salePrice: number;
}

export class FilterProduct extends PaginateDto {
  ids?: number[]
}
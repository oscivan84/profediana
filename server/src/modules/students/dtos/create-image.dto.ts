import { ApiProperty } from '@nestjs/swagger';
import { CreateFileDto } from '../../files/dtos/create-file.dto';

export class CreateImageDto extends CreateFileDto {
  static generator(data: CreateFileDto) {
    data.fileableType = 'Student';
    return data;
  }
}

export class ValidateCreateImage {
  @ApiProperty()
  public file: Express.Multer.File;
}
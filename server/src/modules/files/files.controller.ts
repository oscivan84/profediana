import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  constructor(private filesService: FilesService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post()
  public async store(@UploadedFile() file: Express.Multer.File) {
    return await this.filesService.createFile({
      fileableId: 1,
      fileableType: "Student",
      name: file.originalname,
      size: file.size,
      mimeType: file.mimetype,
      buffer: file.buffer
    });
  }

}
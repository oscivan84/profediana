import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { FileRepository } from './domain/file.repository';
import { CreateFileDto } from './dtos/create-file.dto';
import * as fs from 'fs';
import * as path from 'path';
import ObjectId from 'bson-objectid';
import { Connection } from 'typeorm';
import { FileEntity } from './domain/file.entity';

@Injectable()
export class FilesService {
  private root = path.resolve(__dirname, '../../../storage');

  constructor(
    private connection: Connection,
    private fileRepository: FileRepository) {}

  public async createFile(payload: CreateFileDto): Promise<FileEntity> {
    const extname = path.extname(payload.name).replace('.', ''); 
    const fileToken = new ObjectId().toHexString()
    const softName = `${fileToken}.${extname}`;
    const realPath = path.resolve(this.root, softName);
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    // processamos
    try {
      // save file on filesystem
      fs.writeFileSync(realPath, payload.buffer);
      const partial = Object.assign({}, {
        ...payload,
        path: realPath,
        extname
      });
      // save file on database
      const newFile = this.fileRepository.create(partial);
      return await this.fileRepository.save(newFile);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      const existsFile = fs.existsSync(realPath);
      if (existsFile) fs.rmdirSync(realPath, { recursive: true });
      throw new InternalServerErrorException("No se pudo guardar el archivo");
    }
  }
}
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Connection } from 'typeorm';
import { ProductsService } from '../products/products.service';
import { SearchTypeDto } from './detail.dto';
import { DetailEntity } from './detail.entity';
import { DetailRepository } from './detail.repository';
import { Observable } from 'rxjs';

@Injectable()
export class DetailsService {
  constructor(
    private connection: Connection,
    private productsService: ProductsService,
    private detailRepository: DetailRepository) {}

  public async createDetail(payload: DetailEntity): Promise<DetailEntity> {
    try {
      const newDetail = this.detailRepository.create(payload);
      return await this.detailRepository.save(newDetail);
    } catch (error) {
      throw new InternalServerErrorException("No se pudo guardar los datos");
    }
  }

  public createDetailMany(payload: DetailEntity[]): Observable<DetailEntity[]> {
    return new Observable(subscriber => {
      const execute = async () => {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        // procesar
        try {
          const result: DetailEntity[] = [];
          // guardar en memoria
          for(let detail of payload) {
            const createDetail = this.detailRepository.create(detail);
            const saveDetail = await queryRunner.manager.save(createDetail);
            result.push(saveDetail);
          }
          // save
          await queryRunner.commitTransaction();
          return result;
        } catch (err) {
          await queryRunner.rollbackTransaction();
          throw new InternalServerErrorException(`No se pudo guardar el detalle`);
        } finally {
          await queryRunner.release();
        }
      }
      // executar
      execute()
      .then(res => subscriber.next(res))
      .catch(err => subscriber.error(err));
    });
  }

  public async searchType(input: SearchTypeDto) {
    const typesProducts = await this.productsService.getProducts(input);
    return [
      { type: 'Product', data: typesProducts }
    ]
  }
}

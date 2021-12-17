import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Connection } from 'typeorm';
import { ProductsService } from '../products/products.service';
import { SearchTypeDto } from './detail.dto';
import { DetailEntity } from './detail.entity';
import { DetailRepository } from './detail.repository';
import { Observable } from 'rxjs';
import { FilterDetail } from './detail.dto';
import { PaginateDto } from 'src/common/dto/paginate.dto';
import { Collection } from 'collect.js';

@Injectable()
export class DetailsService {
  constructor(
    private connection: Connection,
    private productsService: ProductsService,
    private detailRepository: DetailRepository) {}

  public async getDetails(filters: FilterDetail, input: PaginateDto) {
    const queryBuilder = this.detailRepository.createQueryBuilder()
      .where(filters.invoiceId ? `invoice_id = ${filters.invoiceId}` : `1`)  
      .andWhere(filters.detailableType ? `detailable_type = '${filters?.detailableType}'` : '1');
    const details = await this.detailRepository.paginate(queryBuilder, input);
    const ids = new Collection(details.items).pluck('detailableId').toArray();
    // get products
    const productInputs: any = { ids, ...input };
    const products = new Collection(await this.productsService.getProducts(productInputs, false));
    // setting data
    await details.items.map((det: any) => {
      det.detailableObject = {};
      if (det.detailableType === 'Product')  {
        det.detailableObject = products.where('id', det.detailableId).first();
      }
      
      return det;
    });
    // result
    return details;
  }

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

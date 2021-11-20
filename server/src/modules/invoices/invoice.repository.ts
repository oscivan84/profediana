import { Repository, EntityRepository } from 'typeorm';
import { InvoiceEntity } from './invoice.entity';

@EntityRepository(InvoiceEntity)
export class InvoiceRepository extends Repository<InvoiceEntity> {}
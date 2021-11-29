import { Repository, EntityRepository } from 'typeorm';
import { InvoiceEntity } from './invoice.entity';
import { paginate, Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';

@EntityRepository(InvoiceEntity)
export class InvoiceRepository extends Repository<InvoiceEntity> {

  public async paginate(options: IPaginationOptions): Promise<Pagination<InvoiceEntity>> {
    return paginate<InvoiceEntity>(this, options);
  }

  // Monto de la deudas
  public async findDebt(id: number, cancelled?: boolean | undefined) {
    // monto pagado
    const paidOut = await this.createQueryBuilder('inv')
      .innerJoin('payments', 'pay', 'pay.invoice_id = inv.id')
      .where(`inv.id = ${id}`)
      .andWhere(`${typeof cancelled === 'undefined' ? 1 : `pay.cancelled = ${cancelled}`}`)
      .select('IFNULL(SUM(pay.price), 0) as price')
      .getSql();
    // deuda total
    const [{price}] = await this.createQueryBuilder('inv')
      .innerJoin("details", "det", 'det.invoice_id = inv.id')
      .where(`inv.id = ${id}`)
      .select(`(IFNULL(SUM(det.price * det.amount), 0) - (${paidOut})) as price`)
      .getRawMany();
    return price;
  }

  // Numero de cuotas de pago
  public async findCountShare(id: number): Promise<number> {
    const { share } = await this.createQueryBuilder("inv")
      .innerJoin("payments", "pay", "pay.invoice_id = inv.id")
      .where(`inv.id = ${id}`)
      .select('COUNT(pay.id) as share')
      .getRawOne();
    return parseInt(share);
  }

  public async findTotal(id: number): Promise<number> {
    const {total} = await this.createQueryBuilder('pay')
      .innerJoin('details', 'det', 'det.invoice_id = pay.id')
      .where(`pay.id = ${id}`)
      .select('IFNULL(SUM(det.price * det.amount), 0) as total')
      .getRawOne();
    return total;
  }
}
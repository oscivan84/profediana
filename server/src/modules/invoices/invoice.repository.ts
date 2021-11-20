import { Repository, EntityRepository } from 'typeorm';
import { InvoiceEntity } from './invoice.entity';

@EntityRepository(InvoiceEntity)
export class InvoiceRepository extends Repository<InvoiceEntity> {

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

}
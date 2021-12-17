import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CampusesService } from '../campuses/campuses.service';
import { StudentsService } from '../students/students.service';
import { UsersService } from '../users/users.service';
import { SearchReceiverDto } from './domain/invoice.dto';
import { InvoiceEntity } from './domain/invoice.entity';
import { InvoiceRepository } from './domain/invoice.repository';
import ObjectId from 'bson-objectid';
import { PaginateDto } from 'src/common/dto/paginate.dto';
import { DetailsService } from '../details/details.service';
import { FilterDetail } from '../details/detail.dto';

@Injectable()
export class InvoicesService {
  constructor(
    private usersService: UsersService,
    private studentsService: StudentsService,
    private campusesService: CampusesService,
    private detailsService: DetailsService,
    private invoiceRepository: InvoiceRepository) {}

  public async createInvoice(payload: InvoiceEntity) {
    try {
      const objectId = new ObjectId();
      const newInvoice = this.invoiceRepository.create({
        ...payload,
        code: objectId.toHexString()
      });
      return await this.invoiceRepository.save(newInvoice);
    } catch (error) {
      throw new InternalServerErrorException("No se pudo guardar los datos");
    }
  }

  public async findInvoice(id) {
    return this.invoiceRepository.createQueryBuilder()
      .where(`id = :id`, { id })
      .orWhere(`code = :id`, { id })
      .getOneOrFail()
  }

  public async findDebt(id: number, cancelled?: boolean | undefined): Promise<any> {
    try {
      const total = await this.invoiceRepository.findTotal(id);
      const debt = await this.invoiceRepository.findDebt(id, cancelled);
      const diff = (total - debt) as number;
      const isCancelled = debt <= 0;
      return { 
        total,
        debt,
        diff,
        cancelled: isCancelled
      }
    } catch (error) {
      throw new InternalServerErrorException("No se pudo obtener la deuda");
    }
  }

  public async findCountShare(id: number): Promise<number> {
    try {
      return await this.invoiceRepository.findCountShare(id);
    } catch (error) {
      throw new InternalServerErrorException("No se pudo obtener el total letras de pago");
    }
  }

  public async updatedCancelled(id: number) {
    try {
      const debt = await this.invoiceRepository.findDebt(id, true);
      const cancelled = debt <= 0;
      await this.invoiceRepository.update(id, { cancelled });
      return { cancelled }
    } catch (error) {
      throw new InternalServerErrorException("No se pudo cancelar la factura");
    }
  }

  public async searchReceiver(input: SearchReceiverDto) {
    const typeStudents = await this.studentsService.getStudents(input);
    const typeUsers = await this.usersService.getUsers(input);
    const typeCampuses = await this.campusesService.getCampuses(input);
    return [
      { type: 'Student', data: typeStudents },
      { type: 'User', data: typeUsers },
      { type: 'Campus', data: typeCampuses },
    ]
  }

  public async details(id: number, input: PaginateDto) {
    const filters: FilterDetail = { invoiceId: id };
    return this.detailsService.getDetails(filters, input);
  }
}

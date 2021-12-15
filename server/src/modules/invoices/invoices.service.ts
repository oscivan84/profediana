import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CampusesService } from '../campuses/campuses.service';
import { StudentsService } from '../students/students.service';
import { UsersService } from '../users/users.service';
import { SearchReceiverDto } from './domain/invoice.dto';
import { InvoiceEntity } from './domain/invoice.entity';
import { InvoiceRepository } from './domain/invoice.repository';
import * as currency from 'currency-formatter';

@Injectable()
export class InvoicesService {
  constructor(
    private usersService: UsersService,
    private studentsService: StudentsService,
    private campusesService: CampusesService,
    private invoiceRepository: InvoiceRepository) {}

  public async createInvoice(payload: InvoiceEntity) {
    try {
      const newInvoice = this.invoiceRepository.create(payload);
      return await this.invoiceRepository.save(newInvoice);
    } catch (error) {
      throw new InternalServerErrorException("No se pudo guardar los datos");
    }
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
}

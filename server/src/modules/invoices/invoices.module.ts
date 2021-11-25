import { Module } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoicesController } from './invoices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceRepository } from './invoice.repository';
import { StudentsModule } from '../students/students.module';
import { UsersModule } from '../users/users.module';
import { CampusesModule } from '../campuses/campuses.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([InvoiceRepository]),
    StudentsModule,
    UsersModule,
    CampusesModule,
  ],
  providers: [InvoicesService],
  controllers: [InvoicesController],
  exports: [InvoicesService],
})
export class InvoicesModule {}

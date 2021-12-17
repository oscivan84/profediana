import { Module } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoicesController } from './invoices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceRepository } from './domain/invoice.repository';
import { StudentsModule } from '../students/students.module';
import { UsersModule } from '../users/users.module';
import { CampusesModule } from '../campuses/campuses.module';
import { DetailsModule } from '../details/details.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([InvoiceRepository]),
    StudentsModule,
    UsersModule,
    CampusesModule,
    DetailsModule,
  ],
  providers: [InvoicesService],
  controllers: [InvoicesController],
  exports: [InvoicesService],
})
export class InvoicesModule {}

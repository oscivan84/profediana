import { Module } from '@nestjs/common';
import { StudentsModule } from './modules/students/students.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { CareersModule } from './modules/careers/careers.module';
import { ProductsModule } from './modules/products/products.module';
import { InvoicesModule } from './modules/invoices/invoices.module';
import { DetailsModule } from './modules/details/details.module';
import { PaymentsModule } from './modules/payments/payments.module';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return {
          type: "mysql",
          host: process.env.MYSQL_HOST,
          port: parseInt(process.env.MYSQL_PORT),
          username: process.env.MYSQL_USER,
          password: process.env.MYSQL_PASSWORD,
          database: process.env.MYSQL_DBNAME,
          entities: [path.resolve(__dirname, './modules/**/*.entity{.ts,.js}')],
        } as TypeOrmModuleOptions
      }
    }),
    StudentsModule,
    UsersModule,
    AuthModule,
    CareersModule,
    ProductsModule,
    InvoicesModule,
    DetailsModule,
    PaymentsModule
  ],
})
export class AppModule {}

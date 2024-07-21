import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaSelectService } from './prisma-select.service';

@Module({
  controllers: [],
  providers: [PrismaService, PrismaSelectService],
  exports: [PrismaService, PrismaSelectService],
})
export class DbClientModule {
}

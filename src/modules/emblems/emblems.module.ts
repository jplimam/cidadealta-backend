import { Module } from '@nestjs/common';
import { EmblemsService } from './emblems.service';
import { EmblemsController } from './emblems.controller';
import { PrismaService } from '../../database/PrismaService';

@Module({
  controllers: [EmblemsController],
  providers: [EmblemsService, PrismaService],
})
export class EmblemsModule {}

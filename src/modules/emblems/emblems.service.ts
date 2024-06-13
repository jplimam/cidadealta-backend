import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class EmblemsService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return this.prisma.emblemas.findMany();
  }
}

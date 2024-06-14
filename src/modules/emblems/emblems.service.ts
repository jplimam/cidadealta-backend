import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class EmblemsService {
  constructor(private prisma: PrismaService) {}
  async findAll(page: number = 1, perPage: number = 2, name?: string) {
    const where: Prisma.EmblemsWhereInput = name
      ? { name: { contains: name } }
      : {};

    return this.prisma.emblems.findMany({
      where,
      select: {
        id: true,
        slug: true,
        name: true,
        image: true,
      },
      take: Number(perPage),
      skip: (Number(page) - 1) * perPage,
    });
  }
}

import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { RedeemEmblemDTO } from '../emblems/dto/redeem-emblem.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findByEmailaAndPassword(
    email: string,
    password: string,
  ): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password } = createUserDto;
    const user = await this.prisma.user.create({
      data: {
        email,
        password,
      },
      include: { emblems: true },
    });
    return user;
  }

  async redeemEmblem(redeemEmblemDTO: RedeemEmblemDTO): Promise<User> {
    const { userID, emblemSlug } = redeemEmblemDTO;

    const user = await this.prisma.user.findUnique({
      where: { id: userID },
      include: { emblems: true },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const emblem = await this.prisma.emblems.findUnique({
      where: { slug: emblemSlug },
    });

    if (!emblem) {
      throw new NotFoundException('Emblem not found');
    }

    const alreadyRedeemed = user.emblems.some((e) => e.id === emblem.id);
    if (alreadyRedeemed) {
      throw new BadRequestException('Emblem already redeemed by the user');
    }

    const updatedUser = await this.prisma.user.update({
      where: { id: userID },
      data: {
        emblems: {
          connect: { id: emblem.id },
        },
      },
      include: { emblems: true },
    });
    return updatedUser;
  }

  async getUserEmblems(userID: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: Number(userID) },
      include: { emblems: true },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user.emblems;
  }

  async findAllUsers() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }
}

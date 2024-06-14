import { Module } from '@nestjs/common';
import { EmblemsModule } from './modules/emblems/emblems.module';
import { UserModule } from './modules/user/user.module';
import { PrismaService } from './database/PrismaService';
import { PrismaModule } from './modules/prisma.module';

@Module({
  imports: [EmblemsModule, UserModule, PrismaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

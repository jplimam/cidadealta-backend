import { Module } from '@nestjs/common';
import { EmblemsModule } from './modules/emblems/emblems.module';

@Module({
  imports: [EmblemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

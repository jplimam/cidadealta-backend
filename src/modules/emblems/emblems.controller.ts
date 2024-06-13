import { Controller, Get } from '@nestjs/common';
import { EmblemsService } from './emblems.service';

@Controller('emblems')
export class EmblemsController {
  constructor(private readonly emblemsService: EmblemsService) {}

  @Get()
  async findAll() {
    return this.emblemsService.findAll();
  }
}

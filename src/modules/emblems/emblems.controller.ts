import { Controller, Get, Query } from '@nestjs/common';
import { EmblemsService } from './emblems.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Emblems')
@Controller('emblems')
export class EmblemsController {
  constructor(private readonly emblemsService: EmblemsService) {}

  @Get()
  @ApiOperation({ summary: 'List all emblems by page' })
  @ApiResponse({
    status: 200,
    description: 'List of all Emblems by page using query params',
  })
  @ApiResponse({ status: 403, description: 'Unauthorized' })
  async findAll(
    @Query('page') page: number = 1,
    @Query('perPage') perPage: number = 2,
    @Query('name') name?: string,
  ) {
    return this.emblemsService.findAll(page, perPage, name);
  }
}

import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { RedeemEmblemDTO } from '../emblems/dto/redeem-emblem.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'List all users' })
  @ApiResponse({
    status: 200,
    description: 'List of Users',
  })
  @ApiResponse({ status: 403, description: 'Unauthorized' })
  async findAll() {
    return this.userService.findAllUsers();
  }

  @Post()
  @ApiOperation({ summary: 'Create users' })
  @ApiResponse({
    status: 200,
    description: 'Create a user',
  })
  @ApiResponse({ status: 403, description: 'Unauthorized' })
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('redeem-emblem')
  @ApiOperation({ summary: 'Redeem Emblem' })
  @ApiResponse({
    status: 200,
    description: 'Redeem a Emblem',
  })
  @ApiResponse({ status: 403, description: 'Unauthorized' })
  async redeemEmblem(@Body() redeemEmblemDTO: RedeemEmblemDTO) {
    return this.userService.redeemEmblem(redeemEmblemDTO);
  }

  @Get(':userID/emblems')
  @ApiOperation({ summary: 'List all emblems of an user' })
  @ApiResponse({
    status: 200,
    description: 'List of Emblems of an User',
  })
  @ApiResponse({ status: 403, description: 'Unauthorized' })
  async getUserEmblems(@Param('userID') userID: number) {
    return this.userService.getUserEmblems(userID);
  }
}

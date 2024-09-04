import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UserService } from './user.services';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.userService.findById(id);
  }

  @Post()
  async create(@Body() user) {
    return await this.userService.create(user);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() user) {
    return await this.userService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Body() user) {
    return await this.userService.delete(id, user);
  }
}

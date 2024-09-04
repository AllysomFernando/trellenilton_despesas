import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ReceitasServices } from './receitas.services';

export class ReceitasController {
  constructor(private readonly receitasService: ReceitasServices) {}

  @Get()
  async findAll() {
    return await this.receitasService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.receitasService.findById(id);
  }

  @Post()
  async create(@Body() receita) {
    return await this.receitasService.create(receita);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() receita) {
    return await this.receitasService.update(id, receita);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.receitasService.delete(id);
  }
}

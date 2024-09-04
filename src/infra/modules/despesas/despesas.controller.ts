import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { DespesasService } from './despesas.services';
@Controller('despesas')
export class DespesasController {
  constructor(private readonly despesasService: DespesasService) {}

  @Get()
  async findAll() {
    return await this.despesasService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.despesasService.findById(id);
  }

  @Post()
  async create(@Body() despesa) {
    return await this.despesasService.create(despesa);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() despesa) {
    return await this.despesasService.update(id, despesa);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.despesasService.delete(id);
  }
}

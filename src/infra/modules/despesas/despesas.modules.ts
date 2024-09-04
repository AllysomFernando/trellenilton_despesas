import { Module } from '@nestjs/common';
import { DespesasController } from './despesas.controller';
import { DespesasService } from './despesas.services';
import { DespesasRepository } from '@/infra/repositories/despesas-repository';

@Module({
  imports: [],
  controllers: [DespesasController],
  providers: [DespesasService, DespesasRepository],
})
export class DespesasModule {}

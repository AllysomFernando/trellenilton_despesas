import { Module } from '@nestjs/common';
import { ReceitasController } from './receitas.controller';
import { ReceitasServices } from './receitas.services';
import { ReceitasRepository } from '@/infra/repositories/receitas-repository';

@Module({
  imports: [],
  controllers: [ReceitasController],
  providers: [ReceitasServices, ReceitasRepository],
})
export class ReceitasModules {}

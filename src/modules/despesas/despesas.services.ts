import { DespesasRepository } from '@/infra/repositories/despesas-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DespesasService {
  constructor(private readonly db: DespesasRepository) {}

  async findAll() {
    return await this.db.getDespesas();
  }

  async findById(id: string) {
    return await this.db.getDespesaById(id);
  }

  async create(despesa) {
    return await this.db.createDespesa(despesa);
  }

  async update(id, despesa) {
    return await this.db.updateDespesa(id, despesa);
  }

  async delete(id) {
    return await this.db.deleteDespesa(id);
  }
}

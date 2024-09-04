import { ReceitasRepository } from '@/infra/repositories/receitas-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReceitasServices {
  constructor(private readonly db: ReceitasRepository) {}

  async findAll() {
    return await this.db.getReceitas();
  }

  async findById(id: string) {
    return await this.db.getReceitaById(id);
  }

  async create(receita) {
    return await this.db.createReceita(receita);
  }

  async update(id, receita) {
    return await this.db.updateReceita(id, receita);
  }

  async delete(id) {
    return await this.db.deleteReceita(id);
  }
}

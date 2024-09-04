import { IReceitasRepository } from '@/domain/contracts/receita-repository';
import { IReceitasDatabaseProvider } from '../contracts/receita-database-provider';
import { Receita } from '@/domain/entities/receita';

export class ReceitasRepository implements IReceitasRepository {
  constructor(private readonly db: IReceitasDatabaseProvider) {}

  public async getReceitas(): Promise<Receita[]> {
    const data = await this.db.getReceitas();
    return data.map((receita) => {
      return {
        id: receita.id,
        name: receita.name,
        description: receita.description,
        value: receita.value,
        date: receita.date,
        deleted: receita.deleted,
      };
    });
  }
  public async getReceitaById(id: string): Promise<Receita> {
    const receita = await this.db.getReceitaById(id);
    return {
      id: receita.id,
      name: receita.name,
      description: receita.description,
      value: receita.value,
      date: receita.date,
      deleted: receita.deleted,
    };
  }
  public async createReceita(receita: Receita): Promise<Receita> {
    const data = await this.db.createReceita(receita);
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      value: data.value,
      date: data.date,
      deleted: data.deleted,
    };
  }
  public async updateReceita(id: string, receita: Receita): Promise<Receita> {
    const data = await this.db.updateReceita(id, receita);
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      value: data.value,
      date: data.date,
      deleted: data.deleted,
    };
  }
  public async deleteReceita(id: string): Promise<void> {
    const data = await this.db.deleteReceita(id);
    return data;
  }
}

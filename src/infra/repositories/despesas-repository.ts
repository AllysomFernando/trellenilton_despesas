import { IDespesasRepository } from '@/domain/contracts/despesa-repository';
import { IDespesasDatabaseProvider } from '../contracts/despesas-database-provider';
import { Despesa } from '@/domain/entities/despesa';

export class DespesasRepository implements IDespesasRepository {
  constructor(private readonly db: IDespesasDatabaseProvider) {}

  public async getDespesas(): Promise<Despesa[]> {
    const data = await this.db.getDespesas();
    return data.map((despesa) => {
      return {
        id: despesa.id,
        name: despesa.name,
        description: despesa.description,
        value: despesa.value,
        date: despesa.date,
        deleted: despesa.deleted,
      };
    });
  }
  public async getDespesaById(id: string): Promise<Despesa> {
    const despesa = await this.db.getDespesaById(id);
    return {
      id: despesa.id,
      name: despesa.name,
      description: despesa.description,
      value: despesa.value,
      date: despesa.date,
      deleted: despesa.deleted,
    };
  }
  public async createDespesa(despesa: Despesa): Promise<Despesa> {
    const data = await this.db.createDespesa(despesa);
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      value: data.value,
      date: data.date,
      deleted: data.deleted,
    };
  }
  public async updateDespesa(id: string, despesa: Despesa): Promise<Despesa> {
    const data = await this.db.updateDespesa(id, despesa);
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      value: data.value,
      date: data.date,
      deleted: data.deleted,
    };
  }
  public async deleteDespesa(id: string): Promise<void> {
    const data = await this.db.deleteDespesa(id);
    return data;
  }
}

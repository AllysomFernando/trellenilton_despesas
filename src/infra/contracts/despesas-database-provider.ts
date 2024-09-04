import { Despesa } from '@/domain/entities/despesa';

export interface IDespesasDatabaseProvider {
  getDespesas(): Promise<Despesa[]>;
  getDespesaById(id: string): Promise<Despesa>;
  createDespesa(despesa: Despesa): Promise<Despesa>;
  updateDespesa(id: string, despesa: Despesa): Promise<Despesa>;
  deleteDespesa(id: string): Promise<void>;
}

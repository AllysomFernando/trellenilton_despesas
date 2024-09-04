import { Despesa } from '@/domain/entities/despesa';

export interface IDespesasRepository {
  getDespesas(): Promise<Despesa[]>;
  getDespesaById(id: string): Promise<Despesa>;
  createDespesa(despesa: Despesa): Promise<Despesa>;
  updateDespesa(id: string, despesa: Despesa): Promise<Despesa>;
  deleteDespesa(id: string): Promise<void>;
}

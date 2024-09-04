import { Receita } from '@/domain/entities/receitas';

export interface IReceitasRepository {
  getReceitas(): Promise<Receita[]>;
  getReceitaById(id: string): Promise<Receita>;
  createReceita(receita: Receita): Promise<Receita>;
  updateReceita(id: string, receita: Receita): Promise<Receita>;
  deleteReceita(id: string): Promise<Receita>;
}

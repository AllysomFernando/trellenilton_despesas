import { Receita } from "@/domain/entities/receitas";

export interface IReceitasDatabaseProvider {
	getReceitas(): Promise<Receitas[]>;
	getReceitaById(id: string): Promise<Receitas>;
	createReceita(receita: Receitas): Promise<Receitas>;
	updateReceita(id: string, receita: Receitas): Promise<Receitas>;
	deleteReceita(id: string): Promise<void>;
}

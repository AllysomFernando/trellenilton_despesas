import { Despesas } from "@/domain/entities/despesa";

export interface IDespesasDatabaseProvider {
	getDespesas(): Promise<Despesas[]>;
	getDespesaById(id: string): Promise<Despesas>;
	createDespesa(despesa: Despesas): Promise<Despesas>;
	updateDespesa(id: string, despesa: Despesas): Promise<Despesas>;
	deleteDespesa(id: string): Promise<void>;
}

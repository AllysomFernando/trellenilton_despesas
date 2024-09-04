import { Despesas } from "@/domain/entities/despesas";
import { IDespesasRepository } from "@/domain/contracts/despesas-repository";

type Input = {
	name: string;
	description: string;
	value: number;
	date: Date;
};

type OutPut = Despesas;
type CreateDespesas = (input: Input) => Promise<OutPut>;
type SetupCreateDespesas = {
	repository: IDespesasRepository;
};
type Setup = (props: SetupCreateDespesas) => CreateDespesas;

export const setupCreateDespesas: Setup =
	({ repository }) =>
	async ({ description, value, date, name }: Input) => {
		if (!description) throw new Error("Descrição é obrigatória");
		if (!value) throw new Error("value é obrigatório");
		if (!name) throw new Error("Nome é obrigatório");
		try {
			return await repository.createDespesa({
				name,
				description,
				value,
				date,
				deleted: false,
			});
		} catch (error) {
			throw new Error("Could not create despesa: " + error, {
				cause: "create-despesas",
			});
		}
	};

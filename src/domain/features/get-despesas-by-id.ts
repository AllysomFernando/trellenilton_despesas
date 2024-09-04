import { Despesas } from "@/domain/entities/despesa";
import { IDespesasRepository } from "@/domain/contracts/despesas-repository";

type Input = {
	id: string;
};
type Output = Despesas;
type GetDespesas = (input: Input) => Promise<Output>;
type SetupGetDespesas = {
	repository: IDespesasRepository;
};
type Setup = (props: SetupGetDespesas) => GetDespesas;

export const setupGetDespesas: Setup =
	({ repository }) =>
	async ({ id }) => {
		try {
			const despesas = await repository.getDespesaById(id);
			if (!despesas) throw new Error("Nenhuma despesa encontrada");
			return despesas;
		} catch (error) {
			throw new Error("Could not get despesas: " + error, {
				cause: "get-despesas",
			});
		}
	};

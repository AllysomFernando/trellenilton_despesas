import { Despesas } from "@/domain/entities/despesas";
import { IDespesasRepository } from "@/domain/contracts/despesas-repository";

type Input = {};
type Output = Despesas[];
type GetDespesas = (input: Input) => Promise<Output>;
type SetupGetDespesas= {
	repository: IDespesasRepository;
};
type Setup = (props: SetupGetDespesas) => GetDespesas;

export const setupGetDespesas: Setup =
	({ repository }) =>
	async () => {
		try {
			const despesas = await repository.getDespesas();
			if (!despesas.length) throw new Error("Nenhuma despesa encontrada");
			return despesas;
		} catch (error) {
			throw new Error("Could not get despesas: " + error, {
				cause: "get-despesas",
			});
		}
	};

import { IReceitasRepository } from "@/domain/contracts/receitas-repository";
import { Receitas } from "@/domain/entities/receitas";

type Input = {
	id: string;
};
type Output = Receitas;
type GetReceitas = (input: Input) => Promise<Output>;
type SetupGetReceitas = {
	repository: IReceitasRepository;
};
type Setup = (props: SetupGetReceitas) => GetReceitas;

export const setupGetReceitas: Setup =
	({ repository }) =>
	async ({ id }) => {
		try {
			const receitas = await repository.getReceitaById(id);
			if (!receitas) throw new Error("Nenhuma receita encontrada");
			return receitas;
		} catch (error) {
			throw new Error("Could not get receitas: " + error, {
				cause: "get-receitas",
			});
		}
	};

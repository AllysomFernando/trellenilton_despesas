import { IDespesasRepository } from "@/domain/contracts/despesas-repository";
import { Despesas } from "@/domain/entities/despesa";

type Input = {
	id: string;
	despesas: Pick<Despesas, "deleted">;
};
type Output = {
	message: string;
	statusCode: number;
};
type DeleteDespesas = (input: Input) => Promise<Output>;
type SetupDeleteDespesas = {
	repository: IDespesasRepository;
};
type Setup = (props: SetupDeleteDespesas) => DeleteDespesas;

export const setupDeleteDespesas: Setup =
	({ repository }) =>
	async ({ despesas, id }) => {
		try {
			if (!id) throw new Error("Id não informado");
			if (despesas.deleted) {
				throw new Error("Despesa já deletada");
			}
			await repository.deleteDespesa(id);
			return {
				message: "Despesa deletada com sucesso",
				statusCode: 200,
			};
		} catch (error) {
			throw new Error("Could not delete despesa: " + error, {
				cause: "delete-despesa",
			});
		}
	};

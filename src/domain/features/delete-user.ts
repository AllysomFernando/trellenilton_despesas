import { User } from "@/domain/entities/user";
import { IUserRepository } from "../contracts/user-repository";

type Input = {
	id: string;
	user: Pick<User, "deleted">;
};

type OutPut = {
	message: string;
	statusCode: number;
};
type DeleteUser = (input: Input) => Promise<OutPut>;
type SetupDeleteUser = {
	repository: IUserRepository;
};
type Setup = (props: SetupDeleteUser) => DeleteUser;

export const setupDeleteUser: Setup =
	({ repository }) =>
	async ({ user, id }) => {
		try {
			if (!id) throw new Error("Id não informado");
			if (user.deleted) {
				throw new Error("Usuário já deletado");
			}
			await repository.deleteUser(id);
			return {
				message: "Usuário deletado com sucesso",
				statusCode: 200,
			};
		} catch (error) {
			throw new Error("Could not delete user: " + error, {
				cause: "delete-user",
			});
		}
	};

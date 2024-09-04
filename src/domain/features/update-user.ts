import { User } from "@/domain/entities/user";
import { IUserRepository } from "@/domain/contracts/user-repository";

type Input = {
	id: string;
	name: string;
	email: string;
	password: string;
	deleted: boolean;
};
type OutPut = User;
type UpdateUser = (input: Input) => Promise<OutPut>;
type SetupUpdateUser = {
	repository: IUserRepository;
};
type Setup = (props: SetupUpdateUser) => UpdateUser;

export const setupUpdateUser: Setup =
	({ repository }) =>
	async ({ id, name, email, password, deleted }: Input) => {
		const user = await repository.getUserById(id);
		if (!user)
			throw new Error(`User with the id ${id} not found`, {
				cause: "user-not-found",
			});
		if (!name) throw new Error("Nome é obrigatório");
		try {
			return await repository.updateUser(id, {
				name,
				email,
				password,
				deleted,
			});
		} catch (error) {
			throw new Error("Could not update user: " + error, {
				cause: "update-user",
			});
		}
	};

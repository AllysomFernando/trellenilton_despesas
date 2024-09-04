import { User } from "@/domain/entities/user";
import { IUserRepository } from "@/domain/contracts/user-repository";
import { t } from "elysia";

type Input = {
	name: string;
	email: string;
	password: string;
};

type OutPut = User;
type CreateUser = (input: Input) => Promise<OutPut>;
type SetupCreateUser = {
	repository: IUserRepository;
};
type Setup = (props: SetupCreateUser) => CreateUser;

export const setupCreateUser: Setup =
	({ repository }) =>
	async ({ email, password, name }: Input) => {
		if (!email) throw new Error("Email é obrigatório");
		if (!password) throw new Error("Senha é obrigatória");
		if (!name) throw new Error("Nome é obrigatório");
		try {
			return await repository.createUser({
				name,
				email,
				password,
				deleted: false,
			});
		} catch (error) {
			throw new Error("Could not create user: " + error, {
				cause: "create-user",
			});
		}
	};

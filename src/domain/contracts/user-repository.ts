import { User } from "../entities/user";

export interface IUserRepository {
	getUsers(): Promise<User[]>;
	getUserById(id: string): Promise<User>;
	createUser(user: User): Promise<User>;
	updateUser(id: string, user: User): Promise<User>;
	deleteUser(id: string): Promise<User>;
}

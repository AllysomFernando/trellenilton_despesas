import { User } from '@/domain/entities/user';

export interface IUserDatabaseProvider {
  getUsers(): Promise<User[]>;
  getUserById(id: string): Promise<User>;
  createUser(user: User): Promise<User>;
  updateUser(id: string, user: User): Promise<User>;
  deleteUser(id: string): Promise<User>;
}

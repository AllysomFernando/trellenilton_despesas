import { IUserRepository } from '@/domain/contracts/user-repository';
import { IUserDatabaseProvider } from '../contracts/user-database-provider';
import { User } from '@/domain/entities/user';

export class UserRepository implements IUserRepository {
  constructor(private readonly db: IUserDatabaseProvider) {}

  public async getUsers(): Promise<User[]> {
    const data = await this.db.getUsers();
    return data.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        deleted: user.deleted,
      };
    });
  }
  public async getUserById(id: string): Promise<User> {
    const user = await this.db.getUserById(id);
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      deleted: user.deleted,
    };
  }
  public async createUser(user: User): Promise<User> {
    const data = await this.db.createUser(user);
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      deleted: data.deleted,
    };
  }
  public async updateUser(id: string, user: User): Promise<User> {
    const data = await this.db.updateUser(id, user);
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      deleted: data.deleted,
    };
  }
  public async deleteUser(id: string): Promise<User> {
    const data = await this.db.deleteUser(id);
    return data;
  }
}

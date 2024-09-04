import { User } from '@/domain/entities/user';
import { IUserRepository } from '@/domain/contracts/user-repository';

type Input = { '' };
type Output = User[];
type GetUser = (input: Input) => Promise<Output>;
type SetupGetUsers = {
  repository: IUserRepository;
};
type Setup = (props: SetupGetUsers) => GetUser;

export const setupGetUsers: Setup =
  ({ repository }) =>
  async () => {
    try {
      const users = await repository.getUsers();
      if (!users.length) throw new Error('Nenhum usuário encontrado');
      return users;
    } catch (error) {
      throw new Error('Could not get users: ' + error);
    }
  };

import { User } from '@/domain/entities/user';
import { IUserRepository } from '@/domain/contracts/user-repository';

type Input = {
  id: string;
};
type Output = User;
type GetUserById = (input: Input) => Promise<Output>;
type SetupGetUserById = {
  repository: IUserRepository;
};
type Setup = (props: SetupGetUserById) => GetUserById;

export const setupGetUserById: Setup =
  ({ repository }) =>
  async ({ id }) => {
    try {
      const user = await repository.getUserById(id);
      if (!user) throw new Error('Nenhum usuário encontrado');
      return user;
    } catch (error) {
      throw new Error('Could not get user: ' + error);
    }
  };

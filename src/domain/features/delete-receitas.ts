import { IReceitasRepository } from '@/domain/contracts/receita-repository';
import { Receita } from '@/domain/entities/receita';

type Input = {
  id: string;
  receitas: Pick<Receita, 'deleted'>;
};
type Output = {
  message: string;
  statusCode: number;
};
type DeleteReceitas = (input: Input) => Promise<Output>;
type SetupDeleteReceitas = {
  repository: IReceitasRepository;
};
type Setup = (props: SetupDeleteReceitas) => DeleteReceitas;

export const setupDeleteReceitas: Setup =
  ({ repository }) =>
  async ({ receitas, id }) => {
    try {
      if (!id) throw new Error('Id não informado');
      if (receitas.deleted) {
        throw new Error('Receita já deletada');
      }
      await repository.deleteReceita(id);
      return {
        message: 'Receita deletada com sucesso',
        statusCode: 200,
      };
    } catch (error) {
      throw new Error(`Could not delete receita: ${error}`);
    }
  };

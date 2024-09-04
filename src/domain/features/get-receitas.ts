import { IReceitasRepository } from '@/domain/contracts/receita-repository';
import { Receita } from '@/domain/entities/receita';

type Input = { '' };
type Output = Receita[];
type GetReceitas = (input: Input) => Promise<Output>;
type SetupGetReceitas = {
  repository: IReceitasRepository;
};
type Setup = (props: SetupGetReceitas) => GetReceitas;

export const setGetReceitas: Setup =
  ({ repository }) =>
  async () => {
    try {
      const receitas = await repository.getReceitas();
      if (!receitas.length) throw new Error('Nenhuma receita encontrada');
      return receitas;
    } catch (error) {
      throw new Error(`Could not get receitas: ${error}`);
    }
  };

import { Despesa } from '@/domain/entities/despesa';
import { IDespesasRepository } from '@/domain/contracts/despesa-repository';

type Input = {
  id: string;
};
type Output = Despesa;
type GetDespesa = (input: Input) => Promise<Output>;
type SetupGetDespesa = {
  repository: IDespesasRepository;
};
type Setup = (props: SetupGetDespesa) => GetDespesa;

export const setupGetDespesas: Setup =
  ({ repository }) =>
  async ({ id }) => {
    try {
      const despesa = await repository.getDespesaById(id);
      if (!despesa) throw new Error('Nenhuma despesa encontrada');
      return despesa;
    } catch (error) {
      throw new Error('Could not get despesas: ' + error);
    }
  };

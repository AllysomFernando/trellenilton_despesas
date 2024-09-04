import { Despesa } from '@/domain/entities/despesa';
import { IDespesasRepository } from '@/domain/contracts/despesa-repository';

type Input = { '' };
type Output = Despesa[];
type GetDespesa = (input: Input) => Promise<Output>;
type SetupGetDespesas = {
  repository: IDespesasRepository;
};
type Setup = (props: SetupGetDespesas) => GetDespesa;

export const setupGetDespesas: Setup =
  ({ repository }) =>
  async () => {
    try {
      const despesa = await repository.getDespesas();
      if (!despesa.length) throw new Error('Nenhuma despesa encontrada');
      return despesa;
    } catch (error) {
      throw new Error('Could not get despesas: ' + error);
    }
  };

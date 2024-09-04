import { IDespesasRepository } from '@/domain/contracts/despesa-repository';
import { Despesa } from '@/domain/entities/despesa';

type Input = {
  id: string;
  despesa: Pick<Despesa, 'deleted'>;
};
type Output = {
  message: string;
  statusCode: number;
};
type DeleteDespesa = (input: Input) => Promise<Output>;
type SetupDeleteDespesa = {
  repository: IDespesasRepository;
};
type Setup = (props: SetupDeleteDespesa) => DeleteDespesa;

export const setupDeleteDespesas: Setup =
  ({ repository }) =>
  async ({ despesa, id }) => {
    try {
      if (!id) throw new Error('Id não informado');
      if (despesa.deleted) {
        throw new Error('Despesa já deletada');
      }
      await repository.deleteDespesa(id);
      return {
        message: 'Despesa deletada com sucesso',
        statusCode: 200,
      };
    } catch (error) {
      throw new Error('Could not delete despesa: ' + error);
    }
  };

import { Despesa } from '@/domain/entities/despesa';
import { IDespesasRepository } from '@/domain/contracts/despesa-repository';

type Input = {
  id: string;
  name: string;
  description: string;
  value: number;
  date: Date;
};
type OutPut = Despesa;
type UpdateDespesa = (input: Input) => Promise<OutPut>;
type SetupUpdateBoard = {
  repository: IDespesasRepository;
};
type Setup = (props: SetupUpdateBoard) => UpdateDespesa;

export const setupUpdateDespesas: Setup =
  ({ repository }) =>
  async ({ id, description, value, date, name }: Input) => {
    const despesa = await repository.getDespesaById(id);
    if (!despesa)
      throw new Error(`Despesa with the id ${id} not found`);
    if (!description) throw new Error('Descrição é obrigatória');
    if (!value) throw new Error('value é obrigatório');
    if (!name) throw new Error('Nome é obrigatório');
    try {
      return await repository.updateDespesa(id, {
        name,
        description,
        value,
        date,
        deleted: false,
      });
    } catch (error) {
      throw new Error('Could not update despesa: ' + error);
    }
  };

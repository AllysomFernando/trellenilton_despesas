import { Receita } from '@/domain/entities/receita';
import { IReceitasRepository } from '@/domain/contracts/receita-repository';

type Input = {
  id: string;
  name: string;
  description: string;
  value: number;
  date: Date;
};

type OutPut = Receita;
type UpdateReceitas = (input: Input) => Promise<OutPut>;
type SetupUpdateReceitas = {
  repository: IReceitasRepository;
};
type Setup = (props: SetupUpdateReceitas) => UpdateReceitas;

export const setupUpdateReceitas: Setup =
  ({ repository }) =>
  async ({ id, description, value, date, name }: Input) => {
    const receita = await repository.getReceitaById(id);
    if (!receita)
      throw new Error(`Receitas with the id ${id} not found`, {
        cause: 'receitas-not-found',
      });
    if (!description) throw new Error('Descrição é obrigatória');
    if (!value) throw new Error('value é obrigatório');
    if (!name) throw new Error('Nome é obrigatório');
    try {
      return await repository.updateReceita(id, {
        name,
        description,
        value,
        date,
        deleted: false,
      });
    } catch (error) {
      throw new Error('Could not update receita: ' + error, {
        cause: 'update-receitas',
      });
    }
  };

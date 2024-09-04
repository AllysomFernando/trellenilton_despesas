import { Receita } from '@/domain/entities/receita';
import { IReceitasRepository } from '@/domain/contracts/receita-repository';

type Input = {
  name: string;
  description: string;
  value: number;
  date: Date;
};

type OutPut = Receita;
type CreateReceitas = (input: Input) => Promise<OutPut>;
type SetupCreateReceitas = {
  repository: IReceitasRepository;
};
type Setup = (props: SetupCreateReceitas) => CreateReceitas;

export const SetupCreateReceitas: Setup =
  ({ repository }) =>
  async ({ description, value, date, name }: Input) => {
    if (!description) throw new Error('Descrição é obrigatória');
    if (!value) throw new Error('value é obrigatório');
    if (!name) throw new Error('Nome é obrigatório');
    try {
      return await repository.createReceita({
        name,
        description,
        value,
        date,
        deleted: false,
      });
    } catch (error) {
      throw new Error(`Could not create receita: ${error}`);
    }
  };

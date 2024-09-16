import { ICategoria } from './ITipos';

export interface IDespesa {
  id: string;
  name: string;
  descricao: string;
  valor: number;
  data: string;
  categoria: ICategoria;
  usuario_id?: number;
  created_at?: string;
  updated_at?: string;
}

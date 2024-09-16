export interface IReceita {
  id: string;
  name: string;
  descricao: string;
  valor: number;
  data: string;
  categoria: string;
  tipo: string;
  usuario_id?: number;
  created_at?: string;
  updated_at?: string;
}

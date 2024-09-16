import { ReactNode } from 'react';
import { IDespesa } from './models/IDespesas';
import { IReceita } from './models/IReceita';
import { User } from './models/User';

export interface IAuthProviderProps {
  children: ReactNode;
}

export interface IAuthContext {
  despesas: IDespesa[];
  receitas: IReceita[];
  user: User;
  setUserContext: (user: User) => void;
  setReceitasContext: (receitas: IReceita[]) => void;
  setDespesasContext: (despesas: IDespesa[]) => void;
  deleteDespesaFromLocal: (id: string) => void;
  deleteReceitaFromLocal: (id: string) => void;
}

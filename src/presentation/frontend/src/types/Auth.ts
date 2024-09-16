import { ReactNode } from 'react';
import { IDespesa } from './models/IDespesas';
import { IReceita } from './models/IReceita';

export interface IAuthProviderProps {
  children: ReactNode;
}

export interface IAuthContext {
  despesas: IDespesa[];
  receitas: IReceita[];
}

import React from 'react';
import { createContext, useEffect, useState } from 'react';
import { IAuthContext, IAuthProviderProps } from '../types/Auth';
import { IDespesa } from '../types/models/IDespesas';
import { IReceita } from '../types/models/IReceita';
import { User } from '../types/models/User';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [despesas, setDespesas] = useState<IDespesa[]>([]);
  const [receitas, setReceitas] = useState<IReceita[]>([]);
  const navigate = useNavigate();

  async function setUserContext(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    navigate('/dashboard');
  }

  async function setDespesasContext(despesas: IDespesa[]) {
    localStorage.setItem('despesas', JSON.stringify(despesas));
    setDespesas(despesas);
  }

  async function setReceitasContext(receitas: IReceita[]) {
    localStorage.setItem('receitas', JSON.stringify(receitas));
    setReceitas(receitas);
  }

  return (
    <AuthContext.Provider
      value={{
        despesas,
        receitas,
        user,
        setUserContext,
        setDespesasContext,
        setReceitasContext,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

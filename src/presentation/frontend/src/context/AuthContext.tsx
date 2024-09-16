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

  async function getUserFromLocalStorage() {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }

  async function setUserContext(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    navigate('/dashboard');
  }

  async function setDespesasContext(despesas: IDespesa[]) {
    localStorage.setItem('despesas', JSON.stringify(despesas));
    setDespesas(despesas);
  }

  async function getDespesasFromLocalStorage() {
    const despesas = localStorage.getItem('despesas');
    if (despesas) {
      setDespesas(JSON.parse(despesas));
    }
  }

  async function deleteDespesaFromLocal(id: string) {
    const despesas = localStorage.getItem('despesas');
    if (despesas) {
      const despesasParsed: IDespesa[] = JSON.parse(despesas);
      const newDespesas = despesasParsed.filter((despesa) => despesa.id !== id);
      localStorage.setItem('despesas', JSON.stringify(newDespesas));
      setDespesas(newDespesas);
    }
  }

  async function setReceitasContext(receitas: IReceita[]) {
    localStorage.setItem('receitas', JSON.stringify(receitas));
    setReceitas(receitas);
  }

  async function getReceitasFromLocalStorage() {
    const receitas = localStorage.getItem('receitas');
    if (receitas) {
      setReceitas(JSON.parse(receitas));
    }
  }

  async function deleteReceitaFromLocal(id: string) {
    const receitas = localStorage.getItem('receitas');
    if (receitas) {
      const receitasParsed: IReceita[] = JSON.parse(receitas);
      const newReceitas = receitasParsed.filter((receita) => receita.id !== id);
      setReceitasContext(newReceitas);
    }
  }

  useEffect(() => {
    getUserFromLocalStorage();
    getDespesasFromLocalStorage();
    getReceitasFromLocalStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        despesas,
        receitas,
        user,
        setUserContext,
        setDespesasContext,
        setReceitasContext,
        deleteDespesaFromLocal,
        deleteReceitaFromLocal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

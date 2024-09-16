import { createContext, useEffect, useState } from 'react';
import { IAuthContext, IAuthProviderProps } from '../types/Auth';
import { IDespesa } from '../types/models/IDespesas';
import { IReceita } from '../types/models/IReceita';
import { User } from '../types/models/User';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [despesas, setDespesas] = useState<IDespesa[]>([]);
  const [receitas, setReceitas] = useState<IReceita[]>([]);

  async function setUserContext() {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }

  useEffect(() => {
    setUserContext();
  }, []);

  return (
    <AuthContext.Provider value={{ despesas, receitas, user }}>
      {children}
    </AuthContext.Provider>
  );
};

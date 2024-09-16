import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function DashboardTemplate() {
  const { despesas, receitas, user, } = useContext(AuthContext);
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Seja bem-vindo ao seu dashboard {user.name} </p>

      <h3>Despesas</h3>
      <ul>
        {despesas.map((despesa) => (
          <div>
            <li key={despesa.id}>{despesa.name}</li>
            <button>Excluir</button>
          </div>
        ))}
      </ul>

      <h3>Receitas</h3>
      <ul>
        {receitas.map((receita) => (
          <div>
            <li key={receita.id}>{receita.name}</li>
            <button>Excluir</button>
          </div>
        ))}
      </ul>
      <div>
        <h3>Adicionar Receita</h3>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="number" placeholder="Valor" />
          <button type="submit">Adicionar Receita</button>
        </form>
      </div>
      <div>
        <h3>Adicionar Despesa</h3>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="number" placeholder="Valor" />
          <button type="submit">Adicionar Despesa</button>
        </form>
      </div>
    </div>
  );
}

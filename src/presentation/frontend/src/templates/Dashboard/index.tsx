import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function DashboardTemplate() {
  const { despesas, receitas, user } = useContext(AuthContext);
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Seja bem-vindo ao seu dashboard {user.name} </p>

      <h3>Despesas</h3>
      <ul>
        {despesas.map((despesa) => (
          <li key={despesa.id}>{despesa.name}</li>
        ))}
      </ul>

      <h3>Receitas</h3>
      <ul>
        {receitas.map((receita) => (
          <li key={receita.id}>{receita.name}</li>
        ))}
      </ul>
    </div>
  );
}

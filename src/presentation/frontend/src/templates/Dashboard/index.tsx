import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { S } from './styles';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { IDespesa } from '../../types/models/IDespesas';
import { IReceita } from '../../types/models/IReceita';

export default function DashboardTemplate() {
  const { despesas, receitas, setDespesasContext, setReceitasContext, user } =
    useContext(AuthContext);
  const [despesa, setDespesa] = useState<IDespesa>({
    name: '',
    valor: 0,
    id: '',
    descricao: '',
    data: '',
    categoria: '',
    tipo: '',
  });
  const [receita, setReceita] = useState<IReceita>({
    name: '',
    valor: 0,
    id: '',
    descricao: '',
    data: '',
    categoria: '',
    tipo: '',
  });

  const data = despesas
    .map((despesa) => ({
      name: despesa.name,
      valor: despesa.valor,
      tipo: 'Despesa',
    }))
    .concat(
      receitas.map((receita) => ({
        name: receita.name,
        valor: receita.valor,
        tipo: 'Receita',
      })),
    );

  const handleCadastroDespesas = async (e: React.FormEvent) => {
    e.preventDefault();
    setDespesasContext([...despesas, despesa]);
  };

  const handleCadastroReceitas = async (e: React.FormEvent) => {
    e.preventDefault();
    setReceitasContext([...receitas, receita]);
  };

  return (
    <S.Container>
      <h2>Dashboard</h2>
      <p>Seja bem-vindo ao seu dashboard, {user.name}!</p>

      <S.ChartContainer>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="valor" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </S.ChartContainer>

      <S.ListSection>
        <h3>Despesas</h3>
        <ul>
          {despesas.map((despesa) => (
            <S.ListItem key={despesa.id}>
              <span>{despesa.name}</span>
              <button>Excluir</button>
            </S.ListItem>
          ))}
        </ul>
      </S.ListSection>

      <S.ListSection>
        <h3>Receitas</h3>
        <ul>
          {receitas.map((receita) => (
            <S.ListItem key={receita.id}>
              <span>{receita.name}</span>
              <button>Excluir</button>
            </S.ListItem>
          ))}
        </ul>
      </S.ListSection>

      <S.FormSection>
        <h3>Adicionar Receita</h3>
        <form onSubmit={handleCadastroReceitas}>
          <input
            type="text"
            placeholder="Nome"
            value={receita.name}
            onChange={(e) => setReceita({ ...receita, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Valor"
            value={receita.valor}
            onChange={(e) =>
              setReceita({ ...receita, valor: parseFloat(e.target.value) })
            }
          />
          <input
            type="text"
            placeholder="Categoria"
            value={receita.categoria}
            onChange={(e) =>
              setReceita({ ...receita, categoria: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Descrição"
            value={receita.descricao}
            onChange={(e) =>
              setReceita({ ...receita, descricao: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Data"
            value={receita.data}
            onChange={(e) => setReceita({ ...receita, data: e.target.value })}
          />
          <input
            type="text"
            placeholder="Tipo"
            value={receita.tipo}
            onChange={(e) => setReceita({ ...receita, tipo: e.target.value })}
          />

          <button type="submit">Adicionar Receita</button>
        </form>
      </S.FormSection>

      <S.FormSection>
        <h3>Adicionar Despesa</h3>
        <form onSubmit={handleCadastroDespesas}>
          <input
            type="text"
            placeholder="Nome"
            value={despesa.name}
            onChange={(e) => setDespesa({ ...despesa, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Valor"
            value={despesa.valor}
            onChange={(e) =>
              setDespesa({ ...despesa, valor: parseFloat(e.target.value) })
            }
          />
          <input
            type="text"
            placeholder="Categoria"
            value={receita.categoria}
            onChange={(e) =>
              setReceita({ ...receita, categoria: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Descrição"
            value={receita.descricao}
            onChange={(e) =>
              setReceita({ ...receita, descricao: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Data"
            value={receita.data}
            onChange={(e) => setReceita({ ...receita, data: e.target.value })}
          />
          <input
            type="text"
            placeholder="Tipo"
            value={receita.tipo}
            onChange={(e) => setReceita({ ...receita, tipo: e.target.value })}
          />
          <button type="submit">Adicionar Despesa</button>
        </form>
      </S.FormSection>
    </S.Container>
  );
}

import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { S } from './styles';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import { IDespesa } from '../../types/models/IDespesas';
import { IReceita } from '../../types/models/IReceita';

export default function DashboardTemplate() {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const {
    despesas,
    receitas,
    setDespesasContext,
    setReceitasContext,
    user,
    deleteDespesaFromLocal,
    deleteReceitaFromLocal,
  } = useContext(AuthContext);
  const [despesa, setDespesa] = useState<IDespesa>({
    name: '',
    valor: '' as unknown as number,
    id: '',
    descricao: '',
    data: '',
    categoria: { name: '' },
  });
  const [receita, setReceita] = useState<IReceita>({
    name: '',
    valor: '' as unknown as number,
    id: '',
    descricao: '',
    data: '',
    categoria: { name: '' },
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

  const deleteDespesa = (id: string) => {
    deleteDespesaFromLocal(id);
  };
  const deleteReceita = (id: string) => {
    deleteReceitaFromLocal(id);
  };
  return (
    <S.Container>
      <h2>Dashboard</h2>
      <p>Seja bem-vindo ao seu dashboard, {user.name}!</p>

      <S.PieChartsContainer>
        <h3>Tipos de Receitas</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={receitas}
              dataKey="valor"
              nameKey="categoria"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            >
              {receitas.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        <h3>Tipos de Despesas</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={despesas}
              dataKey="valor"
              nameKey="categoria"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#82ca9d"
            >
              {despesas.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        <h3>Receitas e Despesas</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="valor"
              nameKey="tipo"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#82ca9d"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </S.PieChartsContainer>

      <S.ListSection>
        <h3>Despesas</h3>
        <ul>
          {despesas.map((despesa) => (
            <S.ListItem key={despesa.id}>
              <span>{despesa.name}</span>
              <button
                onClick={() => {
                  deleteDespesa(despesa.id);
                }}
              >
                Excluir
              </button>
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
              <button
                onClick={() => {
                  deleteReceita(receita.id);
                }}
              >
                Excluir
              </button>
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
            onChange={(e) => setReceita({ ...receita, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Valor"
            onChange={(e) =>
              setReceita({ ...receita, valor: parseFloat(e.target.value) })
            }
          />
          <select
            onChange={(e) =>
              setReceita({ ...receita, categoria: { name: e.target.value } })
            }
          >
            <option value="">Selecione uma categoria</option>
            <option value="Salário">Salário</option>
            <option value="Freelance">Freelance</option>
            <option value="Investimentos">Investimentos</option>
            <option value="Outros">Outros</option>
          </select>
          <input
            type="text"
            placeholder="Descrição"
            onChange={(e) =>
              setReceita({ ...receita, descricao: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Data"
            onChange={(e) => setReceita({ ...receita, data: e.target.value })}
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
            onChange={(e) => setDespesa({ ...despesa, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Valor"
            onChange={(e) =>
              setDespesa({ ...despesa, valor: parseFloat(e.target.value) })
            }
          />
          <select
            onChange={(e) =>
              setDespesa({ ...despesa, categoria: { name: e.target.value } })
            }
          >
            <option value="">Selecione uma categoria</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Transporte">Transporte</option>
            <option value="Moradia">Moradia</option>
            <option value="Outros">Outros</option>
          </select>
          <input
            type="text"
            placeholder="Descrição"
            onChange={(e) =>
              setDespesa({ ...despesa, descricao: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Data"
            onChange={(e) => setDespesa({ ...despesa, data: e.target.value })}
          />
          <button type="submit">Adicionar Despesa</button>
        </form>
      </S.FormSection>
    </S.Container>
  );
}

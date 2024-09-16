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
  const totalReceitas = receitas.reduce(
    (acc, receita) => acc + receita.valor,
    0,
  );
  const totalDespesas = despesas.reduce(
    (acc, despesa) => acc + despesa.valor,
    0,
  );
  const comparativoData = [
    { name: 'Receitas', valor: totalReceitas },
    { name: 'Despesas', valor: totalDespesas },
  ];
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
    const novaDespesa: IDespesa = {
      ...despesa,
      id: Date.now().toString(),
    };
    await setDespesasContext([...despesas, novaDespesa]);
  };

  const handleCadastroReceitas = async (e: React.FormEvent) => {
    e.preventDefault();
    const novaReceita: IReceita = {
      ...receita,
      id: Date.now().toString(),
    };
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
      <p>Bem-vindo, {user.name}!</p>
      <S.PieChartsGrid>
        <div>
          <h3>Receitas por Categoria</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={receitas}
                dataKey="valor"
                nameKey="categoria.name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#82ca9d"
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
        </div>

        <div>
          <h3>Despesas por Categoria</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={despesas}
                dataKey="valor"
                nameKey="categoria.name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
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
        </div>

        <div>
          <h3>Comparativo de Receitas e Despesas</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={comparativoData}
                dataKey="valor"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#FF8042"
              >
                {comparativoData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </S.PieChartsGrid>

      <S.ListSection>
        <h3>Despesas</h3>
        <ul>
          {despesas.map((despesa) => (
            <S.ListItem key={despesa.id}>
              <span>{despesa.name}</span>
              <button onClick={() => deleteDespesa(despesa.id)}>Excluir</button>
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
              <button onClick={() => deleteReceita(receita.id)}>Excluir</button>
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

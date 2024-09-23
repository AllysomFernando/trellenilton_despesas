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
import { Button } from '../../componentes/Button';

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

  const handleCadastroDespesas = async (e: React.FormEvent) => {
    e.preventDefault();
    const novaDespesa: IDespesa = { ...despesa, id: Date.now().toString() };
    await setDespesasContext([...despesas, novaDespesa]);
    setDespesa({
      name: '',
      valor: '' as unknown as number,
      id: '',
      descricao: '',
      data: '',
      categoria: { name: '' },
    });
  };

  const handleCadastroReceitas = async (e: React.FormEvent) => {
    e.preventDefault();
    const novaReceita: IReceita = { ...receita, id: Date.now().toString() };
    await setReceitasContext([...receitas, novaReceita]);
    setReceita({
      name: '',
      valor: '' as unknown as number,
      id: '',
      descricao: '',
      data: '',
      categoria: { name: '' },
    });
  };

  const deleteDespesa = (id: string) => {
    deleteDespesaFromLocal(id);
  };
  const deleteReceita = (id: string) => {
    deleteReceitaFromLocal(id);
  };
  return (
    <S.Container>
      <S.Main>
        <h2>Olá, {user.name}!</h2>

        <S.PieChartsGrid>
          <S.GraphDiv>
            <S.h3>Receitas por Categoria</S.h3>
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
          </S.GraphDiv>

          <S.GraphDiv>
            <S.h3>Despesas por Categoria</S.h3>
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
          </S.GraphDiv>

          <S.GraphDiv>
            <S.h3>Comparativo de Receitas e Despesas</S.h3>
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
          </S.GraphDiv>
        </S.PieChartsGrid>

        <S.ListDiv>
          <S.ListSection>
            <S.h3>Receitas</S.h3>
            <ul>
              {receitas.map((receita) => (
                <S.ListItem key={receita.id}>
                  <span>{receita.name}</span>
                  <button onClick={() => deleteReceita(receita.id)}>
                    Excluir
                  </button>
                </S.ListItem>
              ))}
            </ul>
          </S.ListSection>
          <S.ListSection>
            <S.h3>Despesas</S.h3>
            <ul>
              {despesas.map((despesa) => (
                <S.ListItem key={despesa.id}>
                  <span>{despesa.name}</span>
                  <button onClick={() => deleteDespesa(despesa.id)}>
                    Excluir
                  </button>
                </S.ListItem>
              ))}
            </ul>
          </S.ListSection>
        </S.ListDiv>

        <S.FormDiv>
          <S.FormSection>
            <S.h3>Adicionar Receita</S.h3>
            <form onSubmit={handleCadastroReceitas}>
              <input
                type="text"
                placeholder="Nome"
                onChange={(e) =>
                  setReceita({ ...receita, name: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Valor"
                onChange={(e) =>
                  setReceita({ ...receita, valor: parseFloat(e.target.value) })
                }
              />
              <S.SelectInput
                onChange={(e) =>
                  setReceita({
                    ...receita,
                    categoria: { name: e.target.value },
                  })
                }
              >
                <option value="">Selecione uma categoria</option>
                <option value="Salário">Salário</option>
                <option value="Freelance">Freelance</option>
                <option value="Investimentos">Investimentos</option>
                <option value="Outros">Outros</option>
              </S.SelectInput>

              <Button
                variant="Main"
                title="Adicionar Receita"
                onClick={() => handleCadastroReceitas}
              />
            </form>
          </S.FormSection>

          <S.FormSection>
            <S.h3>Adicionar Despesa</S.h3>
            <form onSubmit={handleCadastroDespesas}>
              <input
                type="text"
                placeholder="Nome"
                onChange={(e) =>
                  setDespesa({ ...despesa, name: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Valor"
                onChange={(e) =>
                  setDespesa({ ...despesa, valor: parseFloat(e.target.value) })
                }
              />
              <S.SelectInput
                onChange={(e) =>
                  setDespesa({
                    ...despesa,
                    categoria: { name: e.target.value },
                  })
                }
              >
                <option value="">Selecione uma categoria</option>
                <option value="Alimentação">Alimentação</option>
                <option value="Transporte">Transporte</option>
                <option value="Moradia">Moradia</option>
                <option value="Outros">Outros</option>
              </S.SelectInput>

              <Button
                variant="Main"
                title="Adicionar Despesa"
                onClick={() => handleCadastroDespesas}
              />
            </form>
          </S.FormSection>
        </S.FormDiv>
      </S.Main>
    </S.Container>
  );
}

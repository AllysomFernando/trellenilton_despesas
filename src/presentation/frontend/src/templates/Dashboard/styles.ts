import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `,
  Main: styled.main`
    width: 100%;
    padding: 0 ${theme.main.spacing.x.xl};
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  `,
  h3: styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  `,

  ChartContainer: styled.div`
    margin: 20px 0;
  `,
  PieChartsContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
  `,
  GraphDiv: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 550px;
  `,
  ListDiv: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  ListSection: styled.section`
    width: 600px;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `,
  SelectInput: styled.select`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
  `,
  PieChartsGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 500px;
    margin: 0 auto;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1440px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `,

  ListItem: styled.li`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    flex-direction: column;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    span {
      font-weight: bold;
    }
    button {
      background-color: ${theme.main.colors.secondary};
      border: none;
      color: white;
      font-weight: ${theme.main.font.weight.semiBold};
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
    }
  `,
  FormDiv: styled.div`
    display: flex;
    flex-direction: row;
    gap: 100px;
    align-items: center;
    justify-content: center;
  `,
  FormSection: styled.section`
    width: 600px;
    margin: 20px 0;
    form {
      display: flex;
      flex-direction: column;
      input {
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
      button {
        padding: 10px;
        background-color: #1e90ff;
        border: none;
        color: white;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  `,
};

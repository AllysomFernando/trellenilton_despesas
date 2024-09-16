import styled from 'styled-components';

export const S = {
  Container: styled.div`
    padding: 20px;
  `,

  ChartContainer: styled.div`
    margin: 20px 0;
  `,
  PieChartsContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  ListSection: styled.section`
    margin: 20px 0;
    ul {
      list-style-type: none;
      padding: 0;
    }
  `,
  PieChartsGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    margin: 20px 0;
  `,
  ListItem: styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    span {
      font-weight: bold;
    }
    button {
      background-color: #ff6b6b;
      border: none;
      color: white;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
    }
  `,

  FormSection: styled.section`
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

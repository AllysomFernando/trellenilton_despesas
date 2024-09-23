import styled from 'styled-components';

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 600px;
    height: 50vh;
    gap: 1rem;
    margin: 0 auto;
  `,
  Title: styled.h1`
    color: #333;
    margin-bottom: 20px;
    align-self: center;
    text-align: center;
  `,
  Paragraph: styled.p`
    color: #666;
    font-size: 1.2em;
    line-height: 1.5;
    margin-bottom: 20px;
    text-align: center;
    align-self: center;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    width: 50%;
  `,
};

import styled from 'styled-components';

export const S = {
    Container: styled.div`
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: '1rem',
    `,
    Title : styled.h1`
        color: #333;
        margin-bottom: 20px;
        align-self: center;
        text-align: center;
    `,
    Paragraph : styled.p`
        color: #666;
        font-size: 1.2em;
        line-height: 1.5;
        max-width: 600px;
        text-align: center;
        margin-bottom: 20px;
        align-self: center;
        text-align: center;
    `
};

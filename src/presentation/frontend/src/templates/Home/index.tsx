import React from 'react';
import { S } from './styles';
export default function HomeTemplate() {
  return (
    <S.Container>
      <S.Title>Bem-vindo ao Controlador de despesas da Trellenilton</S.Title>
      <S.Paragraph>
        Aqui você pode controlar suas despesas de forma simples e eficiente.
      </S.Paragraph>
      <S.Paragraph>Experimente agora e aumente sua produtividade!</S.Paragraph>
    </S.Container>
  );
}

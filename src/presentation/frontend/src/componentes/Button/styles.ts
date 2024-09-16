import { colors } from '../../styles/colors';
import { theme } from '../../styles/theme';
import styled from 'styled-components';

export const S = {
  Main: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ disabled }) =>
      disabled ? colors.grafiti[600] : colors.purple[600]};
    color: ${({ disabled }) =>
      disabled ? colors.grafiti[200] : colors.white[900]};
    width: 100%;
    border-radius: 5px;
    padding: 12px 16px;
    flex-shrink: 1;
    border: none;
    font-family: ${theme.main.font.family.primary};
    font-weight: ${theme.main.font.weight.semiBold};
    transition:
      background-color 0.3s ease,
      color 0.3s ease,
      transform 0.2s ease;
    outline: none;
    height: 40px;
    &:hover {
      color: ${colors.white[900]};
      background-color: ${colors.charcoal[900]};
      cursor: pointer;
      transform: scale(1.05);
    }
  `,
  Outline: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: ${({ disabled }) =>
      disabled ? colors.grafiti[300] : colors.charcoal[600]};
    border-width: 2px;
    color: ${({ disabled }) =>
      disabled ? colors.grafiti[300] : colors.charcoal[900]};
    width: 100%;
    border-radius: 5px;
    padding: 12px 16px;
    flex-shrink: 1;
    border-style: solid;
    transition:
      background-color 0.3s ease,
      color 0.3s ease,
      transform 0.2s ease;
    outline: none;
    background-color: ${({ disabled }) =>
      disabled ? colors.grafiti[300] : theme.main.colors.backgroundColor};
    font-weight: ${theme.main.font.weight.semiBold};
    height: 40px;

    &:hover {
      color: ${colors.purple[900]};
      background-color: ${theme.main.colors.backgroundColor};
      border-color: ${colors.purple[900]};
      transform: scale(1.05);
    }
  `,
  Danger: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.red[400]};
    color: white;
    width: auto;
    border-radius: 5px;
    padding: 12px 16px;
    height: 40px;

    &:hover {
      background-color: darkred;
      transform: scale(1.05);
    }
  `,
  Text: styled.span`
    font-size: ${theme.main.font.size.base};
    color: ${colors.white[900]};
    font-family: ${theme.main.font.weight.bold};
  `,
  Ghost: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.purple[200]};
    width: 100%;
    padding: 4px;
    flex-shrink: 1;
    height: 40px;

    &:hover {
      color: ${colors.purple[100]};
      transform: scale(1.05);
    }
  `,
};

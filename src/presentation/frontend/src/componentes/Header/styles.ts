import { colors } from '../../styles/colors';
import { theme } from '../../styles/theme';
import styled from 'styled-components';

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    --max-width: 680px;
    width: min(var(--max-width), 100% - var(--px-lg) * 2);
    margin-inline: auto;
    @media (width >= ${theme.device.lg}) {
      --max-width: 1050px;
    }
  `,
  Nav: styled.nav`
    display: flex;
    align-items: center;
    gap: ${theme.responsive.gap.lg};
    justify-content: space-between;
    @media (width < ${theme.device.lg}) {
      display: none;
    }
  `,
  UlMaster: styled.ul`
    display: flex;
    gap: ${theme.responsive.gap.lg};
  `,
  ButtonContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.responsive.gap.lg};
  `,
  MenuMobileContainer: styled.div`
    display: initial;
    z-index: 3;
    @media (width > ${theme.device.lg}) {
      display: none;
    }
  `,
  MenuContainerLogo: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
  `,
  MenuMobileContent: styled.div`
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    padding-top: 2.25rem;
    width: 100vw;
    height: 100vh;
    background: ${theme.main.colors.secondary};

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4rem;
      height: 50%;
    }

    a {
      font-size: ${theme.main.font.size.lg};
      color: ${colors.white[900]};
    }
    @media (width > ${theme.device.lg}) {
      display: none;
    }
  `,
};

import styled from 'styled-components';

export const Container = styled.section`
  margin: 28px 0; // 28: cima e embaixo, 0: dos lados;

  > h2 {
    border-bottom-width: 1px; // linha abaixo do título;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 16px; // para a linha não ficar colada no texto;
    margin-bottom: 28px; // quem estiver abaixo da linhar afastar um pouco;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }
`;

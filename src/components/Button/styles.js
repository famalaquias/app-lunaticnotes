import styled from 'styled-components';

export const Container = styled.button`
  width: 100%; // ocupa 100% de çargura onde ele estiver;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 56px; // altura;
  border: 0;
  padding: 0 16px;
  margin-top: 16px; // espaço acima;
  border-radius: 10px;
  font-weight: 500; // texto dentro do botão;

  /* quando o botão estiver desabilitado: */
  &:disabled {
    opacity: 0.5;
  }
`;

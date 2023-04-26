import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 10px;

  padding: 22px; // espaçamento interno;
  margin-bottom: 16px;

  > h1 {
    flex: 1; // ocupa o máximo do espaço disponível;
    text-align: left; // centralizado no lado esquerdo;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`;

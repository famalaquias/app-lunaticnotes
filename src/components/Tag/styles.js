import styled from 'styled-components';

export const Container = styled.span`
  font-size: 12px;
  
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  padding: 5px 14px; // espaço interno;  
  border-radius: 5px;
  margin-right: 6px;
`;

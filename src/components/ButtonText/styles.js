import styled from 'styled-components';

export const Container = styled.button`
  background: none; 
  color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

  border: none; // remove a borda;
  font-size: 16px;
`;

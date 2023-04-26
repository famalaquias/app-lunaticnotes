/* 
  Para todos os botões de texto (excluir a nota, volta, etc) da aplicação;
*/
import { Container } from './styles';

export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <Container 
      type="button"
      isActive={isActive}
      {...rest}
    >
      {title}
    </Container>
  );
}

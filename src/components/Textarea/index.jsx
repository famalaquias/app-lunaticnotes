/* 
  Para as observações na página de New - criação de nova nota;
*/
import { Container } from './styles';

export function Textarea({ value, ...rest }) {
  return (
    <Container {...rest}>
      {value}
    </Container>
  );
}

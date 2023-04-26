/*
  Para todos os inputs/busca da aplicação;
*/
import { Container } from './styles';

export function Input({ icon: Icon, ...rest }) {
  return(
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
}

// &&: só vai mostrar o Icon se ele existir (há inputs sem ícon na aplicação);

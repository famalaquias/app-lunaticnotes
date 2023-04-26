/*
  Para todos os links úteis e marcadores da aplicação;
*/
import { Container } from './styles';

export function Section({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}

/* 
  children é usado porque os links úteis e os marcadores possuam
  conteúdos diferentes; os links possuem uma lista de links no 
  conteúdo e os marcadores possuem uma lista de tags;
*/

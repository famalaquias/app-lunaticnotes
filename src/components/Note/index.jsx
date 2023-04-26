/*
  Para todos as notas (Minhas notas) da aplicação;
*/
import { Container } from './styles';

import { Tag } from '../Tag';

// data: são vários objetos que vão ser passados;
export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      {/* Titulo das notas */}
      <h1>{data.title}</h1>

      {/* Tags das notas */}
      {
        data.tags && 
        <footer>
          {
            data.tags.map(tag =>
              <Tag 
                key={tag.id}
                title={tag.name}
              />             
            )
          }
        </footer>
      }
    </Container>
  );
}

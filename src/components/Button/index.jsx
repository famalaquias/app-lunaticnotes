/*
  Para todos os botões da aplicação;
*/
import { Container } from './styles';

export function Button({ title, loading = false, ...rest }) {
  return (
    <Container 
      type='button'
      disabled={loading}
      {...rest}
    >
      { loading ? 'Carregando...' : title }
    </Container>  
  );
}

/* ...rest: é o restOperatior.
Significa que qualquer outra propriedade que não tenho deixado 
explícita na desestruturação, mas tenha sido informada no 
componente Button importado no arquivo de Details, vai ser 
inserida aqui no componente;
*/

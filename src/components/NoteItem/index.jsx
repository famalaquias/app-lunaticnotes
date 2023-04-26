/* 
  Para os inputs de links úteis na página de New - criação de nova nota;
*/
import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles';

export function NoteItem({ isNew = false, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input 
        type="text" 
        value={value}
        /* readOnly: somente leitura, ou seja, para um item que 
        já foi adicionado, não será permitido editar */
        readOnly={!isNew} 
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {/* se for um link novo: renderiza o botão de adionar;
        se for um link já adicionado: renderize o botão de excluir */}
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}

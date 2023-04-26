/*
  Para todos os cabeçalhos da aplicação;
*/

/* ícone de desligar */
import { RiShutDownLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container, Profile, Logout } from './styles';

export function Header() {
  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  /* handleLogout: faz com que o usuário, ao entrar na nota criada
  sai da aplicação e vá para tela de login, apertando o botão de sair */
  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      <Profile to="profile">
        <img 
          src={avatarUrl} 
          alt={user.name} 
        />

        <div>
          <span>Bem vindo(a),</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}

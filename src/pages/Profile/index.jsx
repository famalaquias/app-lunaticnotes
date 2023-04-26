/* 
  Profile: página de perfil do usuário;
*/
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container, Form, Avatar } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
  const { user, updateProfile } = useAuth(); 

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

  /* montando a URL para de fato renderizar a imagem do usuário ali */
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  /* lidando com o botão 'voltar' */
  function handleBack() {
    navigate(-1)
  }

  /* handleUpdate: atualizando os dados de perfil do usuário */
  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    /* userUpdated: atualiza o avatar do usuário;
    o Object.assign é usado juntar o avatar que já tem cadastrado
    com os dados atualizados do usuário, ou seja, ao atualizar os
    dados, a foto do usuário não será atualizada, continuará a mesma */
    const userUpdated = Object.assign(user, updated);
    await updateProfile({ user: userUpdated, avatarFile });
  }

  async function handleChangeAvatar(e) {
    const file = e.target.files[0];

    /* guarda o arquivo que o usuário acabou de selecionar */
    setAvatarFile(file);

    /* toda vez que o usuário mudar de avatar, gere uma URL para
    atualizar esse estado: o que exibe o avatar */
    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <button
          type="button"
          onClick={handleBack}
        >
          <FiArrowLeft />
        </button>
      </header>  

      <Form>
        <Avatar>
          <img 
            src={avatar}
            alt="Imagem do usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input 
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input 
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form> 
    </Container> 
  );
}

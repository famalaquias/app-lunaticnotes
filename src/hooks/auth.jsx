/* 
  Vai colocar toda a lógica de Contextos;
*/
import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';

/* createContext: é uma função que o react entrega para criar 
o próprio contexto */
export const AuthContext = createContext({});

/* children: é o filho do AuthProvider, ou seja, é todas as 
rotas da nossa aplicação; */
function AuthProvider({ children }) {
  const [data, setData] = useState({});

  /* com o contexto criado, podemos compartilhar os dados do 
  usuário autenticado com toda a aplicação;
  função signIn: é a função de autenticação */
  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", {
        email,
        password,
      });

      const { user, token } = response.data;

      /* armazenando informações do usuário no localStorage: token e
      usuário;  
      setItem: define um novo conteúdo no storage */
      localStorage.setItem("@lunaticnotes:token", token);
      /* stringify: armazena as informações em formato de texto */
      localStorage.setItem("@lunaticnotes:user", JSON.stringify(user));

      /* inserindo um token do tipo Bearer de autorização no 
      cabeçalho, por padrão, de todas as requisições que o usuário
      vai fazer a partir de agora */
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      /* guardando as informações do usuário e do token em um state */
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Ocorreu um erro inesperado, tente novamente mais tarde.")
      }
    }
  }

  /* signOut: é a função de sair da aplicação; 
  remove do localStorage as informaçãoes salvas; */
  function signOut() {
    localStorage.removeItem("@lunaticnotes:token");
    localStorage.removeItem("@lunaticnotes:user");

    /* volta como objeto vazio */
    setData({});
  }

  /* updateProfile: atualizando os dados de perfil do usuário */
  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        /* fazendo o upload do avatar para o backend */
        const fileUploadForm = new FormData();

        /* append: adiona dentro do formulário um campo chamado 
        avatar, passando o avatarFile */
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);

        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);

      localStorage.setItem("@lunaticnotes:user", JSON.stringify(user));
      setData({ user, token: data.token });

      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Ocorreu um erro inesperado, tente novamente mais tarde.")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@lunaticnotes:token");
    const user = localStorage.getItem("@lunaticnotes:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ 
        token, 
        user: JSON.parse(user) 
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/* criando o context em uma função só */
function useAuth() {
  /* useContext: é usado para inicializar o contexto e devolvê-lo, 
  para, então, conseguir usá-lo */
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };

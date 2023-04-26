/* 
  Rota de autenticação: tela de login e tela de cadastro
  para quando o usuário não estiver logado;
*/
import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function AuthRoutes() {
  return (
    /* Routes: vai envolver todas as rotas da aplicação */
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}

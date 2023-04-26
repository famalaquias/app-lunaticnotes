/* 
  Pages Details: página que irá detalhar as notas adicionadas;
*/
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';

/* carregando detalhes/dados da nota */
export function Details() {
  const [data, setData] = useState(null);

  /* useParams: busca pelos parâmetros que existe na rota */
  const params = useParams();
  const navigate = useNavigate();

  /* lidando com o botão 'voltar' */
  function handleBack() {
    /* -1: volta para a rota anterior */
    navigate(-1);
  }

  /* handleDelete: remove/excluir as notas */
  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover esta nota?")

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  /* busca pelos parâmetros e pelas notas quando a interface for carregada */
  useEffect(() => {
    /* busca os dados de uma nota */
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container> 
      <Header />

      {
        data && (
          <main>
            <Content>
              <ButtonText 
                title="Excluir a nota" 
                onClick={handleRemove}
              />

              <h1>{data.title}</h1>

              <p>{data.description}</p>

              {
                data.links &&
                <Section title="Links úteis">
                  <Links>
                    {
                      data.links.map(link => (
                        <li key={String(link.id)}>
                          <a href={link.url} target="_blank">
                            {link.url}
                          </a>
                        </li>
                      ))
                    }
                  </Links>
                </Section> 
              }

              {
                data.tags &&
                <Section title="Marcadores">
                  {
                    data.tags.map(tag => (
                      <Tag 
                        key={String(tag.id)} 
                        title={tag.name} 
                      />
                    ))
                  }
                </Section>
              }

              <Button 
                title="Voltar" 
                onClick={handleBack} 
              />
            </Content>
          </main>
        )
      }
    </Container>
  )
}

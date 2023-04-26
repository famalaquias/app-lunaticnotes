/* 
  Home: página onde ficará as notas adicionadas e onde poderá 
  adicionar mais notas;
*/
import { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { 
  Container,
  Brand, 
  Menu, 
  Search, 
  Content, 
  NewNote
} from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';

export function Home() {
  const navigate = useNavigate();

  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  /* handleTagSelected: seleciona as tags e quando são selecionadas
  tem que mudar para a cor laranja */
  function handleTagSelected(tagName) {

    /* quando clicar na tag de 'Todos' desmarque todas as outras 
    tags selecionadas */
    if (tagName === "all") {
      return setTagsSelected([]);
    }

    /* removendo as seleções de uma tag */
    const alreadySelected = tagsSelected.includes(tagName);

    /* se a tag está selecionada, desmarque-a;
    se a tag não está selecionada (else), selecione ela */
    if (alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags)
    } else {
      /* fazendo as seleções de mais de uma tag */
      setTagsSelected(prevState => [...prevState, tagName]);
    }
  }

  /* abrindo a nota cadastrada e selecionada */
  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  /* carregando as tags, utilizadas para fazer filtro na nossa pesquisa */
  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  /* o useEffect será executado novamente se o usuário selecionar
  uma tag nova, então, a pesquisa vai recarregar */
  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`
      )
      setNotes(response.data);
    }

    fetchNotes();
  }, [tagsSelected, search]);

  return(
    <Container>
      <Brand>
        <h1>Lunaticnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText 
            title="Todos" 
            onClick={() => handleTagSelected("all")}
            isActive={tagsSelected.length === 0}
          />
        </li>

        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))
        }
      </Menu>

      <Search>
        <Input 
          placeholder="Pesquisar pelo título" 
          onChange={e => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {/* Carregando notas */}
          {
            notes.map(note => (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            ))
          }
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}

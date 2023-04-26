/* 
  New: página que cria uma nova nota;
*/
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  /* handleAddLink: adionando links nas notas */
  function handleAddLink() {
    if (!newLink) {
      alert(`você não pode adicionar links sem conteúdo`);
      return;
    }

    setLinks(prevState => [...prevState, newLink]);

    setNewLink("");
  }

  /* handleRemoveLink: removendo links das notas */
  function handleRemoveLink(deleted) {
    /* filter: retorna uma nova lista, retorna todos os links, menos o que quer deletar */
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }

  /* handleAddTag: adionando tags das notas */
  function handleAddTag() {
    if (!newTag) {
      alert(`você não pode adicionar tags sem conteúdo`);
      return;
    }
    
    setTags((prevState) => [...prevState, newTag]);

    setNewTag("");
  }

  /* handleRemoveTag: removendo tags das notas */
  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  /* lidando com o botão 'voltar' */
  function handleBack() {
    navigate(-1)
  }

  /* handleNewNote: cadastrando notas */
  async function handleNewNote() {
    /* validando os campos de notas */
    if (!title) {
      return alert("Digite um título para a sua nota");
    }

    if (!description) {
      return alert("Digite um conteúdo para a sua nota");
    }

    if (newLink) {
      return alert("Voce ainda não adicionou o link digitado");
    }

    if (newTag) {
      return alert("Voce ainda não adicionou a tag digitada");
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links,
    });

    alert("Nota criada com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>

            <ButtonText 
              title="Voltar" 
              onClick={handleBack} 
            />   
          </header>

          <Input 
            placeholder="Título" 
            onChange={e => setTitle(e.target.value)}
          />

          <Textarea 
            placeholder="Observações" 
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {/* Adionando links nas notas */}            
            {
              links.map((link, index) => (
                <NoteItem 
                  key={String(index)}
                  value={link}
                  /* Quando a função tem parâmetro, usa-se uma arrow function 
                  antes; removendo links da nota */   
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
            <NoteItem 
              isNew 
              placeholder="Novo link" 
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {/* Adionando tags nas notas */}   
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    /* removendo tags da nota */   
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
              <NoteItem 
                isNew 
                placeholder="Nova tag" 
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />  
            </div>          
          </Section>

          <Button 
            title="Salvar"
            onClick={handleNewNote}  
          />
        </Form>
      </main>  
    </Container> 
  );
}

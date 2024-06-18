import * as React from 'react';
import styled from 'styled-components';
import authOwner from "../../authOwner.js"
import { deleteEvent } from '../../services/deleteEvent.js';
import { postSubscribe } from '../../services/postSubscribe';
import { getSubscribe} from '../../services/getSubscribe.js';
import { useNavigate } from 'react-router-dom';

const CardContainer = styled.div`
  max-width: 500px;
  width: 100%; // Use 100% para ocupar a largura disponível
  padding: 20px;
  text-align: left;
  border-radius: 10px;
  box-shadow: 1px 5px 20px grey;
  margin: 20px;

  @media (max-width: 768px) { // Para telas menores que 768px
    padding: 10px;
    margin: 10px;
    max-width: none;
    width: auto; // A largura se ajustará automaticamente à tela
  }
`

const ButtonInscrevaSe = styled.button`
  width: auto; // Remova a largura fixa
  padding: 10px;
  border: none;
  background: #1976d2;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin: 10px;

  @media (max-width: 768px) { // Para telas menores que 768px
    width: auto; // A largura se ajustará automaticamente à tela
    // padding: 5px; // Reduza o padding em telas menores
    font-size: .8em; // Reduza o tamanho da fonte em telas menores
    margin: 5px; // Reduza a margem em telas menores}`

  const Subtitulo = styled.h4`
  color: #1976d2;
`

const DeletEventBtn = styled.button`
  padding: 10px;
  background: #D21919;
  border-radius: 10px;
  border: none;
  color: white;
  margin-left: 20px;
  font-weight: 600;
  cursor: pointer;
`

const Inscritos = styled.ul`
  list-style: none;
  width: 90%;
  padding: none;
  margin: 0 -30px;
`

const Inscrito = styled.li`
  // border: 1px solid grey;
  box-shadow: 1px 5px 20px grey;
  margin: 10px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  padding: 10px;
  font-weight: 500;
`

export default function Card(props) {
  const navigate = useNavigate()
  const [subscribers, setSubscribers] = React.useState([]);
  const handleClickDelete = async () => {
    const responseDelete = await deleteEvent(props.eventId)
    alert('Evento deletado com sucesso!')
    navigate(0)
    console.log(props.eventId)
    console.log(responseDelete)
  }



  const handleSubmit = async (event) => {
    const idUser = await JSON.parse(localStorage.getItem('user')).id;
    event.preventDefault();
    try {
      const response = await postSubscribe({
        userId: idUser,
        eventId: props.evento.id,
      });
      buscaInscritos()
  
      if (response.status === 422) {
        // Certifique-se de que a resposta do servidor está sendo lida corretamente.
        const data = await response.data;
        alert(data);
        return;
      }
  
      // Outros códigos para lidar com sucesso na inscrição...
    } catch (error) {
      // Aqui você pode querer verificar se o erro é um erro de rede ou outro tipo.
      alert(error.response ? error.response.data : error.message);
    }
  };
  

  const buscaInscritos = async ()=> {
    const response = await getSubscribe(props.eventId)
    setSubscribers(response);
  }

  return (
    <CardContainer>
      <h2>{props.titulo}</h2>
      <Subtitulo>DATA E HORA:</Subtitulo>
      <p>{props.dataEHora}</p>
      <Subtitulo>ORGANIZADOR:</Subtitulo>
      <p>{props.organizador}</p> 
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqJdltHhM09jw08a2HcmQmeNA2etjsaprng&s" alt="aaa" />
      <Subtitulo>DESCRIÇÃO:</Subtitulo>
      <p>{props.description ||  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint rem repudiandae reprehenderit incidunt voluptate facilis dolores aspernatur iusto aperiam obcaecati iure inventore voluptates maxime quasi enim, illo eum eaque nam!'}</p>
      <div style={{padding: 'none'}}>
        <ButtonInscrevaSe onClick={handleSubmit}>INSCREVA-SE</ButtonInscrevaSe>
        {authOwner(props.ownerId) ? <DeletEventBtn onClick={handleClickDelete}>DELETAR EVENTO</DeletEventBtn> : null}
        <ButtonInscrevaSe onClick={buscaInscritos}>INSCRITOS</ButtonInscrevaSe>
        <Inscritos>
          <Subtitulo>Inscritos:</Subtitulo>
          {subscribers.map((subscriber) => (
            <Inscrito key={subscriber}>{subscriber}</Inscrito>
          ))}
        </Inscritos>
      </div>

    </CardContainer>
  );
}

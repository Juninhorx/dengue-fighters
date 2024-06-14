import * as React from 'react';
import styled from 'styled-components';
import { postSubscribe } from '../../services/postSubscribe';


const CardContainer = styled.div`
  max-width: 500px;
  width: 500px;
  padding: 20px;
  text-align: left;
  border-radius: 10px;
  box-shadow: 1px 5px 20px grey;
  margin: 20px;
`
const ButtonInscrevaSe = styled.button`
  width: 40%;
  padding: 10px;
  border: none;
  background: #1976d2;
  border-radius: 10px;
  color: white;
`
const Subtitulo = styled.h4`
  color: #1976d2;
`

export default function Card(props) {
  const handleSubmit = async (event) => {
    const idUser = await JSON.parse(localStorage.getItem('user')).id
    event.preventDefault();
    const response = await postSubscribe({
      userId: idUser,
      eventId: props.evento.id,
    })
    console.log(response)
  };
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
      <ButtonInscrevaSe onClick={handleSubmit}>Se Inscreva</ButtonInscrevaSe>
    </CardContainer>
  );
}

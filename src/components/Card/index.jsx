import * as React from 'react';
import styled from 'styled-components';
import authOwner from "../../authOwner.js"


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
  font-weight: 600;
  cursor: pointer;
  `
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

export default function Card(props) {
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
      <div>
        <ButtonInscrevaSe>SE INSCREVA</ButtonInscrevaSe>
        {authOwner(props.ownerId) ? <DeletEventBtn>DELETAR EVENTO</DeletEventBtn> : null}
      </div>
    </CardContainer>
  );
}

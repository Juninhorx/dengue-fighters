import Header from "../../components/Header"
import * as React from 'react';
import { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
import Card from '../../components/Card'
import { getEvent } from "../../services/getEvent";
export function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/juninhorx">
        Ricardo Xavier
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvent();
        setEvents(data);
        console.log(data)
      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (date) => {
    let data = new Date(date);

    let dia = data.getDate(); // Dia do mês
    let mes = data.getMonth() + 1; // Mês (getMonth() retorna um valor de 0-11, então adicionamos 1 para obter o mês correto)
    let ano = data.getFullYear(); // Ano
    let hora = data.getHours(); // Horas
    let minuto = data.getMinutes(); // Minutos

    // Adiciona um zero à esquerda se o dia ou o mês for menor que 10
    if(dia < 10) dia = '0' + dia;
    if(mes < 10) mes = '0' + mes;

    // Adiciona um zero à esquerda se a hora ou o minuto for menor que 10
    if(hora < 10) hora = '0' + hora;
    if(minuto < 10) minuto = '0' + minuto;

    let dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minuto}`;
    return dataFormatada
  }
  
  return (
    <Container>
      <Header/>
      <h1 style={{margin: '30px 0'}}>Eventos</h1>
      {events.map((event, index) => (
        <Card key={index} titulo={event.eventName} dataEHora={formatDate(event.eventDate)}  organizador={event.creator.completeName} description={event.eventDescription} />
      ))}
      <Copyright/>
    </Container>
    
  );
}
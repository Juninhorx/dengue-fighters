import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Copyright } from '../Home';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import { postEvent } from '../../services/createEvent';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function CreateEventPage() {
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const idUser = await JSON.parse(localStorage.getItem('user')).id

    const date = new Date(`${data.get('eventDate')}T${data.get('eventTime')}:00`)
    console.log(date);
    const response = await postEvent({
      creatorUser: idUser,
      eventName: data.get('eventName'),
      eventDate: date,
      eventLocation: data.get('eventLocation'),
      eventDescription: data.get('eventDescription'),
    })
    alert('Evento criado com sucesso!')
    navigate('/home')
    console.log(response)
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Logo width="60px"/>
          <Typography component="h1" variant="h5">
            Crie um evento!
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="eventName"
                  label="Nome do evento"
                  name="eventName"
                  autoComplete="eventName"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="eventDate"
                  label="Data do evento"
                  name="eventDate"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="eventTime"
                  label="Horário do evento"
                  name="eventTime"
                  type="time"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="eventLocation"
                  label="Local do evento"
                  name="eventLocation"
                  autoComplete="eventLocation"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="eventDescription"
                  label="Descrição do Evento"
                  name="eventDescription"
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Criar Evento
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

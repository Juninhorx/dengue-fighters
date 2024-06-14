import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../components/Logo';
import { FormControl, FormControlLabel, Radio, RadioGroup, FormLabel } from '@mui/material';
import { postUser } from '../../services/createUser';
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header';
import { Copyright } from '../Home';

const defaultTheme = createTheme();

export default function SignUp() {
  const [gender, setGender] = React.useState('mulher');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Verificar se os campos estão preenchidos
    if (!data.get('name') || !data.get('gender') || !data.get('email') || !data.get('telefone') || !data.get('password')) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const response = await postUser({
      completeName: data.get('name'),
      gender: data.get('gender'),
      email: data.get('email'),
      phone: data.get('telefone'),
      password: data.get('password'),
    })

    if (response.status === 201) {
      alert('Usuário criado com sucesso!')
      navigate('/')
    } else {
      alert('Erro ao criar usuário!')
      navigate('/singup')
    }
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
          <Logo width="100px"/>
          <Typography component="h1" variant="h5">
            Criar Conta
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nome Completo"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gênero</FormLabel>
                  <RadioGroup row aria-label="gênero" name="gender" value={gender} onChange={handleGenderChange}>
                    <FormControlLabel value="H" control={<Radio />} label="Homem" />
                    <FormControlLabel value="M" control={<Radio />} label="Mulher" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='tel'
                  id="telefone"
                  label="telefone"
                  name="telefone"
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Criar Conta
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Já tem uma conta? Entrar
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

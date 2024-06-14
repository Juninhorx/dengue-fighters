import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../Logo'
import { Link, useNavigate} from 'react-router-dom';

const pages = ['Home', 'Pricing', 'Add', 'Sair'];

function Header() {
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function handleHomeClick() {
    // Adicione aqui o código que você deseja executar
    navigate('/home')
  }

  
  async function handleAddClick(){
    navigate('/create-event')
    // const response = await postEvent({
    //   usuarioCriador: 1,
    //   nomeEvento: 'Evento de teste',
    //   localEvento: 'casarao',
    //   descricaoEvento: 'a noite pega fogo'
    // })
  }
  
  function handlePricingClick() {
    console.log("Pricing button clicked");
    // Adicione aqui o código que você deseja executar
  }
  
  function handleSairClick() {
    // Adicione aqui o código que você deseja executar
    localStorage.setItem('user', null)
    navigate(0)
  }


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              >
              {/* edit */}
              
              {pages.map((page) => {
                let handleClick;

                switch(page) {
                  case 'Home':
                    handleClick = handleHomeClick;
                    break;
                  case 'Pricing':
                    handleClick = handlePricingClick;
                    break;
                  case 'Add':
                    handleClick = handleAddClick;
                    break
                  case 'Sair':
                    handleClick = handleSairClick;
                    break;
                  default:
                    handleClick = () => {};
                }

                return (
                  <Button
                    key={page}
                    onClick={handleClick}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                    {page}
                  </Button>
                );
              })}
              
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}

              {/* edit */}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            {/* edit */}


            {pages.map((page) => {
              let handleClick;

              switch(page) {
                case 'Home':
                  handleClick = handleHomeClick;
                  break;
                case 'Pricing':
                  handleClick = handlePricingClick;
                  break;
                case 'Add':
                  handleClick = handleAddClick;
                  break;
                case 'Sair':
                  handleClick = handleSairClick;
                  break;
                default:
                  handleClick = () => {};
              }

              return (
                <MenuItem key={page} onClick={handleClick}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              );
            })}



            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}




            {/* edit */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Link to='/home'>
              <Logo width="60px"/>
            </Link>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;

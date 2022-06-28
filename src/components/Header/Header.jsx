import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';
import { useNavigate, Outlet } from 'react-router-dom'; 

const pages = ['Register', 'Login', 'Contacts'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  
  const handleClickNavMenu = (event) => {
    const goTo = event?.currentTarget?.innerText?.toLocaleLowerCase()
    navigate(goTo)
  }

  const clickToHome = () => {
    navigate('/');
  }

  const handleOpenUserMenu = (event) => {
    console.log(event.currentTarget)
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar position="static" sx={{background: 'rgb(146, 80 , 130)'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button sx={{ color: "white", fontSize: 20, }} onClick={clickToHome} component="button">
            <Typography
              sx={{
              mr: 2,
              display: { xs: 'none', sm: 'inline',},
              fontSize: 20,
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>Phonebook</Typography>
            <ContactPhoneTwoToneIcon sx={{ display: 'flex', ml: 0, size: 'xl', color: 'rgb(194, 120, 118)',}} />
          </Button>
          <Box sx={{ flexGrow: 1, display: 'flex', }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleClickNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
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
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Typography component={'section'}><Outlet /></Typography>     
    </>
  );
};
export default ResponsiveAppBar;

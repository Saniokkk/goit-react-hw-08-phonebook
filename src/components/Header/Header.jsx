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
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/user/userOperations';
// import InsertEmoticonSharpIcon from '@mui/icons-material/InsertEmoticonSharp';

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const emailUser = useSelector(state => state.auth.user.email);
  const nameUser = useSelector(state => state.auth.user.name);
  const isAuth = useSelector(state => state.auth.isAuth);
  const navigate = useNavigate();
  const [navMenu, setNavMenu] = React.useState([]);
  // const [userMenu, setUserMenu] = React.useState([]);
  const dispatch = useDispatch();

    React.useEffect(() => {
    if (isAuth) {
      setNavMenu(['Contacts']);
    } else {
      setNavMenu(['Register', 'Login']);
    }
  }, [isAuth]);
  
  const handleClickNavMenu = (event) => {
    const goTo = event?.currentTarget?.innerText?.toLocaleLowerCase()
    navigate(goTo);
  }

  const handleClickMenu = (event) => {
    handleClickNavMenu(event);
    handleCloseUserMenu();
  }

  const handleLogOut = () => {
    dispatch(logoutUser());
    handleCloseUserMenu();
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
            {navMenu.map((page) => (
              <Button
                key={page}
                onClick={handleClickNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                {page}
              </Button>
            ))}
          </Box>
          {isAuth && <Typography mr={2} sx={{fontSize: 22,}}>Hello { nameUser }</Typography>}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, size: "large" }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  {/* <InsertEmoticonSharpIcon sx={{size: "large"}} ></InsertEmoticonSharpIcon> */}
              </IconButton>
            </Tooltip>
                {isAuth
                  ? <Menu
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
                      <MenuItem key={emailUser}>
                        <Typography>{emailUser}</Typography>
                      </MenuItem>
                      <MenuItem key="Logout" onClick={handleLogOut}>
                        <Typography textAlign="center">Logout</Typography>
                      </MenuItem>
                    </Menu>
                  : <Menu
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
                      <MenuItem key="Register" onClick={handleClickMenu}>
                        <Typography>Register</Typography>
                      </MenuItem>
                      <MenuItem key="Login" onClick={handleClickMenu}>
                        <Typography textAlign="center">Login</Typography>
                      </MenuItem>
                    </Menu>}
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Typography component={'section'}><Outlet /></Typography>     
    </>
  );
};
export default ResponsiveAppBar;

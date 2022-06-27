// import { NavLink, Link } from 'react-router-dom';
// import styles from './Header.module.css';

// export const Header = () =>{
//     return (<header className={styles.header}>
//                 <Link className={styles.logo} to="/"> Phone Book</Link>
//                 <nav className={styles.nav}>
//                     <NavLink className={styles.navLink} to="/">Auth</NavLink>
//                     <NavLink className={styles.navLink} to="/">Registration</NavLink>
//                 </nav>
//             </header>)
// }

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
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom'; 

const pages = ['Register', 'Login', 'Contacts'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleClickNavMenu = (event) => {
        const goTo = event?.currentTarget?.innerText?.toLocaleLowerCase()
    navigate(goTo)
  }
  const handleOpenNavMenu = (event) => {
    console.log(event.currentTarget.innerText);
    const goTo = event?.currentTarget?.innerText?.toLocaleLowerCase()
    navigate(goTo)
    
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    console.log(event.currentTarget)
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="absolute" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          > */}
          <Button sx={{ color: "white", fontSize: 20, }} component="a">
            Phonebook
          {/* </Typography> */}
            <ContactPhoneTwoToneIcon sx={{ display: 'flex', ml: 1, size: 'xl', color: 'purple' }} />
            </Button>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            By
          </Typography>
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
  );
};
export default ResponsiveAppBar;

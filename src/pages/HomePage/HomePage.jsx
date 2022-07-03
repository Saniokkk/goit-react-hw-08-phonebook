import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



const HomePage = () => {
    const navigate = useNavigate();
    const handleClickNavMenu = (event) => {
    const goTo = event?.currentTarget?.innerText?.toLocaleLowerCase()
    navigate(goTo)
  }
    return (
        <Box
        position='relative'
        component="div"
        sx={{
            '& > :not(style)': { mb: 2, width: '100%' },
            maxWidth: 800,
            minHeight: 300,
            margin: '20px auto',
            borderRadius: 2,
            boxShadow: '0px 0px 15px 1px rgba(143, 144, 139, 0.6)',
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            alignItems: 'center',
            boxSizing: 'border-box',
        }} 
        >
            <Typography sx={{ fontSize: 26, textAlign: 'center' }} >
                Hello, to work on our site you must log in or register.
            </Typography>
            <Box component="div"
                sx={{
                '& > :not(style)': { mr: 3, width: '20%' },
                display: 'flex',
                justifyContent: 'center',
                borderRadius: 1,
                alignItems: 'center'
            }}
            >
                <Button
                    // key="page"
                    onClick={handleClickNavMenu}
                    sx={{color: 'white', bgcolor: 'rgb(146, 80 , 130)', '&:hover': { bgcolor: 'rgb(194, 120, 118)'}, }}
                    >
                    Register
                </Button>
                <Button
                    // key={page}
                    sx={{color: 'white', bgcolor: 'rgb(146, 80 , 130)', '&:hover': { bgcolor: 'rgb(194, 120, 118)'}, }}
                    onClick={handleClickNavMenu}
                    >
                    Login
                </Button>
            </Box>
        </Box>
    )
}

export default HomePage;
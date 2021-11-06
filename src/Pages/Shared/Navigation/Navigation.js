import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <AppBar position="static" sx={{ bgcolor: '#14d1c9' }}>
                <Container className="all-width">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <NavLink to='/home' style={{ textDecoration: 'none' }}>
                            <Button color="inherit" sx={{ textDecoration: "none", color: 'white' }}>Home</Button>
                        </NavLink>
                        <NavLink to='/appoinment' style={{ textDecoration: 'none' }}>
                            <Button color="inherit" sx={{ textDecoration: "none", color: 'white' }}>Appoinment</Button>
                        </NavLink>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </Container>
            </AppBar>


        </Box>
    );
};

export default Navigation;
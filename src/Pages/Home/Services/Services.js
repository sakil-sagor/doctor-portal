import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from './Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/fluoride.png';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis consequatur alias dolore voluptatem ea ex nobis. Optio, earum consequuntur.',
        img: fluoride,
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis consequatur alias dolore voluptatem ea ex nobis. Optio, earum consequuntur.',
        img: cavity,
    },
    {
        name: 'Teacth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis consequatur alias dolore voluptatem ea ex nobis. Optio, earum consequuntur.',
        img: whitening,
    },
]
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, py: 12 }}>
            <Container className="all-width" sx={{ textAlign: 'center' }}>
                <Box sx={{ mb: 12 }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: '#14d1c9' }} >
                        Our Services
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div">
                        Services We Provide
                    </Typography>
                </Box>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service key={service.name} service={service}></Service>)
                    }

                </Grid>

            </Container>
        </Box>
    );
};

export default Services;
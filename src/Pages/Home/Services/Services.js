import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from './Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis consequatur alias dolore voluptatem ea ex nobis. Optio, earum consequuntur.',
        img: fluoride,
    },
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis consequatur alias dolore voluptatem ea ex nobis. Optio, earum consequuntur.',
        img: cavity,
    },
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis consequatur alias dolore voluptatem ea ex nobis. Optio, earum consequuntur.',
        img: whitening,
    },
]
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container maxWidth="" className="all-width">

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
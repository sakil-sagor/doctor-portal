import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import doctor from '../../../images/doctor.png'
import appointBg from '../../../images/appointment-bg.png'
import { red } from '@mui/material/colors';

const appinemetnBg = {
    background: `url(${appointBg})`,
    backgroundColor: '#212149',
    backgroundBlendMode: 'lighten,luminosity',
}


const AppoinmentBanner = () => {
    return (
        <Box style={appinemetnBg} sx={{ mb: 12 }}>
            <Container className="all-width"  >
                <Grid container spacing={2} sx={{ alignItems: "center" }}>
                    <Grid item xs={6} md={6} >
                        <Box sx={{ width: 1 }}>
                            <img src={doctor} alt="" style={{ width: "75%" }} />
                        </Box>

                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Box sx={{}}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#14d1c9' }} >
                                Appoinment
                            </Typography>
                            <Typography gutterBottom variant="h3" component="div" sx={{ my: 4 }}>
                                Make an Appoinment Today
                            </Typography>
                            <Typography gutterBottom variant="p" component="div" sx={{ mb: 4 }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, qui.
                            </Typography>
                            <Button variant="contained" sx={{ bgcolor: '#14d1c9' }} >Learn More</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box >

    );
};

export default AppoinmentBanner;
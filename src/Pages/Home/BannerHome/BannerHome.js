import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import chair from '../../../images/chair.png'
import bannerBg from '../../../images/bg.png'


const bannerHomeBg = {
    background: `url(${bannerBg})`,

}


const BannerHome = () => {
    return (
        <Box style={bannerHomeBg} sx={{ py: 12 }}>
            <Container className="all-width">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{}}>

                                <Typography gutterBottom variant="h3" component="div" sx={{ my: 4 }}>
                                    Your New Smile Starts Here
                                </Typography>
                                <Typography gutterBottom variant="p" component="div" sx={{ mb: 4, color: 'gray', lineHeight: 2, }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam expedita soluta molestias maxime culpa laudantium nisi sunt facere? Mollitia, a. Ipsa id sunt nostrum!
                                </Typography>
                                <Button variant="contained" sx={{ bgcolor: '#14d1c9' }} >Get Appoinment</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Box >
                                <img src={chair} style={{ width: "100%" }} alt="" />
                            </Box>

                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default BannerHome;
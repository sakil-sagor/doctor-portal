import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import chair from '../../../images/chair.png'
import bannerBg from '../../../images/bg.png'
import Calendar from '../../Shared/Calendar/Calendar';



const bannerHomeBg = {
    background: `url(${bannerBg})`,

}


const AppoinmentHeader = ({ date, setDate }) => {
    return (
        <Box style={bannerHomeBg} sx={{ py: 12 }}>
            <Container className="all-width">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{}}>

                                <Typography gutterBottom variant="h3" component="div" sx={{ color: '#14d1c9' }}>
                                    Appoinment
                                </Typography>
                                <Calendar date={date} setDate={setDate}></Calendar>
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

export default AppoinmentHeader;
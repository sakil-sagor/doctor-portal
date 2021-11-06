import { Grid, Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';

const BookingDate = ({ booking }) => {
    const { name, time, seat } = booking;
    return (
        <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
            <Paper elevation={3} sx={{ py: 5 }} >
                <Typography variant="h4" component="div" gutterBottom sx={{ color: '#14d1c9' }}>
                    {name}
                </Typography>
                <Typography variant="h6" component="div" gutterBottom>
                    {time}
                </Typography>
                <Typography variant="span" component="div" gutterBottom sx={{ pb: 2, color: 'gray' }} >
                    {seat} Seats are Available
                </Typography>
                <Button variant="contained" sx={{ py: 1.5, px: 4, bgcolor: '#14d1c9', fontSize: 18, ":hover": { bgcolor: '#14d1c9de' } }} >Book Appoinment</Button>

            </Paper>
        </Grid >
    );
};

export default BookingDate;
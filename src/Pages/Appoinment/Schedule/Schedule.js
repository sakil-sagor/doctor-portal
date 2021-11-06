import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BookingDate from '../BookingDate/BookingDate';
const bookingDate = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8:00 am - 9:00 am',
        seat: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10:05 am - 11:30 am',
        seat: 10,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '4:00 pm - 5:30 pm',
        seat: 10,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '6:00 pm - 7:30 pm',
        seat: 10,
    },
    {
        id: 5,
        name: 'Teeth Orthodontics',
        time: '8:00 pm - 9:00 pm',
        seat: 10,
    },
    {
        id: 6,
        name: 'Teeth Surgery',
        time: '9:00 pm - 10:30 pm',
        seat: 10,
    },

]
const Schedule = ({ date }) => {
    return (
        <Box sx={{ py: 12 }}>
            <Container className="all-width"  >
                <Typography variant="h4" component="div" gutterBottom sx={{ color: '#14d1c9', textAlign: 'center', mb: 8 }}>
                    This is all schedule for {date.toDateString()}
                </Typography>


                <Grid container spacing={4}>
                    {
                        bookingDate.map(booking => <BookingDate
                            key={booking.id}
                            booking={booking}
                        ></BookingDate>)
                    }

                </Grid>

            </Container>
        </Box>
    );
};

export default Schedule;
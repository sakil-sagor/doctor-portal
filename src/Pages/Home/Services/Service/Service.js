import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ maxWidth: 345, border: 0, boxShadow: 0 }}>
                <CardMedia style={{ width: " auto", margin: "auto" }}
                    component="img"
                    height=""
                    image={img}
                    alt="green iguana"
                />
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography gutterBottom variant="h4" component="div">
                        {name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid >
    );
};

export default Service;

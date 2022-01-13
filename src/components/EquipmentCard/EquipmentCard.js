import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const EquipmentCard = (props) => {
    const {date, idEquipment, strSeason, strUsername, strEquipment} = props.equipment;
    return (
        <>
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        Equipment Id : {idEquipment}<br/>
                        Name : {strUsername}<br/>
                        Season : {strSeason}<br/>
                        Date : {date}<br/>
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151, marginLeft: '5vh' }}
                image={strEquipment}
                alt="Live from space album cover"
            />
        </Card>
        </>
    );
};

export default EquipmentCard;
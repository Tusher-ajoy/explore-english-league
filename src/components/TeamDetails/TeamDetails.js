import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EquipmentCard from '../EquipmentCard/EquipmentCard';
import '../Home/Home.css';
import stadiumImg from '../Img/stadium2.jpg'

const TeamDetails = () => {
    const {teamId} = useParams();
    const [equipment, setEquipment] = useState([]);
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/2/lookupequipment.php?id=${teamId}`)
        .then(res => res.json())
        .then(data => setEquipment(data.equipment))
    },[teamId])
    const shortEquipment = equipment.slice(0,10);
    const headerBgImg = {
        backgroundImage:`url(${stadiumImg})`
    }
    return (
        <div style={{paddingBottom:'5px'}}>
            <div className='headingPart' style={headerBgImg}>
                <img src='https://www.thesportsdb.com/images/media/team/badge/xtxwtu1448813356.png' alt="" style={{width:'35vh'}} />
            </div>
            {
                shortEquipment.map(equi => (
                    <Grid item xs={12} md={6} lg={6} style={{margin: '5px auto'}} key={equi.idEquipment}>
                            <EquipmentCard equipment={equi} />
                    </Grid>
                ))
            }
        </div>
    );
};

export default TeamDetails;
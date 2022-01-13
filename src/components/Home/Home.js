import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TeamCard from '../TeamCard/TeamCard';
import stadium from '../Img/stadium.jpg'
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    },[])
    const headerBgImg = {
        backgroundImage:`url(${stadium})`
    }
    return (
        <div style={{paddingBottom:'5px'}}>
            <div className='headingPart' style={headerBgImg}>
                <div>
                  <h1>Explore English Premier League</h1>
                </div>
            </div>
            <Container>
                <Grid container sx={{my:'1rem'}} rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    {
                        teams.map(team => (
                            <Grid item xs={12} md={6} lg={4} key={team.idTeam}>
                                <TeamCard team={team}></TeamCard>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
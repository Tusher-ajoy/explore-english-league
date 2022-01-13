import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const TeamCard = (props) => {
    const {strTeam,strTeamBadge,strSport,idTeam} = props.team;
    return (
        <div>
            <Card >
                <CardActionArea style={{textAlign:'center'}}>
                    <CardMedia style={{margin:'5px'}}> 
                        <img src={strTeamBadge} width='50%' alt="" /> 
                    </CardMedia>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {strTeam}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Type : {strSport}<br /><br />
                        <Link to={`/team-details/${idTeam}`} style={{textDecoration:'none'}}>
                            <Button variant="contained" style={{backgroundColor:'#3A42FF'}}>Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Link>
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default TeamCard;
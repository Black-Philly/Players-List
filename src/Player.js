import './Player.css'

const Player = ({name, team, nationality, jerseyNumber, age, image}) => {
    return(
        <div className='player-card'>
           
            <img src={image} alt={`${name}`} className='player-pics'/>
            
            <div className='player-details'>
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p>Team: {team}</p>
                <p>Jersey Number: {jerseyNumber}</p>
                <p>Nationality: {nationality}</p>

            </div>

        </div>
    );
};

export default Player
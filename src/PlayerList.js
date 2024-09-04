import players from "./players";
import Player from "./Player";


const PlayerList = () => {
    
    return (
        <div className='player-list'>
            {players.map((player, index) => (
                <Player key={index} {...player} />
            ))}

        </div>
    );
};


export default PlayerList
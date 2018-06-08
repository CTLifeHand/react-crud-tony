import React from 'react';
import PropTypes from 'prop-types';


const GamesList = (games) => {
    const emptyMessage = (
        <p>There are no games yet in your collection.</p>
    );

    const gamesList = (
        <div className="ui four cards">
            {/* {games.map(game => <GameCard />)} */}
            <h2>abc</h2>
        </div>
    );
    return (
        <div>
            {games.length ? gamesList : emptyMessage}
        </div>
    )
}

GamesList.propTypes = {
    games: PropTypes.array.isRequired,
    deleteGame: PropTypes.func.isRequired
}
 
export default GamesList;
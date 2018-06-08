import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import GamesList from "./GamesList";
import { fetchGames, deleteGame } from '../store/games/action';

class GamesPage extends Component {
    componentDidMount() {
        this.props.fetchGames();
    }
    
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <GamesList games={this.props.games} deleteGame={this.props.deleteGame}/>
            </div>
        )
    }
}

GamesPage.propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired,
    deleteGame: PropTypes.func.isRequired
}

export default connect((state) => { return { games: state.games } }, { fetchGames, deleteGame})(GamesPage);
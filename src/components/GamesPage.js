import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import GamesList from "./GamesList";

class GamesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <GamesList games={this.props.games} />
            </div>
        )
    }
}

GamesPage.propTypes = {
    games: PropTypes.array.isRequired,
    // fetchGames: PropTypes.func.isRequired,
    // deleteGame: PropTypes.func.isRequired
}

export default connect((state) => { return { games: state.games } }, {})(GamesPage);
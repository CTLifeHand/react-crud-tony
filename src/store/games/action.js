import * as actionType from './action-type';

export const setGames = (games) => {
    return {
        type: actionType.SET_GAMES,
        games
    }
};

export const gameFetched = (game) => {
    return {
        type: actionType.GAME_FETCHED,
        game
    }
};

export const fetchGames = () => {
    return dispatch => {
        fetch('/api/games')
            .then(res => res.json())
            .then(data => dispatch(setGames(data.games)))
    }
};

export const fetchGame = (id) => {
    return dispatch => {
        fetch(`/api/games/${id}`)
            .then(res => res.json())
            .then(data => dispatch(gameFetched(data.game)))
    }
};

const handleResponse = (response) => {
    if (response.ok) {
        return response.json();
    } else {
        let error = new Error(response.statusText);
        error.response = response
        throw error;
    }
}

export const addGame = (game) => {
    return {
        type: actionType.ADD_GAME,
        game
    }
};

export const saveGame = (data) => {
    return dispatch => {
        return fetch('/api/games', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
            .then(data => dispatch(addGame(data.game)));
    }
};

export const gameUpdated = (game) => {
    return {
        type: actionType.GAME_UPDATED,
        game
    }
};

export const updateGame = (data) => {
    return dispatch => {
        return fetch(`/api/games/${data._id}`, {
            method: 'put',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
            .then(data => dispatch(gameUpdated(data.game)));
    }
};

export const gameDeleted = (gameId) => {
    return {
        type: actionType.GAME_DELETED,
        gameId
    }
};

export const deleteGame = (id) => {
    return dispatch => {
        return fetch(`/api/games/${id}`, {
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
            .then(data => dispatch(gameDeleted(id)));
    }
};
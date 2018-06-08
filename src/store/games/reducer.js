import * as actionType from './action-type';

export const games = (state = [], action = {}) => {
    switch (action.type) {
        case actionType.SET_GAMES:
            return action.games;
        case actionType.GAME_DELETED:
            return state.filter(item => item._id !== action.gameId)
        case actionType.ADD_GAME:
            return [
                ...state,
                action.game
            ]
        case actionType.GAME_UPDATED:
            return state.map(item => {
                if (item._id === action.game._id) return action.game;
                return item;
            })
        case actionType.GAME_FETCHED:
            const index = state.findIndex(item => item._id === action.game._id)
            if (index > -1) {
                return state.map(item => {
                    if (item._id === action.game._id) return action.game;
                    return item;
                })
            } else {
                return [
                    ...state,
                    action.game
                ]
            }
        default: return state;
    }
}
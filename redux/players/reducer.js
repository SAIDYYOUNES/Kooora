import {playersActions} from './actions';
const initialState = {
    players: []
};
const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case playersActions.GET_PLAYERS:
            return {
                ...state,
                players: action.payload
            };
        default:
            return state;
    }
};
export default playerReducer;
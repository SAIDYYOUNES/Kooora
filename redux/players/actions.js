import axios from "axios"

const playersActions = {
    GET_PLAYERS: 'GET_PLAYERS',
}
 function getPlayers() {
    return async (dispatch) => {
        try {
            const { data } = await  axios.get('https://www.footballtransfers.com/en/players/actions/overview/overview')
            dispatch({ type: playersActions.GET_PLAYERS, payload: data.records });
        } catch (error) {
            console.error(error);
        }
    };
}
export {playersActions, getPlayers}
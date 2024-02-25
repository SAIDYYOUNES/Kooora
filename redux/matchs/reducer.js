import { matchActions } from "./actions";
const initialState = {
    matchs: null,
    tournaments: null,
    favorited: []
};
const matchReducer = (state = initialState, action) => {
    switch (action.type) {
        case matchActions.FAVORITE:
            if(state.favorited.includes(action.payload))
            {return {
                ...state,
                favorited: state.favorited.filter((item)=>item.id !== action.payload.id) 
            };}else{
                return {
                    ...state,
                    favorited: [...state.favorited , action.payload]
                }
            }
        case matchActions.GET_MATCHS:
            return {
                ...state,
                matchs: action.payload
            };
        case matchActions.GET_TOURNAMENTS:
            return {
                ...state,
                tournaments: action.payload
            };
        default:
            return state;
    }
};
export default matchReducer;
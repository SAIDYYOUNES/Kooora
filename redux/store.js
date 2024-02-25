// import { applyMiddleware, combineReducers } from "redux";
// import { createStore } from "redux";
// import {thunk} from "redux-thunk";
// import playerReducer from "./players/reducer";
// import matchReducer from "./matchs/reducer";

// const middleware = [thunk];
// export default store = createStore(
//     combineReducers({
//         player: playerReducer,
//         match : matchReducer
//     }),applyMiddleware(...middleware)
// );


import { createStore, combineReducers, applyMiddleware } from 'redux';
import playerReducer from "./players/reducer";
import matchReducer from "./matchs/reducer";
import {thunk} from 'redux-thunk';


const rootReducer = combineReducers({
         player: playerReducer,
        match : matchReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

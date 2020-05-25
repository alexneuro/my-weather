import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import mapReducer from "./reducers/map-reducer";
import weatherReducer from "./reducers/weather-reducer";

let reducers = combineReducers({
    mapStore: mapReducer,
    weatherStore: weatherReducer,
});
export default createStore(reducers, applyMiddleware(thunk));
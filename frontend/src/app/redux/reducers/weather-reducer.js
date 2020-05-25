import {CHANGE_WEATHER_POSITION, SET_CURRENT_MARKER, SET_WEATHER} from "../action-types";

const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {...state, weather: action.weather, inFetch: action.inFetch};
        case CHANGE_WEATHER_POSITION:
            return {...state, weatherPosition: action.position};
        case SET_CURRENT_MARKER:
            return {...state, weather: null};
        default:
            return state;
    }
};

export default reducer;
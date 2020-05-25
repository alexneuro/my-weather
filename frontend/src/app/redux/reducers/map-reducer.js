import {CHANGE_MAP_CENTER, GET_MARKERS, SET_CURRENT_LIKE, SET_CURRENT_MARKER} from "../action-types";

let initialState = {
    markers: [],
    center: {lat: 55.769683, lng: 37.4263561}
};

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MARKERS:
            return {...state, markers: action.markers};
        case CHANGE_MAP_CENTER:
            return {...state, center: action.center};
        case SET_CURRENT_MARKER:
            return {...state, currentMarker: action.marker, currentLike: null};
        case SET_CURRENT_LIKE:
            return {...state, currentLike: action.likeCount, inFetch: action.inFetch};
        default:
            return state;
    }
};
export default mapReducer;


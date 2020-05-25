import {
    CHANGE_MAP_CENTER,
    CHANGE_WEATHER_POSITION,
    GET_MARKERS,
    LIKE_STORE,
    SET_CURRENT_MARKER, SET_CURRENT_LIKE,
    SET_WEATHER
} from "./action-types";

export const changeWeatherPositionAC = (position) => ({type: CHANGE_WEATHER_POSITION, position});
export const setWeatherAC = (weather, inFetch) => ({type: SET_WEATHER, weather, inFetch});
export const setCurrentMarkerAC = (marker) => ({type: SET_CURRENT_MARKER, marker});
export const changeMapCenterAC = (center) => ({type: CHANGE_MAP_CENTER, center});
export const getMarkers = (markers) => ({type: GET_MARKERS, markers});
export const setCurrentLikeAC = (likeCount, inFetch) => ({type: SET_CURRENT_LIKE, likeCount, inFetch});

export const fetchMarkers = (center) => (dispatch) => {
    console.log("ACTIONS fetchMarkers");
    let url = `https://placesws.adidas-group.com/API/search?brand=adidas&geoengine=google&method=get&category=store&latlng=${center.lat()}%2C${center.lng()}%2C13894&page=1&pagesize=500&fields=name%2Cstreet1%2Cstreet2%2Caddressline%2Cbuildingname%2Cpostal_code%2Ccity%2Cstate%2Cstore_o+wner%2Ccountry%2Cstoretype%2Clongitude_google%2Clatitude_google%2Cstore_owner%2Cstate%2Cperformance%2Cbrand_store%2Cfactory_outlet%2Coriginals%2Cneo_label%2Cy3%2Cslvr%2Cchildren%2Cwoman%2Cfootwear%2Cfootball%2Cbasketball%2Coutdoor%2Cporsche_design%2Cmiadidas%2Cmiteam%2Cstella_mccartney%2Ceyewear%2Cmicoach%2Copening_ceremony%2Coperational_status%2Cfrom_date%2Cto_date%2Cdont_show_country&format=json&storetype=ownretail`;

    fetch(url)
        .then(res => res.json())
        .then(
            (res) => {
                dispatch(getMarkers(res.wsResponse.result));
            }
        );
};
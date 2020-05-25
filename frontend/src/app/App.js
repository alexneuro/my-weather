import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {
    changeMapCenterAC,
    changeWeatherPositionAC,
    fetchMarkers, likeStoreAC, setCurrentLikeAC,
    setCurrentMarkerAC,
    setWeatherAC
} from "./redux/actions";
import AdiMap from "./components/Map";
import Informer from "./components/Informer";

let App = (props) => {
    const {
        markers, 
        center, 
        changeCenter, 
        fetchMarkers, 
        changeWeatherPosition, 
        setWeather, 
        weather, 
        weatherInFetch, 
        setCurrentMarker, 
        currentMarker, 
        currentLike, 
        setCurrentLike,
        likeInFetch
    } = props;

    return (
        <div className="App">
            <AdiMap
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyATNV8-Ne_gjUXA-ISEAm9OewJVOBOyTvg"
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `100vh`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
                markers={markers}
                centerPosition={center}
                fetchMarkers={fetchMarkers}
                onDragEnd={changeCenter}
                changeWeatherPosition={changeWeatherPosition}
                currentMarker={currentMarker}
                setCurrentMarker={setCurrentMarker}
            />

            <Informer currentMarker={currentMarker} setWeather={setWeather} weather={weather} weatherInFetch={weatherInFetch}
                      setCurrentMarker={setCurrentMarker} currentLike={currentLike}  likeInFetch={likeInFetch}  setCurrentLike={setCurrentLike}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        markers: state.mapStore.markers,
        center: state.mapStore.center,
        weatherPosition: state.weatherStore.weatherPosition,
        weather: state.weatherStore.weather,
        weatherInFetch: state.weatherStore.inFetch,
        currentMarker: state.mapStore.currentMarker,
        currentLike: state.mapStore.currentLike,
        likeInFetch: state.mapStore.inFetch
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMarkers: (center) => dispatch(fetchMarkers(center)),
        changeCenter: (center) => dispatch(changeMapCenterAC(center)),
        changeWeatherPosition: (position) => dispatch(changeWeatherPositionAC(position)),
        setWeather: (weather, inFetch) => dispatch(setWeatherAC(weather, inFetch)),
        setCurrentMarker: (marker) => dispatch(setCurrentMarkerAC(marker)),
        setCurrentLike: (likeCount, inFetch) => dispatch(setCurrentLikeAC(likeCount, inFetch))
    }
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;

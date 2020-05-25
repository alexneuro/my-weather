import React, {useEffect} from "react";
import styles from "./informer.module.css";
import Weather from "../Weather";
import {LIKE_STORE} from "../../redux/action-types";
import Like from "../Like";

const Informer = (props) => {
    const {
        currentMarker,
        weather,
        weatherInFetch,
        setWeather,
        setCurrentMarker,
        setCurrentLike,
        currentLike,
        likeInFetch
    } = props;
    
    if (currentMarker)
        return (<div className={styles.wrapper}>
            <span className={styles.closeIcon} onClick={() => {
                setCurrentMarker(null)
            }}>x</span>
            <div className={styles.storeName}>
                <h2>{currentMarker.name}</h2>
                <Like currentLike={currentLike} likeInFetch={likeInFetch} currentMarker={currentMarker} setCurrentLike={setCurrentLike}/>
            </div>
            <Weather currentMarker={currentMarker} setWeather={setWeather} weather={weather} weatherInFetch={weatherInFetch}/>
        </div>);
    else return null;
};
export default Informer;
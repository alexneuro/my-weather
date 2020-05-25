import React from "react";
import {useEffect} from "react";
import styles from "./weather.module.css";
import wait from "../../../assets/images/wait.gif";
import error from "../../../assets/images/error.png";


const Weather = (props) => {
    const {
        currentMarker,
        weather,
        weatherInFetch,
        setWeather
    } = props;

    useEffect(() => {
        if (currentMarker && !weather && !weatherInFetch) {
            let position = {
                lat: parseFloat(currentMarker.latitude_google),
                lng: parseFloat(currentMarker.longitude_google)
            };
            setWeather(null, true);
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lng}&units=metric&lang=ru&appid=aab6246ac47b6f5d32ccad26abe7ce59`;
            console.log("Weather.js fetch-Start     getWeather");
            fetch(url)
                .then(res => res.json())
                .then(
                    (res) => {
                        console.log("Weather.js fetch-Success     getWeather");
                        setWeather(res, false);
                    },
                    (error) => {
                        console.log("Weather.js fetch-Error     getWeather");
                        setWeather(null, "error");
                    }
                );
        }
    });

    if (weather === "error")
        return (<img src={error} height={25}  alt={'Error on load!'}/>);
    else if (weather) {
        let temp = weather.main.temp;
        let tempColor = temp > 10 ? styles.red : styles.blue;
        return (
            <div className={styles.weatherMain}>
                <div className={styles.tempWrapper}>
                <span
                    className={`${styles.temp} ${tempColor}`}>{temp > 0 ? `+${temp}` : temp} &deg;C</span>
                    <img className={styles.icon}
                         src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                </div>
                <div className={styles.details}>
                    <p>Pressure: <b>{weather.main.pressure}hPa</b></p>
                    <p>Humidity: <b>{weather.main.humidity}%</b></p>
                </div>
            </div>
        );
    } else return <div className={styles.weatherMain}><img src={wait} height={25}/></div>;
};


export default Weather;